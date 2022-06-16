import React from 'react'
import Picker from 'emoji-picker-react'

function Emoji(props) {
    if(props.isOpen) {
        return (
            <Picker
                onEmojiClick={props.onEmojiClick}
                disableSkinTonePicker={true}
                disableSearchBar={true}
                preload={true}
                native={true}
    
                pickerStyle={{
                    position: 'absolute',
                    width: '100%',
                    height: '340px',
                    bottom: '50px',
                    left: '0px',
                    background: '#0f0f0f',
                    border: 'none',
                }} />
        )
    }

    else return <></>
}

export default Emoji
