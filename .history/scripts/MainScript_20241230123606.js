const topnavbar = document.querySelector(".topnavbar");
// function createLinks() {
//   // Create an array of objects with URL and link text
//   const links = [
    
//     { url: 'YogSutrani.php', text: 'योगसूत्राणि' },
//     { url: 'VisnuSahastranam.php', text: 'विष्णुसहस्रम्' },
//     { url: 'SankhyaKarika.php', text: 'साङ्ख्यकारिका' },
//     { url: 'Ast_1_1.php', text: 'अष्टाध्यायी(१.१)' }
//   ];
//   // Loop through the array and create links
//   for (let i = 0; i < links.length; i++) {
//     const link = document.createElement('a');
//     link.setAttribute('target', '_blank');
//     link.setAttribute('class', 'disabled-link');
//     link.href = links[i].url;
//     link.textContent = links[i].text;
//     topnavbar.appendChild(link); // Append link to the topnavbar
//   }
// }
// // Call the function to create links
// createLinks();

// //current page link disaable function
// const currentUrl = window.location.href;
// const disabledLinks = document.querySelectorAll(".disabled-link");

// // var links =[];
// //   var currWin = window;
// //   for(var i =0; i<currWin.document.links.length; i++){
// //     links.push(currWin.document.links[i].href);
// //   }

// disabledLinks.forEach(link => {
// if(link.href === currentUrl){
//   link.addEventListener("click", e => {
//     e.preventDefault();
//   });
//   link.classList.add("disabled");
//  }
// });


// function for repeating selection
var repeats = "";
var inp = document.getElementById("repeat");
inp.addEventListener("input", ()=>{
  repeats=inp.value;
});




// const Allrepeatbtns = document.querySelectorAll(".rbtn");
// let activeBtn = null;
// Allrepeatbtns.forEach((ript)=> {
//   ript.addEventListener("click", () => {
//     if (activeBtn && activeBtn !== ript) {
//       activeBtn.classList.remove("for-repeat");
//     }
//     else if (activeBtn === ript) {
//       ript.classList.remove("for-repeat");
//       activeBtn = null;
//       repeats = 0;
//       return;
//     }
//     // repeats = ript.value.charAt(0);
//     repeats = document.getElementById("repeat").value;
//     ript.classList.add("for-repeat");
//     activeBtn = ript;
//   })
// });
// Add click event listeners to the play and stop buttons
const stopButton = document.querySelector('[name="stop_button"]');
const playButton = document.querySelector('[name="play_button"]');
const checkBox = document.querySelector('#check');
const timeOutSecind = document.querySelector(".timeOut");
var speed = document.querySelector("#speed");
let audio;
let audioDuration;
//  let num = 0;
playButton.addEventListener('click', () => {
  //  if(num===0){
  //    num = 1;
  //   playButton.value = "pause";
  let startIndex = selector1.value - 1;
  let lastIndex = selector2.value;
   const playNextKey = () => {
    if(audio){
      audio.pause();
      audio.currentTime = 0;
       keys.forEach(key => {
      key.classList.remove('active');
      });
    } 
    if (startIndex < lastIndex) {
      const key = keys[startIndex];
      audio = key.querySelector('audio');
      let playCount = 0;
      const playOnce = () => {
        if (playCount < (Number(repeats))-1) {
        //    if(playCount!==1) {
        //      audio.volume = .1;
        //      audio.playbackRate = 1.5;
        //  }
          setTimeout(() => {
          audioDuration = audio.duration;
          audio.playbackRate = speed.value;
          audio.play();
          playCount++;
          }, timeOutSecind.value*1000);
        } else {
          audio.removeEventListener('ended', playOnce);
          setTimeout(() => {
            key.classList.remove('active');
            playNextKey();
          }, timeOutSecind.value*1000);
        }
      };
      audioDuration = audio.duration;
      audio.currentTime = 0;
      audio.playbackRate = speed.value;
      audio.play();
      audio.addEventListener('ended', playOnce );
      audio.addEventListener('play', scrollActiveDiv );
      audio.addEventListener("play", playButtonStyleAdd);
      audio.addEventListener('ended', playButtonStyleRemove);
      audio.addEventListener("play", indexUpdate);
      audio.addEventListener("ended", timerOutput) 
      key.classList.add('active');
      startIndex++;
      // audio.removeEventListener("ended", timerOutput); 

      // chacking the Loopbutton is chacked or not checked 
        if(checkBox.checked && startIndex == lastIndex){
          // alert("Please");
          startIndex = selector1.value - 1;
      }
    }
  };
  
  playNextKey();
// }else{
//   playButton.value = "play";
//   audio.pause();
//   num = 0;
// }
});


