import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { setupGame } from './setup';
import { typewriter, addOptions } from './util';


Report.init({
    backgroundColor: 'rgb(32, 32, 32)',
    borderRadius: 0,
    svgSize: 0,
    backOverlayClickToClose: true,
    info: {
        messageColor: 'white',
        titleColor: 'white',
        backOverlayColor: 'rgba(15, 15, 15, 0.2)',
        buttonBackground: 'gray'
    }
})

function mainMenu() {
    typewriter().typeString("Welcome to <strong>battle engine</strong>, a tool for creating and playing turn based battles!<br><br>").pauseFor(200).typeString("Arrow keys to select, enter to confirm (or just click)").start()
    addOptions(["Load Example Fight", "Controls", "Create Your Own"], [() => {
        Loading.circle("Fetching...")
        fetch('example.json').then((res) => {
            Loading.change("Parsing data...")
            res.json().then((data) => {
                Loading.remove()
                setupGame(data)
            }).catch((errorM) => {
                alert("Failed to parse file: " + errorM)
            })
        }).catch((errorM) => {
            alert("Failed to fetch file: " + errorM)
        })
    }, () => {
        typewriter().typeString("<strong>Controls:</strong><br><br>Enter, Space, X - Confirm / Select<br>Shift, Z, Backspace - Back<br>Up / Down - Select option").start()
        addOptions(["Go Back"], [mainMenu])
    }, () => {}])
}
mainMenu()