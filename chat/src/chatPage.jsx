import React from "react";
import styles from "./chatPage.module.css"

function ChatPage ({messages, sender, senderChange, addToMessages, addNewMessages, userMessage}) {

    return(
        <>
            <div className={styles.nameInputContainer}>
                <input className={styles.nameInput} onChange={senderChange} placeholder="Введите ваш ник"></input>
            </div>
            <div className={styles.container}>
                <div className={styles.chatContainer}>
                    {messages.map((msg) => (
                    <div className={msg.sender === sender ? styles.messageYou : styles.message} key={msg.id}>
                        <span className={msg.sender === sender ? styles.senderYou : styles.sender}>{msg.sender}</span>
                        <span className={styles.messangetext}>{msg.text}</span>
                    </div>
                    ))}              
                </div>
                <div className={styles.sendMessage}>
                    <input className={styles.inputMessage} placeholder="Напишите сообщение" onChange={addToMessages} value={userMessage}></input>
                    <button className={styles.buttonMessage} onClick={addNewMessages}>Отправить</button>
                </div>
            </div>
        </>
    );
}

export default ChatPage;