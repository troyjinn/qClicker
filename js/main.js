var qurans = 0;
var level = 0;
var tokens = 0;
var cursors = 0;
var keyboards = 0;
var feels = 0;
var quranspersecond = 0;
var nedJokes = 0;
var harshNoise = 0;

function manualClick(number){
    qurans = qurans + number + level;
    document.getElementById('qurans').innerHTML = qurans;
};

function qClick(number){
    qurans = qurans + number;
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

function harshNoise() {
    var harshNoiseCost = Math.floor(2000 * Math.pow(2.1,harshNoise));
    if(qurans >= harshNoiseCost){
        harshNoise = harshNoise + 1;
        qurans = qurans - harshNoiseCost;
        document.getElementById('harshNoise').innerHTML = harshNoise;
        document.getElementById('qurans').innerHTML = qurans;
    };
    var nextCost = Math.floor(2000 * Math.pow(2.1,harshNoiseCost));
    document.getElementById('harshNoiseCost').innerHTML = nextCost;
};

function save(){
    var save = {
        qurans: qurans,
        level: level,
        tokens: tokens,
        cursors: cursors,
        keyboards: keyboards,
        feels: feels,
        nedJokes: nedJokes,
        harshNoise: harshNoise
    };
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
    if(typeof savegame.harshNoise !== "undefined") harshNoise = savegame.harshNoise;
};

window.setInterval(function(){
    var currentQurans = qurans;
    qClick((cursors)/2);
    qClick((keyboards * 2)/2);
    qClick((feels * 6)/2);
    qClick((nedJokes * 10)/2);
    qClick((harshNoise * 20)/2);

    var quranspersecond = (qurans - currentQurans) * 2;
    document.getElementById('quranspersecond').innerHTML = quranspersecond;

    levelUp();
}, 500);

window.setInterval(function(){
    save();
}, 10000)
/* Automatic save and load function here
window.onload = function(){
    load()
};

window.onbeforeunload = function(e){
    if(e){
        save();
    };
};
*/
