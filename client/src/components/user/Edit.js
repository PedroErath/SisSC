import React from "react";

function EditUser() {
    return (
        <div className="modal fade" id="modalEditUser" tabIndex="-1" aria-labelledby="modalEditUserLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-warning">
                    <div className="d-flex align-items-center justify-content-between p-4">
                        <h2 className="modal-title fw-bold" id="modalEditUserLabel">Usuario</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <input className="form-control mb-2" type="text" name="name" placeholder="Nome" defaultValue="Pedro" required></input>
                            <input className="form-control mb-2" type="email" name="email" placeholder="Email" defaultValue="ped@blabla.com" required></input>
                            <select className="form-select mb-2" defaultValue="ti" required>
                                <option selected disabled value="" className="d-none">Setor</option>
                                <option value="ti">TI</option>
                                <option value="juridico">Juridico</option>
                                <option value="financeiro">Financeiro</option>
                            </select>
                            <select className="form-select mb-2" defaultValue="true" required>
                                <option selected disabled value="" className="d-none">Permissão</option>
                                <option value="true">Admin</option>
                                <option value="false">Normal</option>
                            </select>
                                <div className="d-flex align-items-end justify-content-center">
                                    <button className="btn btn-primary">Salvar</button>
                                    <button type="button" className="btn btn-danger ms-2">Excluir</button>
                                    <button type="button" className="btn btn-secondary ms-2" data-bs-dismiss="modal">Fechar</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser;