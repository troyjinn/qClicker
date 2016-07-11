var qurans = 0;
var cursors = 0;
var keyboards = 0;
var feels = 0;

function qClick(number){
    qurans = qurans + number;
    document.getElementById("qurans").innerHTML = qurans;
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
    var feelCost = Math.floor(200 * Math.pow(1.5,keyboards));
    if(qurans >= feelCost){
        feels = feels + 1;
        qurans = qurans - feelCost;
        document.getElementById('keyboards').innerHTML = feels;
        document.getElementById('qurans').innerHTML = qurans;
    };
    var nextCost = Math.floor(200 * Math.pow(1.5,feels));
    document.getElementById('feelCost').innerHTML = nextCost;
};

window.setInterval(function(){
    qClick(cursors);
    qClick(keyboards * 2);
    qClick(keyboards * 5);
}, 1000);
