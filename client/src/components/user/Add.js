import React, { useState } from "react";

function AddUser() {

    const [newUser, setNewUser] = useState({})

    const handleEdit = (e) => {
        const { name, value } = e.target;

        setNewUser({ ...newUser, [name]: value })
        console.log(newUser)
    }

    const addUser = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/user/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setNewUser({})
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="modal fade" id="modalAddUser" tabIndex="-1" aria-labelledby="modalAddUserLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-warning">
                    <div className="d-flex align-items-center justify-content-between p-4">
                        <h2 className="modal-title fw-bold" id="modalAddUserLabel">Cadastre-se</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={e => addUser(e)}>
                            <input onChange={e => handleEdit(e)} className="form-control mb-2" type="text" name="name" placeholder="Nome" required></input>
                            <input onChange={e => handleEdit(e)} className="form-control mb-2" type="email" name="email" placeholder="Email" required></input>
                            <select onChange={e => handleEdit(e)} name="sector" className="form-select mb-2" required>
                                <option selected disabled value="" className="d-none">Setor</option>
                                <option value="ti">TI</option>
                                <option value="juridico">Juridico</option>
                                <option value="financeiro">Financeiro</option>
                            </select>
                            <input onChange={e => handleEdit(e)} className="form-control mb-2" type="password" name="password" placeholder="Senha" required></input>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary me-2" data-bs-dismiss="modal">Cadastrar</button>
                                <button type="button" className="btn btn-secondary " data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser;