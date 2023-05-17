const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');

fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then(({ slip }) => {
        title.innerHTML = slip.id;
        paragraph.innerHTML = slip.advice;
    })
