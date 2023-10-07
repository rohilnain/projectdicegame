document.addEventListener("DOMContentLoaded", function () {
    var diceButton=document.querySelector(".btn--roll");
    var holdButton=document.querySelector(".btn--hold");
    var newButton=document.querySelector(".btn--new");
    var player0=document.querySelector(".player--0");
    var player1=document.querySelector(".player--1");
    var dice=document.querySelector(".dice");
    var currentScore0=document.getElementById("current--0");
    var currentScore1=document.getElementById("current--1");
    var globalScore0=document.getElementById("score--0");
    var globalScore1=document.getElementById("score--1");
    var flag=0;
    var currentScorePlayer0=0;
    var currentScorePlayer1=0;
    var globalScorePlayer0=0;
    var globalScorePlayer1=0;
    currentScore1.textContent=0;
    globalScore1.textContent=0;
    currentScore0.textContent=0;
    globalScore0.textContent=0;
    function showImage(diceNumber){
        if(diceNumber==1) dice.src="./dice-1.png";
        if(diceNumber==2) dice.src="./dice-2.png";
        if(diceNumber==3) dice.src="./dice-3.png";
        if(diceNumber==4) dice.src="./dice-4.png";
        if(diceNumber==5) dice.src="./dice-5.png";
        if(diceNumber==6) dice.src="./dice-6.png";
    }
    function diceButtonClicked()
    {
        var diceNumber=Math.trunc(Math.random()*6)+1;
        console.log("dicenumber",diceNumber);
        showImage(diceNumber);
        if(flag==0)
        {
            if(diceNumber!=1)
            {
                currentScorePlayer0+=diceNumber;
                currentScore0.textContent=currentScorePlayer0;
                if(currentScorePlayer0>20|| currentScorePlayer0+globalScorePlayer0>20){
                   globalScore0.textContent=currentScorePlayer0+globalScorePlayer0;
                   currentScore0.textContent=0;
                   player0.style.backgroundColor="#2f2f2f";
                   diceButton.disabled = true;
                   holdButton.disabled = true;
                }
            }
            else{
                currentScore0.textContent=0;
                globalScore0.textContent=0;
                globalScorePlayer0=0;
                currentScorePlayer0=0;
            }
        }
        else
        {
            if(diceNumber!=1)
            {
                currentScorePlayer1+=diceNumber;
                currentScore1.textContent=currentScorePlayer1;
                if(currentScorePlayer1>20|| currentScorePlayer1+globalScorePlayer1>20){
                   globalScore1.textContent=currentScorePlayer1+globalScorePlayer1;
                   currentScore1.textContent=0;
                   player1.style.backgroundColor="#2f2f2f";
                   diceButton.disabled = true;
                   holdButton.disabled = true;
                }
            }
            else{
                currentScore1.textContent=0;
                globalScore1.textContent=0;
                globalScorePlayer1=0;
                currentScorePlayer1=0;
            }
        }
}
    function changeFlag(){
        if(flag==0) 
        {
            flag=1;
            globalScorePlayer0+=currentScorePlayer0;
            globalScore0.textContent=globalScorePlayer0;
            currentScore0.textContent=0;
            currentScorePlayer0=0;
            //player0.style.backgroundColor="linear-gradient(to top left, #753682 0%, #bf2e34 100%)";
            //player1.style.backgroundColor="rgba(255, 255, 255, 0.4)";
        }
        else 
        {
            flag=0;
            globalScorePlayer1+=currentScorePlayer1;
            globalScore1.textContent=globalScorePlayer1;
            currentScore1.textContent=0;
            currentScorePlayer1=0;
            //player1.style.backgroundColor="linear-gradient(to top left, #753682 0%, #bf2e34 100%)";
            //player0.style.backgroundColor="rgba(255, 255, 255, 0.4)";
        }
    }
    function resetAll()
    {       
            currentScorePlayer0=0;
            currentScorePlayer1=0;
            globalScorePlayer0=0;
            globalScorePlayer1=0;
            globalScore1.textContent=0;
            currentScore1.textContent=0;
            globalScore0.textContent=0;
            currentScore0.textContent=0;
            diceButton.disabled = false;
            holdButton.disabled = false;
            player0.style.backgroundColor="rgba(255, 255, 255, 0.4)";
            player1.style.backgroundColor="";
            flag=0;

    }
    newButton.addEventListener("click",resetAll);
    holdButton.addEventListener("click",changeFlag);
    diceButton.addEventListener("click",diceButtonClicked)
});