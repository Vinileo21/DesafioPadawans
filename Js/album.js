function fazGet(url) {
    let request = new XMLHttpRequest()
        request.open('GET', url, false)
        request.send()
        return request.responseText
    }
    
    function criaLinha(album) {
        linha = document.createElement("tr");
        tdId = document.createElement("td");
        tdNome = document.createElement("td");
        tdTitle = document.createElement("td");
        tdId.innerHTML = album.userId
        tdNome.innerHTML = album.id
        tdTitle.innerHTML = album.title
    
        
        linha.appendChild(tdId);
        linha.appendChild(tdNome);
        linha.appendChild(tdTitle);
    
        return linha;
    }
    
    function main() {
        let data = fazGet("https://jsonplaceholder.typicode.com/albums");
        let album = JSON.parse(data);
        let tabela = document.getElementById('tabela')
        
        album.forEach(element => {
            let linha = criaLinha(element);
            tabela.appendChild(linha);
            
        });
    
        //Para cada usuario
            // cria uma linha
                // adicionar na tabela
    }
    
    main()