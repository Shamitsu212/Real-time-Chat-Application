import React from "react";
import styles from "./chatPage.module.css"

function ChatPage ({messages, sender, senderChange, addToMessages, addNewMessages, userMessage}) {

    return(
        <>
            <div className={styles.nameInputContainer}>
                <input className={styles.nameInput} onChange={senderChange} placeholder="Введите ваш ник"></input>
            </div>
            <section className={styles.container}>
                <section className={styles.chatContainer}>
                    {messages.map((msg) => (
                    <article className={msg.sender === sender ? styles.messageYou : styles.message} key={msg.id}>
                        <p className={msg.sender === sender ? styles.senderYou : styles.sender}>{msg.sender}</p>
                        <p className={styles.messangetext}>{msg.text}</p>
                    </article>
                    ))}              
                </section>
                <div className={styles.sendMessage}>
                    <input className={styles.inputMessage} placeholder="Напишите сообщение" onChange={addToMessages} value={userMessage}></input>
                    <button className={styles.buttonMessage} onClick={addNewMessages}>Отправить</button>
                </div>
            </section>
        </>
    );
}

export default ChatPage;