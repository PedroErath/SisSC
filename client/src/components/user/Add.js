import React from "react";

function AddUser() {
    return (
        <div className="modal fade" id="modalAddUser" tabIndex="-1" aria-labelledby="modalAddUserLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-warning">
                    <div className="d-flex align-items-center justify-content-between p-4">
                        <h2 className="modal-title fw-bold" id="modalAddUserLabel">Cadastre-se</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <input className="form-control mb-2" type="text" name="name" placeholder="Nome" required></input>
                            <input className="form-control mb-2" type="email" name="email" placeholder="Email" required></input>
                            <select className="form-select mb-2" required>
                                <option selected disabled value="" className="d-none">Setor</option>
                                <option value="ti">TI</option>
                                <option value="juridico">Juridico</option>
                                <option value="financeiro">Financeiro</option>
                            </select>
                            <input className="form-control mb-2" type="password" name="password" placeholder="Senha" required></input>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Fechar</button>
                                <button className="btn btn-primary">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser;