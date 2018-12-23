var level = "level1";
var correct = 0;
var wrong = 0;
var unaswr = 0;
var t_correct = 0;
var t_wrong = 0;
var t_unaswr = 0;
var timer_run = false;
var lvl1_time = 20;
var lvl2_time = 5;
var lvl2_i = 0;


var level1 = [
     {
        question: "Which rap group was totally crossed out?",
        opt: ["2 Pac","Kris Kross","2 Live Crew","M C Hammer"],
        aswr: 1
    },
    {
        question: "Who sang 'Renegades Of Funk'?",
        opt: ["Rage Against the Machine","Red Hot Chili Peppers","George Clinton","U2"],
        aswr: 0
    },
    {
        question: "What movie star danced Mary Jane's Last Dance with Tom Petty?",
        opt: ["Courtney Cox","Heather Locklear","Julia Roberts","Kim Basinger"],
        aswr: 3
    },
    {
        question: "Who bumped Michael Jackson off the number 1 spot in January 1992?",
        opt: ["Nirvana","Mariah Carey","Whitney Houston","Pearl Jam"],
        aswr: 0
    },
    {
        question: "What is Pearl Jam's second album?",
        opt: ["Ten","No Code","Binaural","Vs"],
        aswr: 3
    },
    {
        question: "What is the correct order of Nirvana studio albums by release date (oldest to newest)?",
        opt: ["In Utero, Nevermind, Bleach","Nevermind, Bleach, In Utero","Bleach, Nevermind, In Utero","Blech, In Utero,Nevermind"],
        aswr: 2
    },
    {
        question: "Which girl group said 'If you want my future, forget my past. If you wanna get with me, better make it last'?",
        opt: ["TLC","Spice Girls","En Vogue","Salt n Pepa"],
        aswr: 1
    },
    {
        question: "Which band's 1994 live reunion tour is titled 'Hell Freezes Over'?",
        opt: ["Guns n Roses","Black Sabbath","The Smiths","Eagles"],
        aswr: 3
    },
    {
        question: "Who legally adopted a symbol to replace his name in 1993?",
        opt: ["Michael Jackson","Elton John","Prince","Vanilla Ice"],
        aswr: 2
    },
    {
        question: "What nationality is the 1990s pop group 'Ace of Base'? ",
        opt: ["Swedish","Norwegian","French","Danish"],
        aswr: 0
    }

];

var level2 = [
    {
        question: "Insomniac and Dookie were 1990s albums by which American punk rock band?",
        opt: ["Bloodhound Gang","Green Day","Blink 182","The Offspring"],
        aswr: 1
    },
    {
        question: "American singer, songwriter Mariah Carey had her first number one song of the 1990s with which song?",
        opt: ["Vision of Love","All I Need","Glitter","Without You"],
        aswr: 0
    },
    {
        question: "What song is this line from? 'All five horizons revolved around the sun.'",
        opt: ["Red Hot Chili Peppers","Soundgarden","Pearl Jam","Mother Love Bone"],
        aswr: 2
    },
    {
        question: "Who sang this: 'It's sittin' by the overcoat, the second shelf, the note she wrote.'",
        opt: ["Smashmouth","Counting Crows","Backstreet Boys","Matchbox 20"],
        aswr: 3
    },
    {
        question: "Nirvana - In Utero (1993) Which was the first single released off of this album?",
        opt: ["Smells Like Teen Spirt","Come As You Are","Heart Shaped Box","Pennyroyal Tea"],
        aswr: 2
    },
    {
        question: "What a girl wants, What a girl ____",
        opt: ["has","has to have","wants","needs"],
        aswr: 3
    },
    {
        question: "Who sang 'Private Show'?",
        opt: ["Pink","Jessica Simpson","Prince","Eden's Crush"],
        aswr: 0
    },
    {
        question: "What is the name of the first hit single by 3 Doors Down?",
        opt: ["Rusty Cage","Kryptonite","Superman","Hunger Strike"],
        aswr: 1
    },
    {
        question: "Which Green Day album was released in 1994 with songs like Longview', 'Basket Case', and 'When I Come Around'?",
        opt: ["American Idiot","Green Day","Dookie","Kerplunk"],
        aswr: 2
    },
    {
        question: "Name the classic rock band from Boston that came out with a hit album, and a trilogy of music videos for it.",
        opt: ["J. Geils Band","Boston","Staind","Aerosmith"],
        aswr: 3
    }

];

$("#start_btn").on("click",function() {
    $("#start_btn").css("display","none");
    set_questions();
    $("#submit").css("display","block");

});

function set_questions(){
    if(level == "level1")
    {
        for(var i = 0; i < level1.length; i++)
        {
            question(i);
            options(i);
            
        }  
        if(!timer_run)
        {
            timer_run = true;
            $("#timer").html("<h2>Time Left: "+lvl1_time+" seconds</h2>");    
            quiz_time();
        }  
    }
    else if (level == "level2")
    {
        if (lvl2_i < 10)
        {
            question2(lvl2_i);
            options2(lvl2_i);
            if(!timer_run)
            {
                timer_run = true;
                $("#timer").html("<h2>Time Left: "+lvl2_time+" seconds</h2>"); 
                quiz_t();
            }
        }
        else
        {
            score();
        }
    }
}

function quiz_time(){
    intID = setInterval(dec, 1000);
}

