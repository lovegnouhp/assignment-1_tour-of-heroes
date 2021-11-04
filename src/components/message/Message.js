import React from "react";
import './Message.css';

const Message = ({historySelect, clearHistorySelect}) => {
    return (
        <div>
            <h2 className="message__title">Messages</h2>
            <button className="clear" onClick={clearHistorySelect}>Clear messages</button>
            {
                historySelect.map(
                    (message, index = 0) => (
                        <div key={index++}>{message}</div>
                    )
                )
            }
        </div>
    );
};

export default Message;