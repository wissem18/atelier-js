let nbr_tentatives;
z=prompt("donner le niveau de difficulté 1:facile 2:moyen 3:difficile");
if(z=="1"){
    nbr_tentatives=5;
}
if(z=="2"){
    nbr_tentatives=3;
}
if(z=="3"){
    nbr_tentatives=1;
}
x=Math.random()*10;
x=Math.floor(x);
while(nbr_tentatives>0){
y=prompt("donner le numéro");
if(x==y){
    alert("Bravo");
    break;
}
else{
    nbr_tentatives-=1;
    if(nbr_tentatives==0){
        alert("Perdu");
    }
    else{
    alert("faux réessayer il vous reste"+nbr_tentatives+"tentatives");
    }
}
}

