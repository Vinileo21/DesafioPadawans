function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(main) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = main.id
    tdNome.innerHTML = main.name

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return console.log(linha);
}

function main() {
    let data = fazGet("https://jsonplaceholder.typicode.com/posts/1");
    let main = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    main.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()

