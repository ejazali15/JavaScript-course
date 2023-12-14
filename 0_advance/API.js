let name = document.querySelector("#name")
const requestURL = ".json"
let xhr = new XMLHttpRequest();

xhr.open("GET", requestURL)

xhr.onreadystatechange = function () {
    const data = JSON.parse(this.responseText)
    console.log(data)

    name.innerHTML = data.name
}
xhr.send()