// Add click event listeners to the stop button
stopButton.addEventListener('click', () => {
  // playButton.value = "play";
   window.scrollTo(0, 0);
  // hideSpeackerSymbol();
  playButton.style.backgroundColor = "";
  playButton.style.color = "";
  keys.forEach(key => {
    const audio = key.querySelector('audio');
    audio.pause();
    audio.currentTime = 0;
    key.classList.remove('active');
  });
  bgsound.pause();
});

// Reset the current audio element
window.scrollTo({top:0, behavior: 'smooth'});
const reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
// window.scrollTo({top:0, behavior: 'smooth'});
// setTimeout(() => {
location.reload();
// },1000);
});


  //buttons for loop 
  const loopbtn = document.querySelector(".loop");
  const checkbox = document.querySelector("#check");
  loopbtn.addEventListener("click",  ()=> {
  checkbox.checked = !checkBox.checked;
  if(checkBox.checked){
    loopbtn.style.backgroundColor = "rgb(40, 252, 29)";
    loopbtn.style.color = "#000";
    // document.querySelector(".From").disabled = false;
    // document.querySelector(".To").disabled = false;
    
  }else{
    loopbtn.style.backgroundColor = "";
    loopbtn.style.color = "";
    // document.querySelector(".From").disabled = true;
    // document.querySelector(".To").disabled = true;
    
  }
  });

//background sounds 1111111111111111111
  const selector = document.querySelector('#number');
  for(var i=0; i<50; i++) {
    var option = document.createElement('option');
    option.text = "ध्वनिः "+ (i);
    option.value = i;
    selector.appendChild(option); 
  }

  const firstOption = selector.querySelector("option:first-child");
  firstOption.textContent = "पार्श्वरव:"
  
  //background sounds 222222222222222222
let soundNumber = document.querySelector("#number");
soundNumber.style.outline = "none";
let bgsound;
selector.addEventListener("change", function backgroundMusic(){
  if (bgsound) {bgsound.pause();}
  bgsound = new Audio(`prishthbhumi-dhvani/dhvani (${soundNumber.value}).mp3`);
  bgsound.loop = true;
  bgsound.volume = 0.5;
  bgsound.play();
});

//scrolling to top of screen
function scrollActiveDiv() {
  const activeDiv = document.querySelector('.active');
  if (activeDiv) {
    const activeDivPosition = activeDiv.offsetTop;
    window.scrollTo({
      top: activeDivPosition - 150,
      behavior: 'smooth'
    });
  }
}


// function for indexUpdate 
const indexUpdating = document.querySelector("#suchna");
indexUpdating.value = "0" + "/" + divLen;
function indexUpdate(){
const suchna = document.querySelector("#suchna");
let activeIndex = 1;
for (let i = 1; i < divLen; i++){
  if(keys[i].classList.contains("active")){
    activeIndex = i+1;
    break;
  }
}
suchna.value = activeIndex +"/"+ divLen;
}



//function for Timer
const timeStamp = document.querySelector(".timeStamp");
function timerOutput(){
  let count = timeOutSecind.value;
  let timer = setInterval(function(){
    timeStamp.style.display = "block";
    
    count--;
    if(count < 10){
      timeStamp.innerHTML = "प्रतीक्षस्व"+ " " + "00" + ":0" + count;
    }else{
      timeStamp.innerHTML = "प्रतीक्षस्व"+ " " + "00" + ":" + count;
    }
     if(count<=0){
      clearInterval(timer);
      timeStamp.style.display = "none";
      
    }
  },1000);
  document.body.appendChild(timeStamp);  
}


// play Button Style 
function playButtonStyleAdd(){
  playButton.style.backgroundColor = "rgb(40, 252, 29)";
  playButton.style.color = "#000";
  }
  function playButtonStyleRemove(){
   playButton.style.backgroundColor = "";
   playButton.style.color = "";
   }
 

//function for index blinking
let n = 0;
function blinking() {
// const play_button = document.querySelector('[name="play_button]')
if(n==0 && playButton.style.backgroundColor === "rgb(40, 252, 29)"){
indexUpdating.style.animation = "indexblink 1s infinite";
n = 1;
}else{
  indexUpdating.style.animation = "";
n = 0;
}
}
setInterval(blinking,2000);

