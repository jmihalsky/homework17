// Jewel game code
var rndnum = 0;
var jwl_rando = 0;
var jewel_val = [];
var MinVal = 55;
var MaxVal = 150;
var JMinVal = 1;
var JMaxVal = 15;
var usrNum = 0;
var wins = 0;
var losses = 0;


// Generate random number between 55 and 150 that user will add numbers up against.
function rndo(){
 var rndnum_temp = MinVal+(Math.random()*(MaxVal-MinVal));
 rndnum = Math.round(rndnum_temp);
 return rndnum;
}

// Generate random numbers for buttons.
function j_rndo(){
    var j_temp = JMinVal+(Math.random()*(JMaxVal-JMinVal));
    jwl_rando = Math.round(j_temp);
}

// Function to generate random numbers for each button.
function jwl_value(){
    for(var i = 0; i < 4;i++){
        j_rndo();
        jewel_val.push(jwl_rando);
    }
}

// Function to start the game and for reset after a win or loss.
function game_start(){
    jewel_val = [];
    usrNum = 0;
    rndo();
    console.log(rndnum);
    $("#rando").html(rndnum);
    $("#usrscore").html(0);
    jwl_value();
    console.log(jewel_val);
}


game_start();

$('.jewel').on("click", function(){
    usrNum += jewel_val[$(this).val()];
    console.log(usrNum);
    $("#usrscore").html(usrNum);
    jewel_validate();
});

function jewel_validate(){
    if (usrNum == rndnum)
    {
        wins++;
        $("#wins").html(wins);
        game_start();
    }
    else if (usrNum > rndnum)
    {
        losses++;
        $("#losses").html(losses);
        game_start();
    }
}

// StarWars RPG Code
var charArry = ["luke","obiwan","darthsidious","darthmaul"];
var sltChar = {};
var sltDef = {};
var fight = false;
var kills = 0;
var killArry = [];

// character objects
var luke = {
    name: "Luke Skywalker",
    start_health: 100,
    health: 100,
    attack: 5,
    counterattack: 5,
    clss: "luke",
    char_image: "../../images/RPG/lukeskywalker.jpg"
};

var obiwan = {
    name: "Obi-Wan Kenobi",
    start_health: 120,
    health: 120,
    attack: 8,
    counterattack: 8,
    clss: "obiwan",
    char_image: "../../images/RPG/obiwankenobi.jpg"
};

var darthsidious = {
    name: "Darth Sidious",
    start_health: 150,
    health: 150,
    attack: 20,
    counterattack: 20,
    clss: "darthsidious",
    char_image: "../../images/RPG/darthsidious.jpg"
};

var darthmaul = {
    name: "Darth Maul",
    start_health: 180,
    health: 180,
    attack: 25,
    counterattack: 25,
    clss: "darthmaul",
    char_image: "../../images/RPG/darthmaul.png"
};

// create charater buttons on the DOM
function set_avail_chars(){
addObiWan();
addLuke();
addDarthSidious();
addDarthMaul();
}

// character creation code.
function addObiWan(){
    var char_col = $("<div>");
    char_col.addClass("col-xs-6 col-sm-6 col-md-2 avail " + obiwan.clss);
    $(".avail-chars").append(char_col);

    var char_name = $("<div>");
    char_name.addClass("charname");
    char_name.text(obiwan.name);
    char_col.append(char_name);

    char_col.append("<img src=" + obiwan.char_image + ">");

    var char_hlth = $("<div>");
    char_hlth.addClass("charhealth");
    char_hlth.text(obiwan.health);
    char_col.append(char_hlth);
}

function addLuke(){
    var char_col = $("<div>");
    char_col.addClass("col-xs-6 col-sm-6 col-md-2 avail " + luke.clss);
    $(".avail-chars").append(char_col);

    var char_name = $("<div>");
    char_name.addClass("charname");
    char_name.text(luke.name);
    char_col.append(char_name);

    char_col.append("<img src=" + luke.char_image + ">");

    var char_hlth = $("<div>");
    char_hlth.addClass("charhealth");
    char_hlth.text(luke.health);
    char_col.append(char_hlth);
}

