const CHAT_BUTTON_SIZE = 50 // size of the chat button in pixels
const CHAT_BUTTON_RADIUS = CHAT_BUTTON_SIZE / 2 // radius of the chat button in pixels
const CHAT_BUTTON_BACKGROUND_COLOR = 'black' // background color of the chat button
const SEND_BUTTON_BACKGROUND_COLOR = 'black' // background color of the chat button
const SOURCES_SEPARATOR = '$*%^$'
const scriptTag = document.currentScript
const CHAT_BUTTON_ICON = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="#FFFFFF"/>
  </svg>
`

// create the chat button element
const chatButton = document.createElement('div')
// apply styles to the chat button
chatButton.style.position = 'fixed'
chatButton.style.bottom = '20px'
chatButton.style.right = '20px'
chatButton.style.width = CHAT_BUTTON_SIZE + 'px'
chatButton.style.height = CHAT_BUTTON_SIZE + 'px'
chatButton.style.borderRadius = CHAT_BUTTON_RADIUS + 'px'
chatButton.style.backgroundColor = CHAT_BUTTON_BACKGROUND_COLOR
chatButton.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
chatButton.style.cursor = 'pointer'

// create the chat button icon element
const chatButtonIcon = document.createElement('div')

// apply styles to the chat button icon
chatButtonIcon.style.display = 'flex'
chatButtonIcon.style.alignItems = 'center'
chatButtonIcon.style.justifyContent = 'center'
chatButtonIcon.style.width = '100%'
chatButtonIcon.style.height = '100%'

// add the chat button icon to the chat button element
chatButtonIcon.innerHTML = CHAT_BUTTON_ICON
chatButton.appendChild(chatButtonIcon)

// add the chat button to the page
document.body.appendChild(chatButton)

// toggle the chat component when the chat button is clicked
chatButton.addEventListener('click', () => {
  // toggle the chat component
  if (chat.style.display === 'none') {
    chat.style.display = 'flex'
  } else {
    chat.style.display = 'none'
  }
})

const chat = document.createElement('div')
chat.style.position = 'fixed'
chat.style.position = 'fixed'
chat.style.display = 'flex'
chat.style.flexDirection = 'column'
chat.style.justifyContent = 'space-between'
chat.style.bottom = '80px'
chat.style.right = '20px'
chat.style.width = '400px'
chat.style.height = '600px'
chat.style.backgroundColor = '#fff'
chat.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
chat.style.display = 'none'
chat.style.border = '1px solid #D5D4D5'

document.body.appendChild(chat)

// const chatBody = document.createElement('div')
// // chatBody.style.height = '87%'
// chatBody.style.borderRadius = '5px'
// chatBody.style.backgroundColor = '#fff'
// chatBody.style.overflowY = 'scroll'
// chatBody.style.boxSizing = 'border-box'
// chatBody.style.padding = '10px'
// chat.appendChild(chatBody)

chat.innerHTML = `<iframe
src="https://www.chatbase.co/chatbot-iframe/${scriptTag.getAttribute(
  'data-chatbotId'
)}"
width="100%"
height="100%"
frameborder="0"
></iframe>`

// chat.appendChild()
// const chatFooter = document.createElement('div')

// chatFooter.style.borderRadius = '5px'
// chatFooter.style.backgroundColor = '#fff'
// chatFooter.style.boxSizing = 'border-box'
// chatFooter.style.padding = '10px'

// // chat.appendChild(chatFooter)

// const sendMessageForm = document.createElement('form')
// sendMessageForm.style.display = 'flex'
// sendMessageForm.style.justifyContent = 'space-between'
// sendMessageForm.style.gap = '10px'

// const inputField = document.createElement('input')
// inputField.placeholder = 'Message'
// inputField.style.border = 'none'
// inputField.style.padding = '10px'
// inputField.style.flexGrow = '100'
// inputField.style.borderRadius = '5px'
// inputField.style.border = 'none'
// inputField.style.boxSizing = 'border-box'
// // inputField.style.boxShadow = '0 0 5pt 0.5pt #D3D3D3'
// inputField.style.border = '1px solid #D3D3D3'

// sendMessageForm.appendChild(inputField)

// const submitButton = document.createElement('button')
// submitButton.innerText = 'Send'
// submitButton.style.padding = '10px'
// submitButton.style.textAlign = 'center'
// submitButton.style.borderRadius = '5px'
// submitButton.style.boxSizing = 'border-box'
// submitButton.style.backgroundColor = SEND_BUTTON_BACKGROUND_COLOR
// submitButton.style.color = '#fff'
// submitButton.style.border = 'none'
// submitButton.style.fontFamily = 'Arial'
// submitButton.style.cursor = 'pointer'
// submitButton.type = 'submit'

// sendMessageForm.appendChild(submitButton)

// const poweredBy = document.createElement('div')
// poweredBy.style.boxSizing = 'border-box'
// poweredBy.style.padding = '5px'
// poweredBy.style.textAlign = 'center'
// poweredBy.style.fontFamily = 'Arial'
// poweredBy.style.fontSize = '13px'
// poweredBy.style.color = '#999'

// poweredBy.innerText = 'Powered By Chatbase'

// chatFooter.appendChild(poweredBy)

// chatFooter.appendChild(sendMessageForm)

// function addMessage(message, from) {
//   if (!message) return
//   const messageContainer = document.createElement('div')
//   const messageBubble = document.createElement('div')
//   messageContainer.style.padding = '20px 0 0 0'
//   messageContainer.style.display = 'flex'

//   if (from === 'user') {
//     messageContainer.style.justifyContent = 'flex-end'
//     // messageBubble.style.backgroundColor = '#0084FF'
//   } else {
//     messageContainer.style.fontWeight = '600'
//     messageContainer.style.justifyContent = 'flex-start'
//     // messageBubble.style.backgroundColor = 'black'
//   }

//   messageBubble.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
//   messageBubble.style.color = 'black'
//   messageBubble.style.border = '1px solid #D5D4D5'
//   messageBubble.style.borderRadius = '5px'
//   messageBubble.style.maxWidth = '80%'
//   messageBubble.style.padding = '10px'
//   messageBubble.style.fontFamily = 'Arial'
//   messageBubble.innerText = message
//   messageContainer.appendChild(messageBubble)
//   chatBody.appendChild(messageContainer)
//   chatBody.scrollTop = chatBody.scrollHeight

//   return messageBubble
// }

// sendMessageForm.addEventListener('submit', async (e) => {
//   e.preventDefault()
//   const userMessage = inputField.value
//   if (!userMessage) return
//   const userMessageBubble = addMessage(userMessage, 'user')
//   inputField.value = ''

//   setSendDisabled()

//   const newMessages = [
//     { message: 'How can i help you?', who: 'bot' },
//     { message: userMessage, who: 'user' },
//   ]

//   const chatbotId = scriptTag.getAttribute('data-chatbotId')

//   console.log(
//     JSON.stringify({
//       messages: newMessages,
//       chatId: chatbotId,
//       stream: true,
//     })
//   )

//   const response = await fetch('http://localhost:3000/api/v1/chat', {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer df74a2b6-9bb3-49b3-a88a-0a669262a66d`,
//     },
//     body: JSON.stringify({
//       messages: newMessages,
//       chatId: chatbotId,
//       stream: true,
//     }),
//   })

