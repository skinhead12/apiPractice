//usando promesas .then .catch
let characters = document.querySelector("#characters");

fetch("https://rickandmortyapi.com/api/character")
//capturar la informacion y pasarla a json
.then(res => res.json())
//data es la informacion que ya esta en el archivo json
//hacemos un callback para ingresar al array donde estan los personajes
.then((data) => {
    console.log(data.results);

    data.results.map((item)=> {
        const content = document.createElement("div")
        content.innerHTML = 
        `
        <h4>${item.name}</h4>
        <img src="${item.image}" />
        `;
        characters.append(content);
    });
});