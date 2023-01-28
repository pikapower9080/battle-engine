let optionIndex = 0
let optionCount = 0

const selectedOptionSelector = '.selected'
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter" || e.key == " " || e.key == "x") {
        const selectedOption = document.querySelector(selectedOptionSelector)
        if (selectedOption) {
            selectedOption.click()
        }
    }
    if (e.key == "ArrowUp") {
        if (optionCount <= 1) return
        let newOption = document.querySelector("span.option:nth-child(" + optionIndex + ")")
        let oldOption = document.querySelector("span.selected")
        if (newOption) {
            optionIndex -= 1
            newOption.classList.add('selected')
            oldOption.classList.remove('selected')
        }
    }
    if (e.key == "ArrowDown") {
        if (optionCount <= 1) return
        let newOption = document.querySelector("span.option:nth-child(" + (parseInt(optionIndex) + 2) + ")")
        let oldOption = document.querySelector("span.selected")
        if (newOption) {
            optionIndex += 1
            newOption.classList.add('selected')
            oldOption.classList.remove('selected')
        }
    }
    if (e.key == "Shift" || e.key == "Backspace" || e.key == "z") {
        let allOptions = document.querySelectorAll("span.option")
        if (allOptions) {
            Array.from(allOptions).forEach((option) => {
                if (option.innerText.toLowerCase().includes("back")) {
                    return option.click() // Also stop the loop
                }
            })
        }
    }
})

export function updateOptionCount(value) {
    optionCount = value
}
export function getOptionCount() {
    return optionCount
}
export function setOptionIndex(value) {
    optionIndex = value
}