const API_RANDOM_ADVICE = 'https://api.adviceslip.com/advice';
const button = document.getElementById('button')
const textElement = document.querySelector('.main__text');
const tittleElement = document.querySelector('.main__title')

button.onclick = async ()=>{
    loadRandomAdvice()
}

async function loadRandomAdvice(){
    const Response = await fetch(API_RANDOM_ADVICE)
    const data = await Response.json()
    
    textElement.innerText = data.slip.advice
    tittleElement.innerText = `ADVICE #${data.slip.id}`
}