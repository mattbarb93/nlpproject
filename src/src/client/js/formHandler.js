import {postData} from "./postData";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    
    //Creating function to send text to server side, so I can run the API

    console.log("about to send the name to server, so we can view it in the console")
    postData('http://localhost:8081/sentiment', {text: formText})
    
    
    //Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/sentiment')
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('user-text').innerHTML = res.text
        document.getElementById('polarity').innerHTML = res.polarity
        document.getElementById('subjectivity').innerHTML = res.subjectivity
        document.getElementById('polarity-confidence').innerHTML = res.polarity_confidence
        document.getElementById('subjectivity-confidence').innerHTML = res.subjectivity_confidence
    })

    /*
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.polarity
    })
    */
}

export { handleSubmit }
