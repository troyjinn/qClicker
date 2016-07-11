var qurans = 0;
var level = 0;
var tokens = 0;
var cursors = 0;
var keyboards = 0;
var feels = 0;
var quranspersecond = 0;
var nedJokes = 0;



function qClick(number){
    qurans = qurans + number + level;
    document.getElementById("qurans").innerHTML = qurans;
};

function levelUp(){
    var exp = Math.floor(500 * Math.pow(1.5,level));
    if(qurans >= exp){
        level = level + 1;
        document.getElementById('level').innerHTML = level;
    };
    var nextLevel = Math.floor(500 * Math.pow(1.5,level));
    document.getElementById('nextLevel').innerHTML = nextLevel;
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
    if(qurans >= cursorCost){
        cursors = cursors + 1;
        qurans = qurans - cursorCost;
        document.getElementById('cursors').innerHTML = cursors;
        document.getElementById('qurans').innerHTML = qurans;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
    document.getElementById('cursorCost').innerHTML = nextCost;
};

function buyKeyboard(){
    var keyboardCost = Math.floor(50 * Math.pow(1.3,keyboards));
    if(qurans >= keyboardCost){
        keyboards = keyboards + 1;
        qurans = qurans - keyboardCost;
        document.getElementById('keyboards').innerHTML = keyboards;
        document.getElementById('qurans').innerHTML = qurans;
    };
    var nextCost = Math.floor(50 * Math.pow(1.3,keyboards));
    document.getElementById('keyboardCost').innerHTML = nextCost;
};

function buyFeel(){
    var feelCost = Math.floor(200 * Math.pow(1.5,feels));
    if(qurans >= feelCost){
        feels = feels + 1;
        qurans = qurans - feelCost;
        document.getElementById('feels').innerHTML = feels;
        document.getElementById('qurans').innerHTML = qurans;
    };
    var nextCost = Math.floor(200 * Math.pow(1.5,feels));
    document.getElementById('feelCost').innerHTML = nextCost;
};

function nedJoke() {
    var nedJokeCost = Math.floor(600 * Math.pow(1.8,nedJokes));
    if(qurans >= nedJokeCost){
        nedJokes = nedJokes +1;
        qurans = qurans - nedJokeCost;
        document.getElementById('nedJokes').innerHTML = nedJokes;
        document.getElementById('qurans').innerHTML = qurans;
    };
    var nextCost = Math.floor(600 * Math.pow(1.8,nedJokes));
    document.getElementById('nedJokeCost').innerHTML = nextCost;
};

function save(){
    var save = {
        qurans: qurans,
        level: level,
        tokens: tokens,
        cursors: cursors,
        keyboards: keyboards,
        feels: feels,
        nedJokes: nedJokes
    }
    localStorage.setItem("save",JSON.stringify(save));
};

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if(typeof savegame.qurans !== "undefined") qurans = savegame.qurans;
    if(typeof savegame.level !== "undefined") level = savegame.level;
    if(typeof savegame.tokens !== "undefined") tokens = savegame.tokens;
    if(typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
    if(typeof savegame.keyboards !== "undefined") keyboards = savegame.keyboards;
    if(typeof savegame.feels !== "undefined") feels = savegame.feels;
    if(typeof savegame.nedJokes !== "undefined") nedJokes = savegame.nedJokes;
};

window.setInterval(function(){
    var currentQurans = qurans;
    qClick(cursors);
    qClick(keyboards * 2);
    qClick(feels * 5);
    qClick(nedJokes * 10);

    var quranspersecond = qurans - currentQurans;
    document.getElementById('quranspersecond').innerHTML = quranspersecond;

    levelUp();
}, 1000);

window.onload = function(){
    load()
};

window.onbeforeunload = function(e){
    if(e){
        save();
        e.returnValue = 'Are you sure?';
    };
};
