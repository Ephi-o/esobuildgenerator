//*!SECTION - Réduction


const close_factions = document.querySelector('#close_factions')
const close_races = document.querySelector('#close_races')
const close_mundus = document.querySelector('#close_mundus')
const close_classes = document.querySelector('#close_classes')
const close_attributs = document.querySelector('#close_attributs')


const factions = document.querySelector('#factions')
const races = document.querySelector('#races')
const mundus = document.querySelector('#mundus')
const classes = document.querySelector('#classes')
const health = document.querySelector('#health')
const magicka = document.querySelector('#magicka')
const stamina = document.querySelector('#stamina')

close_factions.addEventListener("click", ()=>
{
    if(factions.classList == "reduce")
    {
        factions.classList.remove("reduce")
        races.style.top = ""
        close_races.style.top = ""
        close_factions.classList.remove("reduit")
    }
    else
    {
        factions.classList.add("reduce")
        races.style.top = "20vh"
        close_races.style.top = "15vh"
        close_factions.classList.add("reduit")
    }
})
close_mundus.addEventListener("click", ()=>
{
    if(mundus.classList == "reduce")
    {
        mundus.classList.remove("reduce")
        classes.style.top = ""
        close_classes.style.top = ""
        close_mundus.classList.remove("reduit")

    }
    else
    {
        mundus.classList.add("reduce")
        classes.style.top = "20vh"
        close_classes.style.top = "15vh"
        close_mundus.classList.add("reduit")
    }
    attributsmove()
})
close_races.addEventListener("click", ()=>
{
    races.classList.toggle("reduce")
    close_races.classList.toggle("reduit")
})
close_classes.addEventListener("click", ()=>
{
    close_classes.classList.toggle("reduit")
    classes.classList.toggle("reduce")
    attributsmove()
})

function attributsmove()
{
    if(close_classes.classList != "reduit" && close_mundus.classList != "reduit")
    {
        close_attributs.style.top = "60vh"
        health.style.top = "65vh"
        magicka.style.top = "71vh"
        stamina.style.top = "71vh"
    }
    if(close_classes.classList != "reduit" && close_mundus.classList == "reduit")
    {
        close_attributs.style.top = "35vh"
        health.style.top = "40vh"
        magicka.style.top = "46vh"
        stamina.style.top = "46vh"
    }
    if(close_classes.classList == "reduit" && close_mundus.classList != "reduit")
    {
        close_attributs.style.top = "45vh"
        health.style.top = "50vh"
        magicka.style.top = "56vh"
        stamina.style.top = "56vh"
    }
    else if(close_classes.classList == "reduit" && close_mundus.classList == "reduit")
        {
            close_attributs.style.top = "20vh"
            health.style.top = "25vh"
            magicka.style.top = "31vh"
            stamina.style.top = "31vh"
        }
}
close_attributs.addEventListener("click", ()=>
{
    close_attributs.classList.toggle("reduit")
    health.classList.toggle("reduce")
    magicka.classList.toggle("reduce")
    stamina.classList.toggle("reduce")
})
//*!SECTION - Factions et races

const daggerfall = document.querySelector('#daggerfall')
const ebonheart = document.querySelector('#ebonheart')
const aldmeri = document.querySelector('#aldmeri')

const r_ebonheart = [document.querySelector('#argonian'),document.querySelector('#nord'),document.querySelector('#dark_elf')]
const r_daggerfall = [document.querySelector('#breton'),document.querySelector('#orc'),document.querySelector('#redguard')]
const r_aldmeri = [document.querySelector('#high_elf'),document.querySelector('#wood_elf'),document.querySelector('#khajiit')]
const imperial = document.querySelector('#imperial')

daggerfall.addEventListener("click", ()=>
{
    selected(daggerfall)
    unselected(ebonheart)
    unselected(aldmeri)
    imperial.classList.remove("unselected")
    imperial.classList.remove("selected")
    imperial.style.gridColumn = "1"
    for(let i = 0; i< r_daggerfall.length; i++)
    {
        selected(r_daggerfall[i])
        unselected(r_ebonheart[i])
        unselected(r_aldmeri[i])
    }
})
ebonheart.addEventListener("click", ()=>
{
    unselected(daggerfall)
    selected(ebonheart)
    unselected(aldmeri)
    imperial.classList.remove("unselected")
    imperial.classList.remove("selected")
    imperial.style.gridColumn = "2"
    for(let i = 0; i< r_daggerfall.length; i++)
    {
        unselected(r_daggerfall[i])
        selected(r_ebonheart[i])
        unselected(r_aldmeri[i])
    }
})
aldmeri.addEventListener("click", ()=>
{
    unselected(daggerfall)
    unselected(ebonheart)
    selected(aldmeri)
    imperial.classList.remove("unselected")
    imperial.classList.remove("selected")
    imperial.style.gridColumn = "3"
    for(let i = 0; i< r_daggerfall.length; i++)
    {
        unselected(r_daggerfall[i])
        unselected(r_ebonheart[i])
        selected(r_aldmeri[i])
    }
})

