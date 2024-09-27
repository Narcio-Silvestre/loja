'use strict';

const navservices = document.querySelector('.nav_service');
const serv_items = document.querySelector('.nav_services');
const sidebar = document.querySelector('.sidebar');
const categories = document.querySelector('.categories');
const show = document.querySelector('.show');

navservices.addEventListener('mouseover', () => {
    serv_items.classList.add('nav_servicesItem');
    serv_items.classList.remove('nav_services');
})

navservices.addEventListener('mouseleave', () => {
    serv_items.classList.add('nav_services');
    serv_items.classList.remove('nav_servicesItem');
})

const arr = ['click', 'mouseenter',];
arr.forEach((el) => {
    console.log(el)
    sidebar.addEventListener(el, (e) => {
        if(e.target.classList.contains('fa-less-than')){
            sidebar.classList.remove('sidebarMovein')
        }
        else{
            sidebar.classList.add('sidebarMovein');
        }
    })
});

sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('sidebarMovein');
})

show.addEventListener('mouseover', (e) => {
    if(e.target.tagName === 'IMG')
        e.target.classList.add('imgZoom');
})






