import { Report } from 'notiflix/build/notiflix-report-aio';
import Typewriter from 'typewriter-effect/dist/core';
import { updateOptionCount, setOptionIndex, getOptionCount } from './keybinds';

export function reportError(message) {
    Report.info("Error", message, "Exit", window.location.reload)
}

let typewriterObject;
export function typewriter() {
    if (typeof typewriterObject != "undefined") {
        typewriterObject.stop()
        typewriterObject.deleteAll()
    }
    typewriterObject = new Typewriter('#box-text', {
        delay: window.typeDelay || 15,
        cursor: '',
        deleteSpeed: 0
    })
    return typewriterObject
}

export function pasteOrType(message) {
    if (window.typeThings) {
        typewriter().typeString(message).start()
    } else {
        typewriter().pasteString(message).start()
    }
}

const options = document.getElementById("options")

export function addOptions(optionTexts, optionCallbacks) {
    Array.from(document.getElementsByClassName("option")).forEach((option) => {
        option.remove()
    })
    updateOptionCount(0)
    setOptionIndex(0)
    optionTexts.forEach((option, i) => {
        const optionElement = document.createElement('span')
        optionElement.classList.add("option")
        if (i == 0) {
            optionElement.classList.add("selected")
        }
        optionElement.innerText = option
        optionElement.addEventListener("click", () => {
            optionCallbacks[i](optionElement)
        })
        options.appendChild(optionElement)
        updateOptionCount(getOptionCount() + 1)
    })
}