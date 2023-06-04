"use strict";

const character = document.querySelector('#character')
const skills = document.querySelector('#skills')
const layout_inner = document.querySelector('#layout_inner')

character.addEventListener("click", ()=>
{
    fetch("./fetch/character.html").then(fetching)
    document.head.innerHTML += `<link rel="stylesheet" href="./fetch/character.css">`
    fetch("./fetch/character.js")
    .then((response)=>response.text())
    .then((text)=> eval(text))
    document.head.innerHTML += `<script src="./fetch/character.js" defer></script>`
})

// fetch("./fetch/character.html").then(fetching)
//     document.head.innerHTML += `<link rel="stylesheet" href="./fetch/character.css">`
//     fetch("./fetch/character.js")
//     .then((response)=>response.text())
//     .then((text)=> eval(text))
//     document.head.innerHTML += `<script src="./fetch/character.js" defer></script>`

skills.addEventListener("click", ()=>
{
    fetch("./fetch/skills.html").then(fetching)
    document.head.innerHTML += `<link rel="stylesheet" href="./fetch/skills.css">`
    fetch("./fetch/skills.js")
    .then((response)=>response.text())
    .then((text)=> eval(text))
    document.head.innerHTML += `<script src="./fetch/skills.js" defer></script>`
})

function fetching(response)
{
    console.log(response)
    if(response.ok)
    {
        response.text().then(showResult).catch(error=>console.log(error))
    }    
    else
    {
        console.error(response.status, response.statusText);
    }
}
function showResult(data)
{
    layout_inner.innerHTML = data;
}