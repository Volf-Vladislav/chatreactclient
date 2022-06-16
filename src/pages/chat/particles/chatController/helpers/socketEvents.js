import { message } from './message'

export function openChat(socket, user) {
    socket.current.send(message({
        gender: user.userGender,
        seekingGender: user.penPalGender,
        status: 'seeking',
        id: user.userID
    }, 'status'))
}

export function onMessage(event) {
    event = JSON.parse(event.data)

    if (event.event == 'status') {
        return { type: 'changePenPalStatus', payload: event }
    }
    else if (event.event == 'message') {
        return {
            type: 'changeMessages', payload: {
                position: 'left',
                id: 'penPalID',
                message: event.data.data
            }
        }
    }
}


