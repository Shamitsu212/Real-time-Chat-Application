import { useState } from 'react'
import './App.css'

import ChatPage from './chatPage.jsx'

function App() {
  const [messages, setMessages] = useState([
    {id: 1, sender: "Иван", text: "Здравствуйте", time: 12,},
  ])
  const [sender, setSender] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const senderChange = (inputDate) => {
    setSender(inputDate.target.value)
  }
  const addToMessages = (inputDate) => {
    setUserMessage(inputDate.target.value)
    console.log(userMessage)
  }

  const addNewMessages = () => {

    if(userMessage.trim() === "")
      {
        return;
      }    

    const newMessages = {
      id: messages.length +1 ,
      sender: sender,
      text: userMessage,
      time: new Date().getHours(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessages])
    setUserMessage('');
  }

  return (
    <>
      <ChatPage messages={messages} sender={sender} senderChange={senderChange} addToMessages={addToMessages} addNewMessages={addNewMessages} userMessage={userMessage}/>
    </>
  )
}

export default App
