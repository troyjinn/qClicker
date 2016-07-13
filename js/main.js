var qurans = 0;
var clickTime = 100;
var level = 0;
var tokens = 0;
var cursors = 0;
var keyboards = 0;
var feels = 0;
var quranspersecond = 0;
var nedJokes = 0;
var noiseAlbums = 0;
var twelvieCalls = 0;
var beaneggs = 0;
var friendzones = 0;

//prettify
function prettify(input) {
    x = 10000
    var output = Math.round(input * x)/x;
        return output;
};

//clicks

function manualClick(number){
    qurans = qurans + number + level;
};

function qClick(number){
    qurans = qurans + number;
    document.getElementById("qurans").innerHTML = qurans;
    document.getElementById('qurans').innerHTML = prettify(qurans);
};

//levels

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

//items

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

function buyBeanegg() {
    var beaneggCost = Math.floor(80000 * Math.pow(2.7,beaneggs));
    if(qurans >= beaneggCost){
        beaneggs = beaneggs + 1;
        qurans = qurans - beaneggCost;
        document.getElementById("beaneggs").innerHTML = beaneggs;
        document.getElementById("qurans").innerHTML = qurans;
    };
    var nextCost = Math.floor(80000 * Math.pow(2.7,beaneggs));
    document.getElementById("beaneggCost").innerHTML = nextCost;
};

function friendZone() {
    var friendzoneCost = Math.floor(200000 * Math.pow(3,friendzones));
    if(qurans >= friendzoneCost){
        friendzones = friendzones + 1;
        qurans = qurans - friendzoneCost;
        document.getElementById("friendzones").innerHTML = friendzones;
        document.getElementById("qurans").innerHTML = qurans;
    };
    var nextCost = Math.floor(200000 * Math.pow(3,friendzones));
    document.getElementById("friendzoneCost").innerHTML = nextCost;
};

//fortune

function fortune() {
    if(tokens>0){
        tokens = tokens - 1;
        i = (Math.floor(Math.random() * 100) + 1);
        if(i>=40 && i<95){
            a = (Math.floor(Math.random() * 10) + 1);
            x = a * 1000;
            qurans = qurans + x;
            document.getElementById('fortune').innerHTML = x;
        }else if(i>=95 && i<99){
            qurans = qurans * 2;
            document.getElementById('fortune').innerHTML = "Double ";
            document.getElementById('qurans').innerHTML = qurans;
        } else if (i >= 99) {
            qurans = qurans * 10;
            document.getElementById('fortune').innerHTML = "Ten times your ";
            document.getElementById('qurans').innerHTML = qurans;
        } else if (i <= 5) {
            qurans = qurans * -1;
            document.getElementById('fortune').innerHTML = "5%, Negative Qurans ";
            document.getElementById('qurans').innerHTML = qurans;
        } else if (i == 1) {
            kys();
        }else{
            a = (Math.floor(Math.random() * 10) + 1);
            x = a * 1000 * -1;
            qurans = qurans + x;
            document.getElementById('fortune').innerHTML = x;
        };
        document.getElementById('tokens').innerHTML = tokens;
    };
};

//save

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
        twelvieCalls: twelvieCalls,
        beaneggs: beaneggs,
        friendzones: friendzones
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
    if(typeof savegame.noiseAlbums !== "undefined") noiseAlbums = savegame.noiseAlbums;
    if(typeof savegame.twelvieCalls !== "undefined") twelvieCalls = savegame.twelvieCalls;
    if(typeof savegame.beaneggs !== "undefined") beaneggs = savegame.beaneggs;
    if(typeof savegame.friendzones !== "undefined") friendzones = savegame.friendzones;
};

function kys() {
    localStorage.removeItem("save");
    location.reload();
};

//quran gains

window.setInterval(function(){
    var currentQurans = qurans;
    qClick((cursors)/10);
    qClick((keyboards * 2)/10);
    qClick((feels * 6)/10);
    qClick((nedJokes * 10)/10);
    qClick((noiseAlbums * 20)/10);
    qClick((twelvieCalls * 60)/10);
    qClick((beaneggs * 120)/10);
    qClick((friendzones * 200)/10);

    var quranspersecond = (qurans - currentQurans) * 10;
    document.getElementById('quranspersecond').innerHTML = prettify(quranspersecond);

    levelUp();
    milestone();
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
