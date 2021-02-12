import React from 'react'
import { Avatar } from '@material-ui/core'

import './Message.css' 

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    CaptainHarvi
                    <span class="message__timestamp">Timestamp</span>    
                </h4>

                <p>Some message</p>
            </div>

        </div>
    )
}


export default Message
