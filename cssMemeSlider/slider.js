document.addEventListener('DOMContentLoaded', () => {
    const memes = [
        {
            "img": "assets/img/mem1.jpg",
            "text": "qwewr"
        },
        {
            "img": "assets/img/mem3.jpg",
            "text": "qwewr"
        },
        {
            "img": "assets/img/mem4.jpg",
            "text": "qwewr"
        },
        {
            "img": "assets/img/mem6.jpg",
            "text": "qwewr"
        }
    ];


    const memeSlide = document.querySelector('screen-container');

    memes.forEach(meme => {
        const img = document.createElement('img');
        img.src = meme.img;
        img.alt = meme.name;
        img.className = 'img-meme';

        const text = document.createElement('p');
        text.textContent = meme.text;
        text.className = 'text-meme';

        
    })
})