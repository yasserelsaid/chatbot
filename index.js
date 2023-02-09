const CHAT_BUTTON_SIZE = 50 // size of the chat button in pixels
const CHAT_BUTTON_RADIUS = CHAT_BUTTON_SIZE / 2 // radius of the chat button in pixels
const CHAT_BUTTON_BACKGROUND_COLOR = '#0084FF' // background color of the chat button

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
    chat.style.display = 'block'
  } else {
    chat.style.display = 'none'
  }
})

const chat = document.createElement('div')
chat.style.position = 'fixed'
chat.style.bottom = '80px'
chat.style.right = '20px'
chat.style.width = '400px'
chat.style.height = '600px'
chat.style.borderRadius = '5px'
chat.style.backgroundColor = '#fff'
chat.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
chat.style.display = 'none'
document.body.appendChild(chat)

const chatBody = document.createElement('div')
chatBody.style.height = '90%'
chatBody.style.borderRadius = '5px'
chatBody.style.backgroundColor = '#fff'
chatBody.style.overflowY = 'scroll'
chatBody.style.boxSizing = 'border-box'
chatBody.style.padding = '10px'
chat.appendChild(chatBody)

const chatFooter = document.createElement('div')
chatFooter.style.height = '10%'
chatFooter.style.borderRadius = '5px'
chatFooter.style.backgroundColor = '#fff'
chatFooter.style.boxSizing = 'border-box'
chatFooter.style.padding = '10px'

chat.appendChild(chatFooter)

const sendMessageForm = document.createElement('form')
sendMessageForm.style.display = 'flex'
sendMessageForm.style.justifyContent = 'space-between'
sendMessageForm.style.gap = '10px'

const inputField = document.createElement('input')
inputField.placeholder = 'Message'
inputField.style.border = 'none'
inputField.style.padding = '10px'
inputField.style.flexGrow = '100'
inputField.style.borderRadius = '5px'
inputField.style.border = 'none'
inputField.style.boxSizing = 'border-box'
// inputField.style.boxShadow = '0 0 5pt 0.5pt #D3D3D3'
inputField.style.border = '1px solid #D3D3D3'

sendMessageForm.appendChild(inputField)

const submitButton = document.createElement('button')
submitButton.innerText = 'Send'
submitButton.style.padding = '10px'
submitButton.style.textAlign = 'center'
submitButton.style.borderRadius = '5px'
submitButton.style.boxSizing = 'border-box'
submitButton.style.backgroundColor = '#0084FF'
submitButton.style.color = '#fff'
submitButton.style.border = 'none'
submitButton.style.fontFamily = 'Arial'
submitButton.type = 'submit'

sendMessageForm.appendChild(submitButton)

chatFooter.appendChild(sendMessageForm)

function addMessage(message, from) {
  const messageContainer = document.createElement('div')
  const messageBubble = document.createElement('div')
  messageContainer.style.padding = '10px 0'
  messageContainer.style.display = 'flex'

  if (from === 'user') {
    messageContainer.style.justifyContent = 'flex-end'
    messageBubble.style.backgroundColor = '#0084FF'
  } else {
    messageContainer.style.justifyContent = 'flex-start'
    messageBubble.style.backgroundColor = 'black'
  }
  messageBubble.style.color = 'white'
  messageBubble.style.borderRadius = '5px'
  messageBubble.style.maxWidth = '80%'
  messageBubble.style.padding = '10px'
  messageBubble.style.fontFamily = 'Arial'
  messageBubble.innerText = message
  messageContainer.appendChild(messageBubble)
  chatBody.appendChild(messageContainer)
}

sendMessageForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const message = inputField.value
  addMessage(message, 'user')
  inputField.value = ''
  setSendDisabled()
  setTimeout(() => {
    addMessage('Openai response', 'bot')
    setSendEnabled()
  }, 2000)
})

function setSendDisabled() {
  submitButton.innerText = 'Loading'
  submitButton.disabled = true
  submitButton.style.backgroundColor = '#54adff'
  submitButton.style.color = '#ddd'
  inputField.disabled = true
}
function setSendEnabled() {
  submitButton.innerText = 'Send'
  submitButton.disabled = false
  submitButton.style.backgroundColor = '#0084FF'
  submitButton.style.color = '#fff'
  inputField.disabled = false
}
