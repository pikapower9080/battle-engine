import { reportError, pasteOrType, addOptions } from "./util"
window.typeThings = true
window.typeDelay = 15

const enemyRequiredProperties = ['name', 'health', 'speedMin', 'speedMax', 'attackMin', 'attackMax', 'blockChance']
const requiredMessages = ['introMessage']

export function setupGame(data) {
    window.data = data
    if (!('config' in data)) {reportError("Battle file is missing configuration, see the docs for more info"); return}
    if (!('player' in data)) {reportError("Battle file doesn't have player data, see the docs for more info"); return}
    if (!('enemy' in data)) {reportError("Battle file doesn't have any enemy data, see the docs for more info"); return}
    if (!('messages' in data)) {reportError("Battle file doesn't have any messages data, see the docs for more info"); return}
    enemyRequiredProperties.forEach((property) => {
        if (!(property in data.enemy)) {
            reportError(`Enemy has no ${property} property. See the docs for more info`); return
        }
    })
    requiredMessages.forEach((property) => {
        if (!(property in data.messages)) {
            reportError(`No ${property} message present in the battle file. See the docs for more info`); return
        }
    })
    if ('about' in data.config) {
        if ('tabTitle' in data.config.about) {
            document.title = data.config.about.tabTitle
        }
    }
    if ('typing' in data.config) {
        if ('enabled' in data.config.typing) window.typeThings = data.config.typing.enabled
        if ('delay' in data.config.typing) window.typeDelay = data.config.typing.delay
    }
    pasteOrType(data.messages.introMessage)
    addOptions(["Fight", "Item", "Block"], [])
}