function addDarthSidious(){
    var char_col = $("<div>");
    char_col.addClass("col-xs-6 col-sm-6 col-md-2 avail " + darthsidious.clss);
    $(".avail-chars").append(char_col);

    var char_name = $("<div>");
    char_name.addClass("charname");
    char_name.text(darthsidious.name);
    char_col.append(char_name);

    char_col.append("<img src=" + darthsidious.char_image + ">");

    var char_hlth = $("<div>");
    char_hlth.addClass("charhealth");
    char_hlth.text(darthsidious.health);
    char_col.append(char_hlth);
}

function addDarthMaul(){
    var char_col = $("<div>");
    char_col.addClass("col-xs-6 col-sm-6 col-md-2 avail " + darthmaul.clss);
    $(".avail-chars").append(char_col);

    var char_name = $("<div>");
    char_name.addClass("charname");
    char_name.text(darthmaul.name);
    char_col.append(char_name);

    char_col.append("<img src=" + darthmaul.char_image + ">");

    var char_hlth = $("<div>");
    char_hlth.addClass("charhealth");
    char_hlth.text(darthmaul.health);
    char_col.append(char_hlth);
}

set_avail_chars();

$(".obiwan").on("click", function(){
    if (jQuery.isEmptyObject(sltChar))
    {
        sltChar = obiwan;
        $(".sel-char").append($(this));
        $(".sel-enem").append($(".luke"));

        $(".luke").removeClass("avail");
        $(".luke").addClass("enemy");

        $(".sel-enem").append($(".darthsidious"));

        $(".darthsidious").removeClass("avail");
        $(".darthsidious").addClass("enemy");

        $(".sel-enem").append($(".darthmaul"));

        $(".darthmaul").removeClass("avail");
        $(".darthmaul").addClass("enemy");
    }
    else if (jQuery.isEmptyObject(sltDef))
    {
        sltDef = obiwan;
        fight = true;
        $(".def-char").append($(this));
        $(".obiwan").removeClass("enemy");
        $(".obiwan").addClass("fighter");
    }

});

$(".luke").on("click", function(){
    if (jQuery.isEmptyObject(sltChar))
    {
        sltChar = luke;
        $(".sel-char").append($(this));
        $(".sel-enem").append($(".obiwan"));

        $(".obiwan").removeClass("avail");
        $(".obiwan").addClass("enemy");

        $(".sel-enem").append($(".darthsidious"));

        $(".darthsidious").removeClass("avail");
        $(".darthsidious").addClass("enemy");

        $(".sel-enem").append($(".darthmaul"));

        $(".darthmaul").removeClass("avail");
        $(".darthmaul").addClass("enemy");
    }
    else if (jQuery.isEmptyObject(sltDef))
    {
        sltDef = luke;
        fight = true;
        $(".def-char").append($(this));
        $(".luke").removeClass("enemy");
        $(".luke").addClass("fighter");
    }

});

$(".darthsidious").on("click", function(){
    if (jQuery.isEmptyObject(sltChar))
    {
        sltChar = darthsidious;
        $(".sel-char").append($(this));
        $(".sel-enem").append($(".obiwan"));

        $(".obiwan").removeClass("avail");
        $(".obiwan").addClass("enemy");

        $(".sel-enem").append($(".luke"));

        $(".luke").removeClass("avail");
        $(".luke").addClass("enemy");

        $(".sel-enem").append($(".darthmaul"));

        $(".darthmaul").removeClass("avail");
        $(".darthmaul").addClass("enemy");
    }
    else if (jQuery.isEmptyObject(sltDef))
    {
        sltDef = darthsidious;
        fight = true;
        $(".def-char").append($(this));
        $(".darthsidious").removeClass("enemy");
        $(".darthsidious").addClass("fighter");
    }
});