// setTimeout(windowUpdate,2000);
// window risize for time div
const clock = document.querySelector(".clock");
window.addEventListener("resize",windowUpdate);
window.addEventListener("load",windowUpdate);
function windowUpdate(){
const player = document.querySelector(".player");
const playerHeight = player.offsetHeight;
 timeStamp.style.top = playerHeight + "px";
 container.style.top =   playerHeight + "px";
 clock.style.top =   playerHeight + "px";
}


  
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



// const digitsMap = {
//   // देवनागरी लिपि के वर्णक्रम को बांग्ला लिपि के वर्णक्रम में बदलें।
//     'अ': 'অ',
//     'आ': 'আ',
//     'इ': 'ই',
//     'ई': 'ঈ',
//     'उ': 'উ',
//     'ऊ': 'ঊ',
//     'ए': 'এ',
//     'ऐ': 'ঐ',
//     'ओ': 'ও',
//     'औ': 'ঔ',
//     'क': 'ক',
//     'ख': 'খ',
//     'ग': 'গ',
//     'घ': 'ঘ',
//     'ङ': 'ঙ',
//     'च': 'চ',
//     'छ': 'ছ',
//     'ज': 'জ',
//     'झ': 'ঝ',
//     'ञ': 'ঞ',
//     'ट': 'ট',
//     'ठ': 'ঠ',
//     'ड': 'ড',
//     'ढ': 'ঢ',
//     'ण': 'ণ',
//     'त': 'ত',
//     'थ': 'থ',
//     'द': 'দ',
//     'ध': 'ধ',
//     'न': 'ন',
//     'प': 'প',
//     'फ': 'ফ',
//     'ब': 'ব',
//     'भ': 'ভ',
//     'म': 'ম',
//     'य': 'য',
//     'र': 'র',
//     'ल': 'ল',
//     'व': 'ব',
//     'श': 'শ',
//     'ष': 'ষ',
//     'स': 'স',
//     'ह': 'হ',
//     'ा': 'া',
//     'ि': 'ি',
//     'ी': 'ী',
//     'ु': 'ু',
//     'ू': 'ূ',
//     'ृ': 'ৃ',
//     'े': 'ে',
//     'ै': 'ৈ',
//     'ो': 'ো',
//     'ौ': 'ৌ',
//     'ं': 'ং',
//     'ः': 'ঃ',
//     '।': '।',
//     '॥': '॥',

// };

// const elements = document.getElementsByTagName('*');

// for (let i = 0; i < elements.length; i++) {
//   const element = elements[i];

//   for (let j = 0; j < element.childNodes.length; j++) {
//     const node = element.childNodes[j];

//     if (node.nodeType === 3) {
//       const text = node.nodeValue;
//       const replacedText = text.replace(/[अआइईउऊऋएऐओऔकखगघङचछजझञ]/g, function(match) {
//         return digitsMap[match];
//       });

//       if (replacedText !== text) {
//         element.replaceChild(document.createTextNode(replacedText), node);
//       }
//     }
//   }
// }
  



// // सभी audio टैगों को प्राप्त करें
// const audios = document.querySelectorAll('audio');
// // सभी span टैगों को प्राप्त करें
// const spans = document.querySelectorAll('span.indeX');
// // सभी span टैग पर क्लिक करने के लिए एक लूप चलाएं
// spans.forEach((span) => {
//   // क्लिक करने पर संगीत बंद करें और अगला संगीत चलाएं
//   span.addEventListener('click', () => {
//     // सभी ऑडियो टैगों को बंद करें
//     audios.forEach((audio) => {
//       audio.pause();
//       audio.currentTime = 0;
//     });
//     // वर्तमान ऑडियो टैग को चलाएं
//     const audio = span.parentElement.querySelector('audio');
//     audio.play();
    
//     // सभी divs से active क्लास हटाएं
//     const divs = document.querySelectorAll('.key');
//     divs.forEach((div) => {
//       div.classList.remove('active');
//       audio.addEventListener("ended",  () => {
//         div.classList.remove('active');
//       });
//     });
//     // वर्तमान div को active क्लास दें
//     const currentDiv = audio.parentElement;
//     currentDiv.classList.add('active');
//   });
// });
//  setTimeout(()=>{

//   var text = document.body.innerHTML;
//   var regex1 = /॥(.*?)॥/g;
//   var result1 = text.replace(regex1,'॥<span class="cot">$1</span>');
//  document.body.innerHTML = result1;
//  },2000)
       