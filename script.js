'use strict';

const navservices = document.querySelector('.nav_service');
const serv_items = document.querySelector('.nav_services');
const sidebar = document.querySelector('.sidebar');
const categories = document.querySelector('.categories');
const show = document.querySelector('.show');
const showImgs = show.querySelectorAll('img');
const showFirImg = show.querySelector('img');
const iconR = show.querySelector('.fa-angle-right');
const iconL = show.querySelector('.fa-angle-left');
const TRANSLATEX = 110;




navservices.addEventListener('mouseover', () => {
    serv_items.classList.add('nav_servicesItem');
    serv_items.classList.remove('nav_services');
})

navservices.addEventListener('mouseleave', () => {
    serv_items.classList.add('nav_services');
    serv_items.classList.remove('nav_servicesItem');
})

const arr = ['mouseleave', 'mouseenter',];
arr.forEach((el) => {
    sidebar.addEventListener(el, (e) => {
        if(sidebar.classList.contains('sidebarMovein'))
            sidebar.classList.remove('sidebarMovein')
        else
            sidebar.classList.add('sidebarMovein');
    })
});

function setIconDisplay(side,state){
    side === 'L' ? iconL.style.display = state : iconR.style.display = state 
}

function transformIMG(){
    let counter = 0;
    let trans = 0;
    showImgs.forEach((img) => {
        img.style.transform = `translatex(${trans}%)`
        img.setAttribute('load','lazy')
        img.setAttribute('data-show',counter === 0 ? 0 : trans)
        img.setAttribute('data-number',counter)
        img.style.opacity = `1`
        trans += TRANSLATEX;
        counter++;
    })
}

function transformShow(side){
    showImgs.forEach((img) => {
        let curShow = parseInt(img.getAttribute('data-show'))
        let nextShow = side === 'showL'? curShow - 110 : curShow + 110 
        img.style.transform = `translatex(${nextShow}%)`
        img.setAttribute('data-show',nextShow)
    })
}

const arrIcons= [iconL,iconR]
arrIcons.forEach((i)=>{
    i.addEventListener('click', (e) => {
        e.preventDefault()
        transformShow(e.target.getAttribute('id')) 
    })
})


function observerLast(entries,observer){
    let inter = false
    entries.forEach((entry)=>{
        let place = entry.target.dataset.show
        let numImg = entry.target.dataset.number
        let length = showImgs.length-1
        if(entry.isIntersecting && (+place !== (length*TRANSLATEX) && (+place !== 0))){
            setIconDisplay('L','none')
            setIconDisplay('R','block')
            inter = true
        } 
        if(entry.isIntersecting && +place === 0 ){
            setIconDisplay('R','none')
            setIconDisplay('L','block')
            inter = true
        } 
    })
    if (inter === false) {
        setIconDisplay('R','block')
        setIconDisplay('L','block')
    }
}

const imgObserver = new IntersectionObserver(observerLast,{
    root:null,
    threshold:0.1
})

window.addEventListener("load",()=>{
    const arrImg= [showFirImg,showImgs[showImgs.length-1]]
    arrImg.forEach((i)=>{
        imgObserver.observe(i)
    })
})






transformIMG()















