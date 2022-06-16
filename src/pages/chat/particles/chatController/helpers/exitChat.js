export function exitChat(readyState, socket) {
    if (readyState == 3) {
        console.log('Соединение уже закрыто')
    }
    else {
        socket.current.close()
    }
}