//header 

let topH = document.querySelector('header');

function sticky() {
    if(window.scrollY > 0) {
        topH.classList.add('actives');
    } else {
        topH.classList.remove('actives');
    }
}

window.addEventListener('scroll', sticky);


// nav bar in header
let navBar = document.querySelectorAll(".link");

navBar.forEach(e => {
    e.addEventListener('click', function(){
        if(document.querySelector('.active')) {
            document.querySelector('.active').classList.remove('active');
        }
        e.classList.add('active');
    })
});

//list one
let listIcon = document.querySelector('.listIcon');
let navs = document.querySelector('.ulNavBar');
let iconOne = document.querySelector('.listIcon i')

listIcon.addEventListener('click', function() {
    iconOne.classList.toggle("ri-list-check");
    iconOne.classList.toggle("ri-close-fill");
    navs.classList.toggle('left');

})

//list two
let toRight = document.getElementById('scrollLeft');
let navsTwo = document.querySelector('.topHead ul');
let iconTwo = document.querySelector('#scrollLeft i');

toRight.onclick= function() {
    iconTwo.classList.toggle("ri-skip-left-fill");
    iconTwo.classList.toggle("ri-skip-right-fill");
    navsTwo.classList.toggle('right');
}


//img slider

let arrayImg = Array.from(document.querySelectorAll('.imgs .containeImg'));
let arrayLength = arrayImg.length;
let currentIndex = 0;

//create indicators element

let div = document.createElement('div');
div.classList= 'indicators';
// create spans inside div
for(let i = 0; i < arrayLength; i++) {
    let span = document.createElement('span');
    span.setAttribute('id', i);
    div.appendChild(span);
}
let indicatorContainer = document.querySelector('.imgs');
indicatorContainer.appendChild(div);

let arrayIndicators = Array.from(document.querySelectorAll('.imgs .indicators span'));
arrayIndicators[currentIndex].classList= 'activeS';

function check() {
    if(currentIndex > arrayLength-1) {
        currentIndex = 0;
    } else if(currentIndex < 0) {
        currentIndex = arrayLength-1;
    }
}

function nextBtn() {
    removeClass();
    currentIndex++;
    check();
    arrayImg[currentIndex].classList.add('activeImg');
    arrayIndicators[currentIndex].classList= 'activeS';
}

function prevBtn() {
    removeClass();
    currentIndex--;
    check();
    arrayImg[currentIndex].classList.add('activeImg');
    arrayIndicators[currentIndex].classList= 'activeS';
}

function removeClass() {
    let getClass = arrayImg.findIndex((e)=> e.classList.contains('activeImg'));
    arrayImg[getClass].classList.remove('activeImg');
    arrayIndicators[getClass].classList.remove('activeS');
}

// scrollReveal

const sr = ScrollReveal({
    delay: 200, 
    distance: '60px', 
    origin: 'top', 
    duration: 2500, 
    reset: true 
})
sr.reveal('.text', {delay: 600, origin: 'left', duration: 2500, distance: '100px'});
sr.reveal('.imgs');
sr.reveal('.collec', {origin: 'bottom'});
sr.reveal('.blog', {origin: 'bottom', distance: '100px'});
sr.reveal('.offer', {origin: 'bottom', distance: '100px'});
sr.reveal('.lowerCards', {origin: 'bottom', distance: '100px'});
sr.reveal('.card-container', {origin: 'bottom', duration: 2000, distance: '60px', delay: 100,  reset: true});
sr.reveal('.boxProducts', {origin: 'left', duration: 2000, distance: '60px', delay: 100,  reset: true});

//scroll with mouse

let cursor = document.querySelector('.boxContainer');

cursor.addEventListener('wheel', (eve)=> {
    eve.preventDefault();
    cursor.scrollLeft += eve.deltaY;
    cursor.style.scrollBehavior = "auto";
})

let scrollTwo = document.querySelector('.Two');
scrollTwo.addEventListener('wheel', function(e) {
    e.preventDefault();
    scrollTwo.scrollLeft += e.deltaY;
})

// make countDown

let hours = document.querySelector('#hours');
let days = document.querySelector('#days');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

let goalDate = new Date("30 august 2024").getTime();

setInterval(()=> {
    let currentDate = new Date().getTime();
    dateDiffernce = goalDate - currentDate;
    let day = Math.floor(dateDiffernce / (1000*60*60*24)); 
    days.innerHTML = day < 10 ? `0 ${days} : ` : day + " : ";
    let hour = Math.floor(dateDiffernce % (1000*60*60*24) / (1000*60*60));
    hours.innerHTML = hour < 10 ? `0${hour} : ` : hour + " : ";
    let minute = Math.floor(dateDiffernce % (1000*60*60) / (1000*60));
    minutes.innerHTML = minute < 10 ? `0${minute} : ` : minute + " : ";
    let second = Math.floor(dateDiffernce % (1000*60) / 1000);
    seconds.innerHTML = second < 10 ? `0${second}` : second;
}, 1000)