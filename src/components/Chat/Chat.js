import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import './Chat.css'
import ChatHeader from './ChatHeader'

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__messages">

            </div>
            <div className="chat__input">
                <AddCircleIcon />
                <form>
                    <input placeholder={`Message #React`} />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Chat
