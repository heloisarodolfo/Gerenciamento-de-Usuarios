let usuarios = []

const addUsuario = () => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    if (localStorage.getItem('usuarios') != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))     
    }
        
    usuarios.push([nome, email, senha])
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    
}

const listUsuarios = () => {
    let tbody = document.getElementById('table-linha')
    if (localStorage.getItem('usuarios') != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach(usuario => {
            tbody.innerHTML += "<tr> <td>"+usuario[0]+"</td> <td>"+usuario[1]+"</td> </tr>"
        })
    }else {
        tbody.innerHTML += "<tr> <td>Vazio</td> <td>Vazio</td> </tr>"
    }
}