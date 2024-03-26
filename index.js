form = document.querySelector("#form")
const inputName = document.querySelector("#name")
const inputEmail = document.querySelector("#email")
const list = document.querySelector("#list")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const li = document.createElement("li")
    li.innerText = "Name: " + inputName.value + " Email: " + inputEmail.value

    list.append(li)

    inputName.value = inputEmail.value = ""
})
