var qurans = 0;
var cursors = 0;

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

window.setInterval(function(){
    qClick(cursors);
}, 1000);
