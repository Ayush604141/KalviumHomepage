const Kalvium = document.getElementById('kalvium')
const Livebooks = document.getElementById('livebooks')
const Gmail = document.getElementById('gmail')
const GoogleChat = document.getElementById('chat')
const LinkedIn = document.getElementById('linkedin')
const Github = document.getElementById('github')


Kalvium.onclick = () =>{
    window.open('https://kalvium.community/','_blank')
}

Livebooks.onclick = () =>{
    location.href = 'https://kalvium.community/livebooks'
}

Gmail.onclick = () =>{
    location.href = 'https://mail.google.com/mail/u/0/#inbox'
}

GoogleChat.onclick = () =>{
    location.href = 'https://chat.google.com'
}

LinkedIn.onclick = () =>{
    location.href = 'https://www.linkedin.com/feed/'
}

Github.onclick = () =>{
    location.href = 'https://www.github.com'
}