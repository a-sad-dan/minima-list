import backIcon from './assets/icons/chevronBack.svg'
import menuIcon from './assets/icons/menu.svg'
import './assets/components/project/project.css'

const pageWrapper = document.querySelector('.page-wrapper');
const sideBar = document.querySelector('#side-bar');

//Close Button
const closeSideBarButton = document.createElement('img');
closeSideBarButton.src = backIcon;
closeSideBarButton.classList.add('close-btn');
sideBar.appendChild(closeSideBarButton);


// Open Button
const openSideBarButton = document.createElement('img');
openSideBarButton.classList.add('open-btn');
openSideBarButton.src = menuIcon;
pageWrapper.appendChild(openSideBarButton);

// Close and Open Functionality
closeSideBarButton.addEventListener('click', () => toggleSideBar(true));
openSideBarButton.addEventListener('click', () => toggleSideBar(false))


function toggleSideBar(isSideBarOpen) {
    if (isSideBarOpen) {
        sideBar.classList.add('closed');
    }
    else {
        sideBar.classList.remove('closed');
    }
}

function resizeSideBar() {
    if (window.innerWidth < 768) {
        sideBar.classList.add('closed');
    } else {
        sideBar.classList.remove('closed');
    }
}

resizeSideBar();
// for dynamically closing SideBar
window.addEventListener('resize', resizeSideBar);



// Importing the logo
import minimaListLogo from './assets/MinimaListLogo.svg';
const logo = document.createElement('img');
logo.id = 'minimaList'
logo.src = minimaListLogo;
sideBar.appendChild(logo);



// Adding extra tabs etc

import createProject from './assets/components/project/project';
import homeIcon from './assets/icons/home.svg';
import notesIcon from './assets/icons/notes.svg';
import gymIcon from './assets/icons/gym.svg';


import { createNewProjectBtn } from './assets/components/project/project';

const homeTab = createProject('Home', homeIcon);
const notesTab = createProject('Notes', notesIcon);
const gymTab = createProject('Gym', gymIcon);

sideBar.appendChild(createNewProjectBtn())

sideBar.appendChild(homeTab);
sideBar.appendChild(gymTab);
sideBar.append(notesTab);
