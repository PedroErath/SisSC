import React, { useEffect, useState } from "react";

function AddRequest() {
    const [newRequest, setNewRequest] = useState({})
    const [user, setUser] = useState({})

    const handleEdit = (e) => {
        const { name, value } = e.target;

        setNewRequest({ ...newRequest, [name]: value })
        console.log(newRequest)
    }

    useEffect(() => {
        fetch('http://localhost:3001/auth/verifytoken', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('authorization')}`
            }
        })
            .then(response => response.json())
            .then(response => {
                fetch('http://localhost:3001/user/load', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer undefined' },
                    body: JSON.stringify({ id: response.data._id })
                })
                    .then(response => response.json())
                    .then(response => {
                        setUser(response.data)
                        setNewRequest({user: response.data.name, sector: response.data.sector})
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }, [])

    const addRequest = (e) => {

        fetch('http://localhost:3001/request/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRequest)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setNewRequest({})
            })
            .catch(err => console.error(err));
    }


    return (
        <div className="modal fade" id="modalAddRequest" tabIndex="-1" aria-labelledby="modalAddRequestLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-warning">
                    <div className="d-flex align-items-center justify-content-between p-4">
                        <h2 className="modal-title fw-bold" id="modalAddRequestLabel">Novo Chamado</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={e => { addRequest(e) }}>
                            <input className="form-control mb-2" type="text" name="user" value={user.name} placeholder="Usuário" required></input>
                            <input className="form-control mb-2" type="text" name="sector" placeholder="Setor" value={user.sector} required></input>
                            <input onChange={e => handleEdit(e)} className="form-control mb-2" type="text" name="problem" placeholder="Problema" required></input>
                            <textarea onChange={e => handleEdit(e)} className="form-control mb-2" rows="4" type="email" name="description" placeholder="Descrição" required></textarea>
                            <select onChange={e => handleEdit(e)} name="priority" className="form-select mb-2" required>
                                <option selected disabled value="" className="d-none">Prioridade</option>
                                <option value="baixa">Baixa</option>
                                <option value="normal">Normal</option>
                                <option value="urgente">Urgente</option>
                            </select>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Fechar</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRequest;