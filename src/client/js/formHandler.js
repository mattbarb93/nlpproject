import {postData} from "./postData";

const onSubmit = async(event) => {
    event.preventDefault()
    let formText = document.getElementById('name').value
    const formData = {}
    formData["text"] = formText
    formText ? postData('http://localhost:8081/sentiment', {text: formText})
    .then(function(res) {
        console.log(res)
        document.getElementById('user-text').innerHTML = res.text
        document.getElementById('polarity').innerHTML = res.polarity
        document.getElementById('subjectivity').innerHTML = res.subjectivity
        document.getElementById('polarity-confidence').innerHTML = res.polarity_confidence
        document.getElementById('subjectivity-confidence').innerHTML = res.subjectivity_confidence
    }) : alert("Please enter text!")
}

/*
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    
    //Creating function to send text to server side, so I can run the API
    postData('http://localhost:8081/sentiment', {text: formText})
    .then(function(res) {
        console.log(res)
        document.getElementById('user-text').innerHTML = res.text
        document.getElementById('polarity').innerHTML = res.polarity
        document.getElementById('subjectivity').innerHTML = res.subjectivity
        document.getElementById('polarity-confidence').innerHTML = res.polarity_confidence
        document.getElementById('subjectivity-confidence').innerHTML = res.subjectivity_confidence
    })
    
}

export { handleSubmit }
*/

export {onSubmit}