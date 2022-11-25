let formTag = document.getElementById("formTag")
let name = document.getElementById('result')
let input = document.getElementById('input')
let answer = "usain bolt"
let div =  document.getElementById('objects')
// let reset =  document.getElementsByClassName('reset')[0]

// reset.addEventListener( "click", function () {
//     document.getElementById(input).reload()
// })
formTag.addEventListener("submit", function (event) {
    event.preventDefault();

    let form = event.currentTarget;
    let value = form.input.value.toLowerCase();
    submit(value)
} )

function submit(val) {
    
    if (answer == val) {
        name.innerText = 'true'
    }
    else {
        name.innerText = 'ya papa'
        
    }
}

function reset() {
    // formTag.reset()
    location.reload()
    
}


// let ArrayOf = ['apple', '', 'avocardo', '', 'orange']
// div.innerText = ArrayOf
// parts.map((item)=>{
//     objects.innerText = item.name
// })

// let parts = {
//     name : "Inyene",
//     class : "Jss1",
//     school : "QAS",
//     age : 10,
//   }


  

// for (let key in parts) {
//     let p = document.createElement('p')

//     p.textContent = key + ":" + parts[key]

//     div.appendChild(p)
//     p.style.color='red'
    
//     // console.log(key, parts[key])

// }
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }