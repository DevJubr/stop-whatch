var hr = 0;
var min = 0;
var sec = 0;
var cont = 0;

var taimer = false;

function str() {
    taimer = true;
    stpwatch();
}

function stp(){
    taimer = false;
    stpwatch();
}
function rst() {
    taimer = false;
    hr = 0;
    min = 0;
    sec = 0;
    cont = 0;

    document.getElementById('hr').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('cnt').innerHTML = '00';
    
}

function stpwatch() {
    if(taimer == true) {
        cont = cont+1;


        if(cont == 100){
            sec = sec + 1;
            cont = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr +1;
            min = 0;
            sec = 0;
        }
        
        var hs = hr;
        var ms = min;
        var ss = sec;
        var cs = cont;

        if( hr < 10){
            hs = '0' + hs;
        }

        if(min<10) {
            ms = '0' + ms;
        }

        if(sec<10) {
            ss = '0' + ss;
        }

        if(cont<10) {
            cs = '0' + cs;
        }

        document.getElementById('hr').innerHTML = hs;
        document.getElementById('min').innerHTML = ms;
        document.getElementById('sec').innerHTML = ss;
        document.getElementById('cnt').innerHTML = cs;
        setTimeout('stpwatch()', 10);
    }
}