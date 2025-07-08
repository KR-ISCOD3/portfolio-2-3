const button = document.getElementById('togglemenu')
const menu = document.getElementById('menu');

const closebtn = document.getElementById('closebtn')
const menubtn = document.getElementById('menubtn')

const header = document.getElementById('header');

button.onclick = () =>{
    menu.classList.toggle('active');

    // update 19-jun-25
    menubtn.classList.toggle('unactive');
    closebtn.classList.toggle('unactive');
}

// scroll and see background
window.onscroll = () =>{

    if(window.scrollY > 2){
        header.style.backgroundColor = "white";
        header.style.boxShadow = "0 10px 10px rgba(213, 211, 211, 0.393)";
    }else{
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
}

const counters = document.querySelectorAll(".projectcount h1");
counters.forEach(counter => {
    const target = +counter.textContent;
    let count = 0;

    const steps = 200;
    const increment = target / steps;

    counter.textContent = "0";

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.textContent = target;
        clearInterval(interval);
      } else {
        counter.textContent = Math.floor(count);
      }
    }, 10);
});

AOS.init();