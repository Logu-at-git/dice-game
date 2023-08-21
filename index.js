alert("Click/Press any to Start!");
document.addEventListener("keydown",()=>{
    
       playgame();
})

document.addEventListener("click",()=>{
    playgame();
})
function playgame(){
    var p1=Math.ceil(Math.random()*6);
    var dice1="images/dice"+p1+".png";
    var p2=Math.ceil(Math.random()*6);
    var dice2="images/dice"+p2+".png";
    document.querySelectorAll("img")[0].setAttribute("src",dice1);
    document.querySelectorAll("img")[1].setAttribute("src",dice2);
    if(p1>p2)
    {
    document.querySelector("h1").innerHTML="Player 1 wins";
    }
    else if(p1<p2)
    {
        document.querySelector("h1").innerHTML="Player 2 wins";
    }
    else{
        document.querySelector("h1").innerHTML="Tie";
    }
}