for(let i =0; i<r_daggerfall.length; i++)
{
    r_daggerfall[i].addEventListener("click", ()=>
    {
            selected(daggerfall)
            unselected(ebonheart)
            unselected(aldmeri)
    imperial.style.gridColumn = "1"
        switch(i)
        {
            case 0:
                unselected(r_daggerfall[1])
                unselected(r_daggerfall[2])
            case 1:
                unselected(r_daggerfall[0])
                unselected(r_daggerfall[2])
            case 2:
                unselected(r_daggerfall[0])
                unselected(r_daggerfall[1]) 
                break
        }
        for(let y = 0; y<r_daggerfall.length; y++)
        {
            unselected(r_ebonheart[y])
            unselected(r_aldmeri[y])
        }
        selected(r_daggerfall[i])
        imperial.classList.add("unselected")
    })
}

for(let i =0; i<r_ebonheart.length; i++)
{
    r_ebonheart[i].addEventListener("click", ()=>
    {
        unselected(daggerfall)
        selected(ebonheart)
        unselected(aldmeri)
    imperial.style.gridColumn = "2"
    switch(i)
    {
        case 0:
            unselected(r_ebonheart[1])
            unselected(r_ebonheart[2])
        case 1:
            unselected(r_ebonheart[0])
            unselected(r_ebonheart[2])
        case 2:
            unselected(r_ebonheart[0])
            unselected(r_ebonheart[1]) 
            break
    }
    for(let y = 0; y<r_ebonheart.length; y++)
    {
        unselected(r_daggerfall[y])
        unselected(r_aldmeri[y])
    }
    selected(r_ebonheart[i])
    imperial.classList.add("unselected")
})
}

for(let i =0; i<r_aldmeri.length; i++)
{
    r_aldmeri[i].addEventListener("click", ()=>
    {
        unselected(daggerfall)
        unselected(ebonheart)
        selected(aldmeri)
    imperial.style.gridColumn = "3"
    switch(i)
    {
        case 0:
            unselected(r_aldmeri[1])
            unselected(r_aldmeri[2])
        case 1:
            unselected(r_aldmeri[0])
            unselected(r_aldmeri[2])
        case 2:
            unselected(r_aldmeri[0])
            unselected(r_aldmeri[1]) 
            break
    }
    for(let y = 0; y<r_aldmeri.length; y++)
    {
        unselected(r_daggerfall[y])
        unselected(r_ebonheart[y])
    }
    selected(r_aldmeri[i])
    imperial.classList.add("unselected")
})
}

imperial.addEventListener("click", ()=>
{
    for(let i = 0; i<3; i++)
    {
        unselected(r_daggerfall[i])
        unselected(r_ebonheart[i])
        unselected(r_aldmeri[i])
    }
    selected(imperial)
})

function selected(e)
{
    e.classList.add("selected")
    e.classList.remove("unselected")
}

function unselected(e)
{
    e.classList.remove("selected")
    e.classList.add("unselected")
}

//*!SECTION - CLASSES ET MUNDUS

const mundus_array = document.querySelectorAll('#mundus li')
const classes_array = document.querySelectorAll('#classes li')
console.log(classes_array)


for(let i =0; i<mundus_array.length; i++)
{
    mundus_array[i].addEventListener('click', ()=>
    {
        for(let y=0; y<mundus_array.length; y++)
        {
            if(y == i)
            {
                selected(mundus_array[i])
            }
            else
            {
                unselected(mundus_array[y])
            }
        }
    })
}

for(let i =0; i<classes_array.length; i++)
{
    classes_array[i].addEventListener('click', ()=>
    {
        for(let y=0; y<classes_array.length; y++)
        {
            if(y == i)
            {
                selected(classes_array[i])
            }
            else
            {
                unselected(classes_array[y])
            }
        }
    })
}

//*!SECTION - STATS

var number_health = document.querySelector('#number_health')
var number_magicka = document.querySelector('#number_magicka')
var number_stam = document.querySelector('#number_stam')

const minus_health = document.querySelector('#minus_health')
const minus_stam = document.querySelector('#minus_stam')
const minus_magicka = document.querySelector('#minus_magicka')

const plus_health = document.querySelector('#plus_health')
const plus_stam = document.querySelector('#plus_stam')
const plus_magicka = document.querySelector('#plus_magicka')

let h = 0
let m = 0
let s = 0
// if(HP)
// {
//     h = HP
// }
number_health.innerHTML = h
number_magicka.innerHTML = m
number_stam.innerHTML = s

attributes()

