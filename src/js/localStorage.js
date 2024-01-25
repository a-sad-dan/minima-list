// Code for local storage

import projectManager from "./projectManager";

const LocStorage = (() => {
    //Checking for local storage
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === "QuotaExceededError" ||
                    // Firefox
                    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0
            );
        }
    }

    //Using local storage
    if (storageAvailable("localStorage")) {
        console.log('local storage is available');

        // save the array in the local storage;
    }
    else {
        throw ("local storage not available");

    }

    const saveArray = () => {
        const projectsArr = JSON.stringify(projectManager.viewAllProjects());
        localStorage.setItem('projectsArr', projectsArr);

        console.table('saved this to the local storage', JSON.parse(getArray()))
    }

    const getArray = () => localStorage.getItem("projectsArr")

    const clearArray = () => localStorage.removeItem("projectsArr");

    return { saveArray, getArray, clearArray };
})();


export default LocStorage;