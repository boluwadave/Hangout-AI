const yes=document.getElementById("yes");
const no=document.getElementById("no");
const result=document.getElementById("result");

let attempts=0;

no.addEventListener("mouseover",moveButton);
no.addEventListener("touchstart",moveButton);

function moveButton(){

if(attempts>=6)return;

attempts++;

const x=Math.random()*(window.innerWidth-120);
const y=Math.random()*(window.innerHeight-80);

no.style.left=x+"px";
no.style.top=y+"px";

const messages=[
"Nice try.",
"The button is shy.",
"You almost got it.",
"It's doing cardio.",
"Again? 😂",
"Okay... your choice now."
];

result.innerHTML=messages[Math.min(attempts-1,messages.length-1)];

}

yes.onclick=function(){

document.querySelector(".buttons").style.display="none";

result.innerHTML=`

<h2>You just made my day.</h2>

<p>

I owe you:

<br><br>

• Past questions

<br>

• Great memories

<br>

• Terrible jokes

<br><br>

Looking forward to it.

</p>

`;

};
