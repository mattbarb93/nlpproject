
function checkForAPI(inputText) {
    console.log("::: Running checkForAPI :::", inputText);

    Client.checkForName(formText)

    fetch('http://localhost:8081/api')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message
        })


}

export { checkForAPI }
