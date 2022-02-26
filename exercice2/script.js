var x=document.getElementById("x1");
var y=document.getElementById("x2");
var z=document.getElementById("x3");
var s=["blue","red","yellow","black","grey","cyan","purple","pink"];
x.addEventListener("click",()=>{
    let i=Math.random()*7;
    i=Math.floor(i);
    x.style.color=s[i];
}
)
y.addEventListener("click",()=>{
    let i=Math.random()*7;
    i=Math.floor(i);
    y.style.color=s[i];
}
)
z.addEventListener("click",()=>{
    let i=Math.random()*7;
    i=Math.floor(i);
    z.style.color=s[i];
}
)