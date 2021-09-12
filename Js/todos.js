function fazGet(url) {
    let request = new XMLHttpRequest()
        request.open('GET', url, false)
        request.send()
        return request.responseText
    }
    
    function criaLinha(todos) {
        linha = document.createElement("tr");
        tdId = document.createElement("td");
        tdNome = document.createElement("td");
        tdTitle = document.createElement("td");
        tdCompleted = document.createElement("td");
        tdId.innerHTML = todos.userId
        tdNome.innerHTML = todos.id
        tdTitle.innerHTML = todos.title
        tdCompleted.innerHTML = todos.completed
    
        
        linha.appendChild(tdId);
        linha.appendChild(tdNome);
        linha.appendChild(tdTitle);
        linha.appendChild(tdCompleted);
    
        return linha;
    }
    
    function main() {
        let data = fazGet("https://jsonplaceholder.typicode.com/todos");
        let todos = JSON.parse(data);
        let tabela = document.getElementById('tabela')
        
        todos.forEach(element => {
            let linha = criaLinha(element);
            tabela.appendChild(linha);
            
        });
    
        //Para cada usuario
            // cria uma linha
                // adicionar na tabela
    }
    
    main()