$(".darthmaul").on("click", function(){
    if (jQuery.isEmptyObject(sltChar))
    {
        sltChar = darthmaul;
        $(".sel-char").append($(this));
        $(".sel-enem").append($(".obiwan"));

        $(".obiwan").removeClass("avail");
        $(".obiwan").addClass("enemy");

        $(".sel-enem").append($(".luke"));

        $(".luke").removeClass("avail");
        $(".luke").addClass("enemy");

        $(".sel-enem").append($(".darthsidious"));

        $(".darthsidious").removeClass("avail");
        $(".darthsidious").addClass("enemy");
    }
    else if (jQuery.isEmptyObject(sltDef))
    {
        sltDef = darthmaul;
        fight = true;
        $(".def-char").append($(this));
        $(".darthmaul").removeClass("enemy");
        $(".darthmaul").addClass("fighter");
    }

});

// attack function
$(".attack").on("click", function(){
    if( fight === true){
        var sel_dam = 0;
        var def_dam = 0;
        sel_dam = sltChar.health - sltDef.attack;
        sltChar.health = sel_dam;
        $("." + sltChar.clss).find(".charhealth").text(sel_dam);
        def_dam = sltDef.health - sltChar.attack;
        sltDef.health = def_dam;
        $("." + sltDef.clss).find(".charhealth").text(def_dam);
        attack_msg();
        sltChar.attack = sltChar.attack + sltChar.counterattack;
        console.log(sltChar.attack);
        game_chk();
    }
    else
    {

    }
});

$(".game-reset").on("click", function(){
    resetA();
});

function game_chk(){
    console.log(sltDef.health);
    if(sltChar.health <= 0)
    {
        fight = false;
        sltChar = {};
        sltDef = {};
        $(".atk-msg-1").text("You lose. Hit the Reset Button and try again.");
        $(".atk-msg-2").empty();
        $(".game-reset").append("<button class-'btn btn-primary game-reset'>Reset</button>");

    }
    else if (sltDef.health <= 0)
    {   
        if (kills < 4){
            fight = false;
            // $(".defeated").append($("." + sltDef.clss));
            killArry.push(sltDef.clss);
            sltDef = {};
            $(".atk-msg-1").text("You won! Select another opponent.");
            $(".atk-msg-2").empty();
            $(".fighter").remove();
            
        }
        else
        {
            fight = false;
            $(".atk-msg-1").text("You won the game! Hit the reset button to play again.");
            $(".atk-msg-2").empty();
            $(".game-reset").append("<button class-'btn btn-primary game-reset'>Reset</button>");
        }

    }
}

// messaging function
function attack_msg(){
    $(".atk-msg-1").text("You attacked " + sltDef.name + " for " + sltChar.attack + " damage.");
    $(".atk-msg-2").text(sltDef.name + " attacked you back for " + sltDef.attack + " damage.");
}

// reset game
function resetA(){
    sltChar = {};
    sltDef = {};
    // $(".sel-char").empty();
    // $(".sel-enem").empty();
    // $(".def-char").empty();
    // $(".game-reset").empty();
    // $(".atk-msg-1").empty();
    // $(".atk-msg-2").empty();
    // $(".avail-chars").empty();
    $(".avail").remove();
    $(".enemy").remove();
    $(".fighter").remove();
    obiwan.health = obiwan.start_health;
    luke.health = luke.start_health;
    darthsidious.health = darthsidious.start_health;
    darthmaul.health = darthmaul.start_health;
    console.log(sltChar);
    set_avail_chars();
    $(".atk-msg-1").empty();
    $(".game-reset").remove();
    // for(var i = 0; i < killArry.length; i++)
    // {
    //     $(".avail-chars").append($("." + killArry[i]));
    // }
    
    
}