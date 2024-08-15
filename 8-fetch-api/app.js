/* const container = document.querySelector('.container');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(respuesta => respuesta.json())
    .then(datos => {
    datos.forEach(element => {
        //Name: Leanne ...
        //Username: Bret
        console.log(`Name: ${element.name}`);
        console.log(`Username: ${element.username}`)

        //Con JavaScript: Crear un elemento "div" con createElement y asignarle la clase "box"
        //Crear un "h1" con createElement y hacer appendChild al div de clase "box"
        //Crear un "p" con createElement y hacer appendChild al div de clase "box"

        let box = document.createElement('div');
        box.classList.add ("box")
    
        let h1 = document.createElement('h1');
        h1.textContent = element.name;
        box.appendChild(h1)

        let p = document.createElement('p');
        p.textContent = element.username;
        box.appendChild(p)

        container.appendChild(box);
    });
} ) */

const container = document.querySelector(".container")

fetch('https://jsonplaceholder.typicode.com/users/')
    .then(respuesta => respuesta.json())
    .then(datos => {
    datos.forEach(element => {
        let box = document.createElement('div')
        box.classList.add("box");
        container.appendChild(box)

        const title = document.createElement("h1")
        title.innerText = `Name: ${element.name}`
        box.appendChild(title)

        const text = document.createElement("p")
        text.innerText = `Userame: ${element.username}`
        box.appendChild(text)
    });
})