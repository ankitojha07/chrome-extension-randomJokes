const jokeElement = document.getElementById("jokeElement")

fetch("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(jokeData =>{
    const jokeText = jokeData.attachments[0].text;
    jokeElement.innerHTML = jokeText;
})