var nxt_arrival = "";
var min_away = "";

// Initialize Firebase

var config = {
    apiKey: "AIzaSyA8ffHCnzkXuvg7gPmwMD7CFY-R-KX0KI0",
    authDomain: "homework07-a202b.firebaseapp.com",
    databaseURL: "https://homework07-a202b.firebaseio.com",
    projectId: "homework07-a202b",
    storageBucket: "homework07-a202b.appspot.com",
    messagingSenderId: "44124538931"
  };
  firebase.initializeApp(config);

var db = firebase.database();

$("#submit").on("click", function(event) {
    event.preventDefault();

    var trnname = $("#trainname").val();
    var dst = $("#dest").val();
    var strtime = $("#str_time").val();
    var frq = parseInt($("#frqy").val());

    if(strtime > "24:00")
    {
        $("#time-err").modal("show");
    }
    else
    {
        db.ref().push({
            train_name: trnname,
            train_dest: dst,
            train_str_time: strtime,
            train_freq: frq
        })
    }   
});

db.ref().on("child_added", function(childSnapshot) {
    
    train_time(childSnapshot.val().train_str_time, childSnapshot.val().train_freq);

    var train_row = $("<tr>");
    var tname = $("<td>").text(childSnapshot.val().train_name);
    var dest = $("<td>").text(childSnapshot.val().train_dest);
    var freq = $("<td>").text(childSnapshot.val().train_freq);
    var next_arrival = $("<td>").text(nxt_arrival);
    var minaway = $("<td>").text(min_away);

    train_row.append(tname, dest, freq, next_arrival, minaway);

    $(".trows").append(train_row);
});

function train_time(s_time,fq) {
    var curtime = moment().format("HH:mm");
    var str_time = s_time;
    if (curtime < str_time)
    {
        nxt_arrival = moment(str_time, "HH:mm").add(fq,"minutes").format("HH:mm");
        min_away = moment(nxt_arrival,"HH:mm").diff(moment(curtime,"HH:mm"),"minutes");
        return nxt_arrival;
        return min_away;
        
    }
    else
    {
        // var tmp_time = moment(str_time,"HH:mm").fromNow();
        var tmp_time = moment().diff(moment(str_time,"HH:mm"),"minutes");
        var trip_it = tmp_time / fq;
        var trip_it_rm = fq % tmp_time;
        nxt_arrival = moment(curtime,"HH:mm").add(trip_it_rm,"minutes").format("HH:mm");
        min_away = trip_it_rm - 1;
        return nxt_arrival;
        return min_away;
    }
}