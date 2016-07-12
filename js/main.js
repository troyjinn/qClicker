var qurans = 0;
var clickTime = 500;
var level = 0;
var tokens = 0;
var cursors = 0;
var keyboards = 0;
var feels = 0;
var quranspersecond = 0;
var nedJokes = 0;
var noiseAlbums = 0;
var twelvieCalls = 0;

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
        tokens = tokens + 1;
        document.getElementById('level').innerHTML = level;
        document.getElementById('tokens').innerHTML = tokens;
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

function buyNoise() {
    var noiseCost = Math.floor(3000 * Math.pow(2.1,noiseAlbums));
    if(qurans >= noiseCost){
        noiseAlbums = noiseAlbums + 1;
        qurans = qurans - noiseCost;
        document.getElementById("noiseAlbums").innerHTML = noiseAlbums;
        document.getElementById("qurans").innerHTML = qurans;
    };
    var nextCost = Math.floor(3000 * Math.pow(2.1,noiseAlbums));
    document.getElementById("noiseCost").innerHTML = nextCost;
};

function twelvie() {
    var callCost = Math.floor(12000 * Math.pow(2.5,twelvieCalls));
    if(qurans >= callCost){
        twelvieCalls = twelvieCalls + 1;
        qurans = qurans - callCost;
        document.getElementById("twelvieCalls").innerHTML = twelvieCalls;
        document.getElementById("qurans").innerHTML = qurans;
    };
    var nextCost = Math.floor(12000 * Math.pow(2.5,twelvieCalls));
    document.getElementById("callCost").innerHTML = nextCost;
};

function fortune() {
    if(tokens>0){
        tokens = tokens - 1;
        i = (Math.floor(Math.random() * 100) + 1);
        if(i>=65 && i<95){
            a = (Math.floor(Math.random() * 10) + 1);
            x = a * 1000;
            qurans = qurans + x;
            document.getElementById('fortune').innerHTML = x;
        }else if(i>=95){
            qurans = qurans * 2;
            document.getElementById('fortune').innerHTML = "Double ";
            document.getElementById('qurans').innerHTML = qurans;
        }else{
            a = (Math.floor(Math.random() * 10) + 1);
            x = a * 100 * -1;
            qurans = qurans + x;
            document.getElementById('fortune').innerHTML = x;
        };
        document.getElementById('tokens').innerHTML = tokens;
    };
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
        noiseAlbums: noiseAlbums,
        twelvieCalls: twelvieCalls
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
    if(typeof savegame.noiseAlbums !== "undefined") nedJokes = savegame.noiseAlbums;
    if(typeof savegame.twelvieCalls !== "undefined") twelvieCalls = savegame.twelvieCalls;
};

function kys() {
    localStorage.removeItem("save");
    location.reload();
};

window.setInterval(function(){
    var currentQurans = qurans;
    qClick((cursors)/2);
    qClick((keyboards * 2)/2);
    qClick((feels * 6)/2);
    qClick((nedJokes * 10)/2);
    qClick((noiseAlbums * 20)/2);
    qClick((twelvieCalls * 112)/2);

    var quranspersecond = (qurans - currentQurans) * 2;
    document.getElementById('quranspersecond').innerHTML = quranspersecond;

    levelUp();
}, clickTime);

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
