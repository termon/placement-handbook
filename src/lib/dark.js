const light = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29c0-1.167.242-2.278.681-3.286z"/></svg>`
const dark = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></svg>`  
 
const container = () => document.getElementById("container")
const toggleButton = () => document.getElementById("toggleButton")
 
// load mode from localstorage
document.addEventListener("DOMContentLoaded", function(){
    initialiseMode()
})

function initialiseMode() {    
    if (getMode() === 'dark') {
        container().classList.add("dark")
        toggleButton().innerHTML = dark
    } else {
        container().classList.remove('dark')
        toggleButton().innerHTML = light
    }       
    console.log('Mode initialised to', getMode())
}

function toggle() {        
    // update toggle button icon to light/dark       
    if (getMode() === "light") {
        setMode("dark")
        container().classList.add("dark")
        toggleButton().innerHTML = dark
    } else {
        setMode("light")
        container().classList.remove("dark")
        toggleButton().innerHTML = light
    }
    console.log('Mode toggled to', getMode())
}

function getMode() {

    const mode = localStorage.getItem('mode')
    if (mode == null) {
        setMode("light")
    }
    return mode
}

function setMode(mode) {
    localStorage.setItem('mode', mode)
}