function attributes()
{
    let total = h+m+s
    if(total == 64)
    {
        shutoff(plus_health)
        shutoff(plus_stam)
        shutoff(plus_magicka)
    }
    if(total < 64)
    {
        shuton(plus_health)
        shuton(plus_magicka)
        shuton(plus_stam)
    }
    if(h == 0)
    {shutoff(minus_health)}
    if(m == 0)
    {shutoff(minus_magicka)}
    if(s == 0)
    {shutoff(minus_stam)}
    if(h > 0)
    {shuton(minus_health)}
    if(m > 0)
    {shuton(minus_magicka)}
    if(s > 0) 
    {shuton(minus_stam)}   
}
plus_health.addEventListener("click", ()=>
{
    ++h
    number_health.innerHTML = h
    attributes()
})
plus_health.addEventListener("mousedown", ()=>
{
    function Increment()
    {
        if(h + m + s > 62)
        {
            clearInterval(timer)
        }
        ++h
        number_health.innerHTML = h
        attributes()
    }
    const timer = setInterval(Increment, 150)
    plus_health.addEventListener("mouseup", ()=>
    {
        clearInterval(timer)
    })
})
minus_health.addEventListener("click", ()=>
{
    --h
    number_health.innerHTML = h
    attributes()
})
minus_health.addEventListener("mousedown", ()=>
{
    function Increment()
    {
        if(h < 2)
        {
            clearInterval(timer)
        }
        --h
        number_health.innerHTML = h
        attributes()
    }

    if(h == 1)
    {
        clearInterval(timer)
    }

    const timer = setInterval(Increment, 150)
    minus_health.addEventListener("mouseup", ()=>
    {
        clearInterval(timer)
    })
})
plus_magicka.addEventListener("click", ()=>
{
    ++m
    number_magicka.innerHTML = m
    attributes()
})
plus_magicka.addEventListener("mousedown", ()=>
{
        function Increment()
    {
        if(h + m + s > 62)
        {
            clearInterval(timer)
        }
        ++m
        number_magicka.innerHTML = m
        attributes()
    }
    const timer = setInterval(Increment, 150)
    plus_magicka.addEventListener("mouseup", ()=>
    {
        clearInterval(timer)
    })
})
minus_magicka.addEventListener("click", ()=>
{
    --m
    number_magicka.innerHTML = m
    attributes()
})
minus_magicka.addEventListener("mousedown", ()=>
{
    function Increment()
    {
        if( m < 2)
        {
            clearInterval(timer)
        }
        --m
        number_magicka.innerHTML = m
        attributes()
    }
    const timer = setInterval(Increment, 150)
    minus_magicka.addEventListener("mouseup", ()=>
    {
        clearInterval(timer)
    })
})
plus_stam.addEventListener("click", ()=>
{
    ++s
    number_stam.innerHTML = s
    attributes()
})
plus_stam.addEventListener("mousedown", ()=>
{
    function Increment()
    {
        if(h + m + s > 62)
        {
            clearInterval(timer)
        }
        ++s
        number_stam.innerHTML = s
        attributes()
    }
    const timer = setInterval(Increment, 150)
    plus_stam.addEventListener("mouseup", ()=>
    {
        clearInterval(timer)
    })
})
minus_stam.addEventListener("click", ()=>
{
    --s
    number_stam.innerHTML = s
    attributes()
})
minus_stam.addEventListener("mousedown", ()=>
{
    function Increment()
    {
        if( s < 2)
        {
            clearInterval(timer)
        }
        --s
        number_stam.innerHTML = s
        attributes()
    }

        const timer = setInterval(Increment, 150)


    minus_stam.addEventListener("mouseup", ()=>
    {
        clearInterval(timer)
    })
})

function shutoff(e)
{
    e.classList.add("unselected")
    e.style.pointerEvents = "none"
}
function shuton(e)
{
    e.classList.remove("unselected")
    e.style.pointerEvents = "auto"
}

document.body.addEventListener("click", ()=>
{
    const arr_selected = document.getElementsByClassName("selected")
    var array = Array.from(arr_selected)
    console.log(array)
    console.log(array[0])
    for(let i = 0; i < array.length ; i++)
    {
        localStorage.setItem(`data${i}`, array[i].id)
        var test = localStorage.getItem(`data${i}`)
        console.log(test)
    }
    localStorage.setItem("HP", number_health.innerHTML)
    localStorage.setItem("MG", number_magicka.innerHTML)
    localStorage.setItem("STM", number_stam.innerHTML)
})

var data0 = localStorage.getItem("data0")
var data1 = localStorage.getItem("data1")
var data2 = localStorage.getItem("data2")
var data3 = localStorage.getItem("data3")
var HP = localStorage.getItem("HP")
var MG = localStorage.getItem("MG")
var STM = localStorage.getItem("STM")

function testing()
{
    if(data0 || data1 || data2 || data3)
    {
        for(let i = 0; i < mundus_array.length ; i++)
        {
            mundus_array[i].classList.add("unselected")
        }
        for(let i = 0; i < classes_array.length ; i++)
        {
            classes_array[i].classList.add("unselected")
        }
        for(let i = 0; i < r_aldmeri.length ; i++)
        {
            r_aldmeri[i].classList.add("unselected")
            r_ebonheart[i].classList.add("unselected")
            r_daggerfall[i].classList.add("unselected")
        }
        unselected(daggerfall)
        unselected(ebonheart)
        unselected(aldmeri)
        unselected(imperial)

        selected(document.getElementById(`${data0}`))
        selected(document.getElementById(`${data1}`))
        selected(document.getElementById(`${data2}`))
        selected(document.getElementById(`${data3}`))
        number_health.innerHTML = HP
        number_magicka.innerHTML = MG
        number_stam.innerHTML = STM
    }
}

testing()

console.log(h)
console.log(HP)