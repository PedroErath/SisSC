import React, { useState } from "react";
import AddUser from "./user/Add";

function Login() {

    const [user, setUser] = useState({})

    const handleEdit = (e) => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value })
        console.log(user)
    }

    const login = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(response => {
                if(response.success){
                    localStorage.setItem('authorization', response.token)
                    window.location.assign("http://localhost:3000/home");
                }else{
                    showError(response.message)
                }
                /* response.success ? localStorage.setItem('authorization', response.token) : showError(response.message) */
            })
            .catch(err => console.error(err));
    }

    const showError = (msg) => {
        const alertError = document.getElementById('error')
        const  error = `<div class='alert alert-danger' role='alert'> ${ msg }</div>`
        
        alertError.innerHTML = error;        
    }

return (
    <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="p-5 col-md-4 bg-warning text-center rounded">
            <h1 className="fw-bold">SisSC</h1>
            <h4 className="mb-4">Login</h4>
            <form onSubmit={e => login(e)} className="d-flex flex-column mb-3">
                <input onChange={e => handleEdit(e)} className="form-control mb-2" type="email" name="email" placeholder="Email" required ></input>
                <input onChange={e => handleEdit(e)} className="form-control mb-2" type="password" name="password" placeholder="Senha" required minLength="6"></input>
                <div id="error"></div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary me-2">Entrar</button>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAddUser">Cadastre-se</button>
                </div>
            </form>
            <a href="/pwdrecovery">Esqueceu sua senha?</a>
        </div>
        <AddUser />
    </div>
)
}

export default Login;