//   // const response = await fetch('https://qa.chatbase.co/api/v1/chat', {
//   //   method: 'POST',
//   //   headers: {
//   //     Authorization: `Bearer <Your-Secret-Key>`,
//   //   },
//   //   body: JSON.stringify({
//   //     messages: [
//   //       { message: 'How can i help you?', who: 'bot' },
//   //       { message: 'What is chatbase?', who: 'user' },
//   //     ],
//   //     chatId: chatbotId,
//   //     stream: true,
//   //   }),
//   // })

//   if (!response.ok) {
//     throw new Error(response.statusText)
//   }
//   // // This data is a ReadableStream
//   const data = response.body
//   // setSources(matchingTexts);
//   if (!data) {
//     return
//   }

//   const reader = data.getReader()
//   const decoder = new TextDecoder()
//   let done = false
//   // let separatorFound = false
//   botMessageBubble = null

//   while (!done) {
//     const { value, done: doneReading } = await reader.read()
//     done = doneReading
//     const chunkValue = decoder.decode(value)
//     // const json = JSON.parse(chunkValue);
//     let word = ''

//     if (chunkValue.indexOf(SOURCES_SEPARATOR) !== -1) {
//       // separatorFound = true
//       const parsedChunkValue = chunkValue.split(SOURCES_SEPARATOR)
//       // setSources(JSON.parse(parsedChunkValue[0]));
//       word = parsedChunkValue[1]
//     } else {
//       word = chunkValue
//     }

//     // if (!separatorFound) {
//     //   console.log(separatorFound)
//     //   throw Error('Please retry sending message')
//     // }

//     if (!botMessageBubble) {
//       botStarted = true
//       botMessageBubble = addMessage(word, 'bot')
//     } else {
//       botMessageBubble.innerText += word
//     }
//     botMessageBubble.scrollIntoView({
//       block: 'nearest',
//     })
//   }

//   // addMessage('What?', 'bot')

//   // addMessage(message, 'bot')
//   setSendEnabled()
// })

// function setSendDisabled() {
//   // submitButton.innerText = 'Loading'
//   submitButton.disabled = true
//   submitButton.style.backgroundColor = '#3333'
//   submitButton.style.color = '#ddd'
//   // inputField.disabled = true
// }
// function setSendEnabled() {
//   submitButton.innerText = 'Send'
//   submitButton.disabled = false
//   submitButton.style.backgroundColor = SEND_BUTTON_BACKGROUND_COLOR
//   submitButton.style.color = '#fff'
//   inputField.disabled = false
//   inputField.focus()
// }

// curl http://localhost:3000/api/v1/chat \
//   -H 'Authorization: Bearer cdbcd0ef-ea9f-4bc2-931d-19b4cec153ec' \
//   -d '{"messages":[{"message":"How can i help you?","who":"bot"},{"message":"Hi","who":"user"}],"chatId":"atomic-habits-pdf--8lu-jkhb","stream":false}'

// This data is a ReadableStream
// const data = response.body

// if (!data) {
//   return
// }

// const reader = data.getReader()
// const decoder = new TextDecoder()
// let done = false

// while (!done) {
//   const { value, done: doneReading } = await reader.read()
//   done = doneReading
//   const chunkValue = decoder.decode(value)
//   console.log(chunkValue)
// }
