const inputUser= document.querySelector("#log-usuario")
const inputPassword= document.querySelector("#log-senha")
const inputconfirmPassword= document.querySelector("#log-confirmar-senha")
const btnRegister= document.querySelector("#SignInBtn")

const cadastrarUsuario = () => {
    let user = inputUser.value
    let password = inputPassword.value
    let confirmPassword = inputconfirmPassword.value

    if(password == confirmPassword && user.trim() != "") {
        localStorage.setItem("user" , user)
        localStorage.setItem("password" , password)
        window.location.href = '../../index.html'
        alert("Cadastro finalizado com sucesso!")
        return;
    }
    alert("Falha no cadastro!")
}

btnRegister.addEventListener("click", cadastrarUsuario)