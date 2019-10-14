import React from "react"
import "./navbar.css"

var menuSelected = false;

function navBarClick() {
    let title = document.getElementById("name-title"),
    container = document.getElementById("navbar-container");

    title.classList.add("animate-title-click");
    container.classList.add("light-navbar");

    window.scrollTo(0, 0);

    title.addEventListener('animationend', () => {
        title.classList.remove("animate-title-click");
        container.classList.remove("light-navbar");
    });

    if (menuSelected) {
        menuSelect();
    }
}

function menuSelect() {
    let menusymbol = document.getElementById("menu-symbol"),
    menulist = document.getElementById("menu-container"),

    aboutlink = document.getElementById("about-link"),
    resumelink = document.getElementById("resume-link"),
    experiencelink = document.getElementById("experience-link");

    menusymbol.classList.add("animate-title-click");
    menusymbol.addEventListener('animationend', () => {
        menusymbol.classList.remove("animate-title-click");
    });

    let menulengthtarget = menuSelected ? 0 : 8,
    aboutpostarget = menuSelected ? 0 : 5,
    experiencepostarget = menuSelected ? 0 : 9,
    resumepostarget = menuSelected ? 0 : 13,
    symbolangletarget = menuSelected ? 0 : 180;

    menusymbol.style.webkitTransform = "rotate("+symbolangletarget+"deg)";
    menusymbol.style.mozTransform = "rotate("+symbolangletarget+"deg)";
    menusymbol.style.oTransform = "rotate("+symbolangletarget+"deg)";
    menusymbol.style.msTransform = "rotate("+symbolangletarget+"deg)";
    menusymbol.style.transform = "rotate("+symbolangletarget+"deg)";

    menulist.style.mozTransform = "scale(1, "+menulengthtarget+")";
    menulist.style.oTransform = "scale(1, "+menulengthtarget+")";
    menulist.style.msTransform = "scale(1, "+menulengthtarget+")";
    menulist.style.transform = "scale(1, "+menulengthtarget+")";

    aboutlink.style.webkitTransform = "translate(0px, "+aboutpostarget+"rem)";
    aboutlink.style.mozTransform = "translate(0px, "+aboutpostarget+"rem)";
    aboutlink.style.oTransform = "translate(0px, "+aboutpostarget+"rem)";
    aboutlink.style.msTransform = "translate(0px, "+aboutpostarget+"rem)";
    aboutlink.style.transform = "translate(0px, "+aboutpostarget+"rem)";

    experiencelink.style.webkitTransform = "translate(0px, "+experiencepostarget+"rem)";
    experiencelink.style.mozTransform = "translate(0px, "+experiencepostarget+"rem)";
    experiencelink.style.oTransform = "translate(0px, "+experiencepostarget+"rem)";
    experiencelink.style.msTransform = "translate(0px, "+experiencepostarget+"rem)";
    experiencelink.style.transform = "translate(0px, "+experiencepostarget+"rem)";

    resumelink.style.webkitTransform = "translate(0px, "+resumepostarget+"rem)";
    resumelink.style.mozTransform = "translate(0px, "+resumepostarget+"rem)";
    resumelink.style.oTransform = "translate(0px, "+resumepostarget+"rem)";
    resumelink.style.msTransform = "translate(0px, "+resumepostarget+"rem)";
    resumelink.style.transform = "translate(0px, "+resumepostarget+"rem)";
    

    menuSelected = !menuSelected;
}

function selectAbout() {
    let aboutSection = document.getElementById("about"),
    aboutLink = document.getElementById("about-link"),
    aboutBreak = document.getElementById("about-section-break");


    aboutLink.classList.add("animate-menu-item-click");
    aboutLink.addEventListener('animationend', () => {
        aboutLink.classList.remove("animate-menu-item-click");
        aboutSection.scrollIntoView();
        aboutBreak.classList.add("expand-break");
        aboutBreak.addEventListener('animationend', () => {
            aboutBreak.classList.remove("expand-break");
        });
    });

    if (menuSelected) {
        menuSelect();
    }
}

function selectResume() {
    let resumeLink = document.getElementById("resume-link");

    resumeLink.classList.add("animate-menu-item-click");
    resumeLink.addEventListener('animationend', () => {
        resumeLink.classList.remove("animate-menu-item-click");
    });


    window.open("https://rupponi.github.io/res/resume.pdf");

    if (menuSelected) {
        menuSelect();
    }
}

function selectExperience() {
    let experienceSection = document.getElementById("experience"),
    experiencelink = document.getElementById("experience-link"),
    experienceBreak = document.getElementById("experience-section-break");

    experiencelink.classList.add("animate-menu-item-click");
    experiencelink.addEventListener('animationend', () => {
        experiencelink.classList.remove("animate-menu-item-click");
        experienceSection.scrollIntoView();
        experienceBreak.classList.add("expand-break");
        experienceBreak.addEventListener('animationend', () => {
            experienceBreak.classList.remove("expand-break");
        });
    });

    if (menuSelected) {
        menuSelect();
    }
}

const NavBar = () => {
    return (
        <div id = "navbar-component">
            <div id = "navbar-container">
                <div id = "title-panel" onClick = {navBarClick}>
                    <h1 id = "name-title" class = "unselectable">ROHAN UPPONI</h1>
                </div>
                <div id = "menu-panel" onClick = {menuSelect}>
                    <h1 id = "menu-symbol" class = "unselectable">{'\u2630'}</h1>
                </div>
            </div>
            <div id = "menu-container"></div>
            <ul id = "menu-list">
                <li id = "about-link" class = "list-link unselectable" onClick = {selectAbout}>ABOUT</li>
                <li id = "resume-link" class = "list-link unselectable" onClick = {selectResume}>RESUME</li>
                <li id = "experience-link" class = "list-link unselectable" onClick = {selectExperience}>EXPERIENCE</li>
            </ul>
        </div>
    );
}

export default NavBar