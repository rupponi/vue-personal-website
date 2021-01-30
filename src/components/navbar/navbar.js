import React from "react";
import { navigate } from "gatsby";
import "./navbar.css";

var menuSelected = false;

const MENU_LENGTH_MAX = 8;
const MENU_ITEM_ABOUT_POS_MAX = 5;
const MENU_ITEM_EXPERIENCE_POS_MAX = 9;
const MENU_ITEM_RESUME_POS_MAX = 13;
const MENU_SYMBOL_ROTATE_ANGLE_MAX = 180;

function menuSelect() {
    let menuSymbol = document.getElementById("menu-symbol"),
    menuList = document.getElementById("menu-container"),

    aboutLink = document.getElementById("about-link"),
    resumeLink = document.getElementById("resume-link"),
    experienceLink = document.getElementById("experience-link");

    menuSymbol.classList.add("animate-symbol-click");
    menuSymbol.addEventListener('animationend', () => {
        menuSymbol.classList.remove("animate-symbol-click");
    });

    let menuLengthTarget = menuSelected ? 0 : MENU_LENGTH_MAX,
    aboutPosTarget = menuSelected ? 0 : MENU_ITEM_ABOUT_POS_MAX,
    experiencePosTarget = menuSelected ? 0 : MENU_ITEM_EXPERIENCE_POS_MAX,
    resumePosTarget = menuSelected ? 0 : MENU_ITEM_RESUME_POS_MAX,
    symbolAngleTarget = menuSelected ? 0 : MENU_SYMBOL_ROTATE_ANGLE_MAX;

    menuSymbol.style.webkitTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.mozTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.oTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.msTransform = "rotate("+symbolAngleTarget+"deg)";
    menuSymbol.style.transform = "rotate("+symbolAngleTarget+"deg)";

    menuList.style.mozTransform = "scale(1, "+menuLengthTarget+")";
    menuList.style.oTransform = "scale(1, "+menuLengthTarget+")";
    menuList.style.msTransform = "scale(1, "+menuLengthTarget+")";
    menuList.style.transform = "scale(1, "+menuLengthTarget+")";

    aboutLink.style.webkitTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.mozTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.oTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.msTransform = "translate(0px, "+aboutPosTarget+"rem)";
    aboutLink.style.transform = "translate(0px, "+aboutPosTarget+"rem)";

    experienceLink.style.webkitTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.mozTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.oTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.msTransform = "translate(0px, "+experiencePosTarget+"rem)";
    experienceLink.style.transform = "translate(0px, "+experiencePosTarget+"rem)";

    resumeLink.style.webkitTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.mozTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.oTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.msTransform = "translate(0px, "+resumePosTarget+"rem)";
    resumeLink.style.transform = "translate(0px, "+resumePosTarget+"rem)";

    menuSelected = !menuSelected;
}

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.navBarClick = this.navBarClick.bind(this);
        this.selectAbout = this.selectAbout.bind(this);
        this.selectExperience = this.selectExperience.bind(this);
        this.selectResume = this.selectResume.bind(this);
    }

    navBarClick() {
        let title = document.getElementById("name-title"),
        container = document.getElementById("navbar-container");
    
        title.classList.add("animate-title-click");
        container.classList.add("light-navbar");
    
        title.addEventListener('animationend', () => {
            title.classList.remove("animate-title-click");
            container.classList.remove("light-navbar");
        });
    
        if (menuSelected) {
            menuSelect();
        }
        setTimeout(() => { navigate('/'); }, 250);
    }

    selectAbout() {
        let aboutLink = document.getElementById("about-link");
    
        aboutLink.classList.add("animate-menu-item-click");
        aboutLink.addEventListener('animationend', () => {
            aboutLink.classList.remove("animate-menu-item-click");
        });
    
        if (menuSelected) {
            menuSelect();
        }
        setTimeout(() => { navigate('/about'); }, 250);
    }

    selectExperience() {
        let experienceLink = document.getElementById("experience-link");
    
        experienceLink.classList.add("animate-menu-item-click");
        experienceLink.addEventListener('animationend', () => {
            experienceLink.classList.remove("animate-menu-item-click");
        });
    
        if (menuSelected) {
            menuSelect();
        }
        setTimeout(() => { navigate('/experience'); }, 250);
    }

    selectResume() {
        let resumeLink = document.getElementById("resume-link");
    
        resumeLink.classList.add("animate-menu-item-click");
        resumeLink.addEventListener('animationend', () => {
            resumeLink.classList.remove("animate-menu-item-click");
        });
    
        if (menuSelected) {
            menuSelect();
        }
        window.open("res/resume.pdf");
    }

    render() {
        return (
            <div id = "navbar-component">
                <div id = "navbar-container">
                    <div id = "title-panel" onClick = {this.navBarClick} onKeyPress = {this.navBarClick}>
                        <h1 id = "name-title" className = "unselectable">ROHAN UPPONI</h1>
                    </div>
                    <div id = "menu-panel" onClick = {menuSelect} onKeyPress = {menuSelect}>
                        <h1 id = "menu-symbol" className = "unselectable">{'\u2630'}</h1>
                    </div>
                </div>
                <div id = "menu-container"></div>
                <ul id = "menu-list">
                    <li id = "about-link" className = "list-link unselectable"onClick = {this.selectAbout} onKeyPress = {this.selectAbout}>ABOUT</li>
                    <li id = "resume-link" className = "list-link unselectable" onClick = {this.selectResume} onKeyPress = {this.selectResume}>RESUME</li>
                    <li id = "experience-link" className = "list-link unselectable" onClick = {this.selectExperience} onKeyPress = {this.selectExperience}>EXPERIENCE</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;