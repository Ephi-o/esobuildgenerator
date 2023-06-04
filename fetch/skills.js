"use strict";

const selection = document.querySelector('#skills-selection')
const skills = document.querySelectorAll('#skills-selection > ul')
console.log(skills)

let a = 0

for(let i = 0; i < skills.length ; i++)
{
    if(skills[i].classList == "")
    {
        var x = skills[i].children.length*1.5
        skills[i].style.marginBottom = x+"vh"
    }
    if(skills[i].classList == "reduced")
    {
        for(let y = 0; y < skills[i].children.length ; y++)
        {
            skills[i].children[y].style.display = "none"
        }
    }
        skills[i].addEventListener("click", ()=>
    {
        if(skills[i].classList == "reduced")
        {
            skills[i].classList.remove("reduced")
            for(let y = 0; y < skills[i].children.length ; y++)
            {
                skills[i].children[y].style.display = ""
                var x = skills[i].children.length*1.5
                skills[i].style.marginBottom = x+"vh"
            }
        }
        else
        {
            skills[i].classList.add("reduced")
            for(let y = 0; y < skills[i].children.length ; y++)
            {
                skills[i].children[y].style.display = "none"
                skills[i].style.marginBottom = ""
            }
        }})
    skills[i].addEventListener("click", ()=>
    {      
        if(skills[i].classList == "reduced")
        {
            a--
        }
        if(skills[i].classList == "")
        {
            a++
        }
        switch(a)
        {
            case 0: selection.style.top = "12.5vh"
            break
            case 3: selection.style.top = "10vh"
            break
            case 6: selection.style.top = "5vh"
            break
        }
        console.log(a)
    }
    )
}