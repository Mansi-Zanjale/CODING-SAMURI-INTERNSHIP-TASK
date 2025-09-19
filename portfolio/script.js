const nav = document.querySelector(".menu");

function toggleMenu(){
    nav.classList.toggle("show");
}



const roles=["Web Developer","Frontend Developer","FullStack Developer"];
const text=document.getElementById("text");
let index=0;

function changeText(){
    text.textContent = roles[index];
    index++;
    if(index === roles.length){
        index=0;
    }
    text.style.animation="none";
    void text.offsetWidth;
    text.style.animation ="slidUp 0.5s ease";
}
changeText();
setInterval(changeText,2500);


// for sliding animation

const boxes = document.querySelectorAll('.ani');

function showBoxes(){
    for(let i=0; i<boxes.length;i++){
        let box = boxes[i];
        let boxTop = box.getBoundingClientRect().top;

        let screenHeight = window.innerHeight;

        if(boxTop < screenHeight - 100){
            box.classList.add('show');
        }
    }
}

window.addEventListener('scroll',showBoxes);
window.addEventListener('load',showBoxes);