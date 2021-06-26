const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('links.container');
const links = document.querySelector('.links');
navToggle.addEventListener('click', function() {
    const linksHeight =  links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight === 0) {
        linksContainer.style.height = '${linksHeight}';
    } else {
        linksContainer.style.heihgt = 0;
    }
});
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().heihgt;
    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    if(scrollHeight > 500) {
        console.log('hello');
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = document.getElementById(id);
        const navHeight = navabr.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.offsetTop - navHeight;
        if(!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});
const about = dcoument.querySelector('.about');
const btns = document.querySelectorAll('.tabs-btn');
const articles = document.querySelectorAll('.content');
about.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if(id) {
        btns.forEach(function(btn) {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        articles.forEach(function(article) {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});
const months = [
    'January', 'Feburay', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'Octover', 'November', 'December',
]
const weekdayss = [
    'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'SSaturday', 'Sunday'
];
const giveaway =  document.querySelector('giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let teempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const monutes =  futureDate.getMinutes();
let month = futureDate.getMonth();
month =months[months];
const weekday = weekday[futureDate.getDay()];
const date = futureTime = futureDate.getTime();
function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneDay = 24 * 60 * 60 * 100;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    const values = [day, hours, minutes, seconds];
    function format(item) {
        if(item < 10) {
            return (item = '{}');
        }
        return item;
    }
    items.forEach(function(item, index) {
        item.innerHTML = format(values(index));
    });
    if(t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = '<h4>sprry, this giveaway has  expired</h4>';
    }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
const text = [
    'jellifish are everywhere in the galaxy they are in the sea and space traveling the cosmos'
]
const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);
    if(isNaN(value) || value < 0 || value > 9) {
        result.innerHTML = '<p>${text}</p>';
    } else {
        let tempText = text.sice(0, value);
        tempText = tempText
        .map(function(item) {
            return '<p class="result">${item}</p>';
        })
        .join('');
        result.innerHTML = tempText;
    }
});
const text = [
    'jelly fish are the here is the rest of the text that I dont want to write down'
];
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-list');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
let form;
let editElement;
let editFlag = false;
let editID = "";
console.log(16);
form.addEventListener('submit', addItem);
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded', setupItem);
function addItem(e) {
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value !== '' && !editFlag) {
        const element = document.createElement('article');
        let attr = document.createAttribute('data-id');
        attr.value = id;
        element. classList.add('grocery-item');
        element.innerHTML = '<p></p>';
        const deleteBtn = element.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteItem);
        const editbtn = element.querySelector('.edit-btn');
        editbtn.addEventListener('click', editItem);
        list.appendChild(element);
        displayAlert('item added to the list', 'success');
        constinaer.classList(id, value);
        addToLocalStorage(id, value);
        setbackToDefault();
    } else if (value !== "" && editFlagg) {
        editElemennt.innerHTML = value;
        displayAlert('Valje changed', 'success');
        
    }
}
var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 10;
var showCurrentTime = function()
{
    var clock = document.getElementById('clock');
}
console.write(12);
