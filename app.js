let body=document.querySelector('body');
let h2=document.querySelector('h2');
let h3=document.querySelector('.h3');
let h4=document.querySelector('.h4');
let btns=document.querySelectorAll('.btn');
let color=['red','yellow','green','purple'];

let game=[];
let user=[];

let hScore=0;
let level=0;
let score=0;
start=false;

body.addEventListener('keypress',function(){
   if(!start){
    console.log("started");
    start=true;
    levelUp();}
})

function reset(){
  start=false;
  level=0;
  score=0;
  game=[];
  user=[];
}

function check(ind){
  if(game[ind]===user[ind])
   { score+=10;
     if(hScore<score){
      hScore=score;
      h4.innerText=`High Score:${score}`;
     }
    h3.innerText=`Score: ${score}`
     if(user.length==game.length)
     
     setTimeout(levelUp,1000);
   }
   else{
    body.classList.add('bgColor') 
    setTimeout(()=>{
      body.classList.remove('bgColor')
    },50)
    h2.innerText="Game over,Press any key to start";
    reset();
   }
}

function flash(btn){
  btn.classList.add('flashbtn');
   setTimeout(() => {
     btn.classList.remove('flashbtn')
   },500);
}
function usrflash(btn){
  btn.classList.add('userflash');
   setTimeout(() => {
     btn.classList.remove('userflash')
   },250);
}

function levelUp(){
  user=[];
    level++;
    h2.innerText=`Level ${level}`;
    h3.innerText=`Score: ${score}`
    let randomNum=Math.floor(Math.random()*4)
    let btn=color[randomNum];
    console.log(randomNum)
    let btns=document.querySelector(`.${btn}`);
    flash(btns);
    game.push(btn);
    console.log(game)
}
for(let btn of btns){
    btn.addEventListener('click',function(){
      usrflash(this);
      let id=this.getAttribute('id')
      user.push(id);
      console.log(user)
      let ind=user.length-1;
      check(ind)
    });

}