function showIt(){
    document.getElementById('hideIt').style.display = 'inline-block';
    document.getElementById('btnShow').style.display = 'none';
    document.getElementById('btnShow1').style.display = 'inline-block';
}

function hideIt1(){
    document.getElementById('hideIt').style.display = 'none';
    document.getElementById('btnShow').style.display = 'inline-block';
    document.getElementById('btnShow1').style.display = 'none';
}

function readmore(n){
    document.getElementById('read'+n).style. display = 'inline-block';
    document.getElementById('rode'+n).style.display = 'none';
}