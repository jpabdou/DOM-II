import './less/index.less'

// Your code goes here!
const link = document.querySelectorAll(".nav-link")
link.forEach(links=>{
    links.addEventListener("mouseenter", element => {
        links.style.backgroundColor="green"
    })
    links.addEventListener("mouseleave", evt=>{
        links.style.backgroundColor="white"
        evt.stopPropagation()
    })
})

const signUp = document.querySelectorAll(".btn")

signUp.forEach(button => {
    button.addEventListener("click",evt=>{
        window.alert("Thanks for wanting to sign up... but we aren't ready yet!");
    })
})

document.addEventListener("keydown", evt => {
    if (evt.key==="Escape") {
        alert("Don't go!")
    }
})


window.addEventListener("load", evt=> {
    alert("page loaded")
})
