import React from "react";

function Login () {
    return(
        <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
           <div className="p-5 col-md-4 bg-warning text-center rounded">
                <h1 className="fw-bold">SisSC</h1>
                <h4 className="mb-4">Login</h4>
                <form className="d-flex flex-column mb-3">
                    <input className="form-control mb-2" type="email" name="email" placeholder="Email" required ></input>
                    <input className="form-control mb-2" type="password" name="password" placeholder="Senha" required ></input>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary me-2">Entrar</button>
                        <button className="btn btn-primary">Cadastre-se</button>
                    </div>
                </form>
                <a href="?">Esqueceu sua senha?</a>
           </div>
        </div>
    )
}

export default Login;