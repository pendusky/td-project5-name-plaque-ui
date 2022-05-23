const button = document.querySelector(".btn")
let content = document.querySelector(".text-area")
let message = document.querySelector(".noah")
let refreshBtn =document.querySelector(".btn-refresh")

 button.addEventListener("click", () =>{
    if (content.value.length == 0){
        message.innerText = " Please Input Letters. "
    }
    else if (content.value === "YOUR NAME"){
        message.innerText = "Please enter a Unique Name"
    }
    else if (content.value.length > 15) {
        message.innerText = "You have exceeded the number of available letters."
    }
     else {
        message.innerText = " Congratulations!!!"
    }
})

refreshBtn.addEventListener('click' , resetPlaque)

function resetPlaque() {
    location.reload()
}