function dec(){
    if (lvl1_time === 0)
    {
        timer_run = false;
        clearInterval(intID);
        $("#submit").css("display","none");
        lvl1_valid();
    }
    else
    {
        lvl1_time--;
        $("#timer").html("<h2>Time Left: "+lvl1_time+" seconds</h2>");
    }
}

function quiz_t(){
    intID = setInterval(dr, 1000);
}

function dr(){
    if (lvl2_time === 0)
    {
        timer_run = false;
        clearInterval(intID);
        // $("#submit").css("display","none");
        lvl2_valid();
        lvl2_time = 5;
    }
    else
    {
        lvl2_time--;
        $("#timer").html("<h2>Time Left: "+lvl2_time+" seconds</h2>");
    }
}

function question(x){
    var clss = x;
    console.log(clss);
    console.log(level1[x].question);
    var ques_col = $("<div>");
    ques_col.addClass("quest " + clss);
    ques_col.html("<br>"+ level1[x].question+"</br>");
    console.log(ques_col);

    $(".ques-space").append(ques_col);
}

function question2(x){
    var clss = x;
    console.log(clss);
    console.log(level2[x].question);
    var ques_col = $("<div>");
    ques_col.addClass("quest " + clss);
    ques_col.html("<br>"+ level2[x].question+"</br>");
    console.log(ques_col);

    $(".ques-space").append(ques_col);
}

function options(x){
    var ques_opt = $("<div>");
    ques_opt.addClass("Q"+x);
    for(var i=0; i<level1[x].opt.length;i++){
        var InputOpt = $("<input>");
        InputOpt.attr("type","radio");
        InputOpt.attr("name", x);
        InputOpt.attr("id", i);
        var lbl = $("<label>");
        lbl.attr("for",i);
        lbl.html(level1[x].opt[i]);
        ques_opt.append(InputOpt);
        ques_opt.append(lbl);
    }

    $(".ques-space").append(ques_opt);
    
}

function options2(x){
    var ques_opt = $("<div>");
    ques_opt.addClass("Q"+x);
    for(var i=0; i<level2[x].opt.length;i++){
        var InputOpt = $("<input>");
        InputOpt.attr("type","radio");
        InputOpt.attr("name", x);
        InputOpt.attr("id", i);
        var lbl = $("<label>");
        lbl.attr("for",i);
        lbl.html(level2[x].opt[i]);
        ques_opt.append(InputOpt);
        ques_opt.append(lbl);
    }

    $(".ques-space").append(ques_opt);
    
}

$("#submit").on("click",function() {
    if (level == "level1")
    {
        timer_run = false;
        clearInterval(intID);
        $("#submit").css("display","none");
        lvl1_valid();
    }
    else if (level == "level2")
    {
        timer_run = false;
        clearInterval(intID);
        lvl2_valid();
    }
});

$("#reset").on("click",function() {
    correct = 0;
    wrong = 0;
    unaswr = 0;
    lvl1_time = 20;
    level="level1";
    $(".ques-space").empty();
    set_questions();
    $("#submit").css("display","block");
    $("#reset").css("display","none");
});

$("#lvl2").on("click",function() {
    level="level2";
    correct = 0;
    wrong = 0;
    unaswr = 0;
    $(".ques-space").empty();
    set_questions();
    $("#submit").css("display","block");
    $("#lvl2").css("display","none");
});

function lvl1_valid(){
    for(var i = 0; i < level1.length; i++)
        {
            answr_valid(i);
            
        }
    score();
    if(correct >= 8)
    {
        $("#submit").css("display","none");
        $("#lvl2").css("display","block");
    }
    else
    {
        $("#reset").css("display","block"); 
        $("#submit").css("display","none");
    }    
}

function lvl2_valid(){
    if (lvl2_i < 10)
    {
        answr_valid(lvl2_i);
        lvl2_i++;
        $(".ques-space").empty();
        set_questions();
    }
    
}

function answr_valid(x){
    if($("input[name="+x+"]:checked").attr("id") == level1[x].aswr)
    {
        correct++;
    }
    else if($("input[name="+x+"]:checked").val() === undefined)
    {
        unaswr++;
    }
    else
    {
        wrong++;
    }
    
}

function score(){
    $(".ques-space").empty();
    var rlts_title = $("<h3>");
    if(level == "level1")
    {
        rlts_title.html("Level 1 Results");
    }
    else if (level == "level2")
    {
        rlts_title.html("Level 2 Results");
    }
    $(".ques-space").append(rlts_title);

    // create table for displaying results.
    var tbl = $("<table>");
    var tbdy = $("<tbody>");
    var trow1 = $("<tr>");
    var trow2 = $("<tr>");
    var trow3 = $("<tr>");

    tbl.addClass("results");
    tbl.append(tbdy);
    

    var corhd = $("<th>").html("Questions Correct:");
    var cor = $("<td>").html(correct);
    trow1.append(corhd,cor);
    
    var wrghd = $("<th>").html("Questions Wrong:");
    var wrg = $("<td>").html(wrong);
    trow2.append(wrghd,wrg);

    var uahd = $("<th>").html("Questions Unaswered:");
    var ua = $("<td>").html(unaswr);
    trow3.append(uahd, ua);

    tbl.append(trow1, trow2, trow3);
    
    $(".ques-space").append(tbl);
}