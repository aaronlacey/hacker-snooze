//---------Query Selectors--------//
let button = document.querySelector('#button')
let newsItems = document.querySelector('#newsItems')
let title = document.querySelector('#title')
let by = document.querySelector('#by')
let score = document.querySelector('#score')
let descendants = document.querySelector('#descendants')


//--------API--------//
button.addEventListener('click', () => {
    let hnAPIrequest = async () => {
        let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
        let data = await response.json();
        console.log(data)
        for (let i = 0; i < 100; i++) {

            let storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
            let storyData = await storyResponse.json();
            console.log(storyData);

            newsItems.innerHTML += `
    <div class = "card text-bg-dark mb-3">
    <h5> <a href=${storyData.url}>${storyData.title}</a> </h5>Author: ${storyData.by}
    <div class = "card-subtitle mb-2 text-muted"> Score: ${storyData.score} Comments: ${storyData.by}</div>`
        }
    }
    hnAPIrequest();

})