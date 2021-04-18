const startingMin=10;
let time=startingMin*60;
const countdownEl=document.getElementById('countdown');
let mytime=setInterval(updatecount,1000);


function updatecount() {
    if(time<=0){
        setTimeout('document.quiz.submit()',1);
    }
    const minutes=Math.floor(time/60);
    let seconds=time%60;
    seconds=seconds<10 ? '0' +seconds : seconds;

    countdownEl.innerHTML=`${minutes}: ${seconds}`;
    time--;
  
}