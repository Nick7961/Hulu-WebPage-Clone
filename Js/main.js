const loginForm = document.querySelector ('.login-form')
const btnLogin = document.querySelector ('.btn-login')
const closeBtn = document.querySelector ('.close-btn')

btnLogin.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

function openModal(){
    loginForm.style.display = 'block'
}

function closeModal(){
    loginForm.style.display = 'none'
}

function outsideClick(e){
    if (e.target == loginForm){
        closeModal()
    }
}