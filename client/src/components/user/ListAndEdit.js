import React, { useState, useEffect } from "react";

function ListUser() {

    const [users, setUsers] = useState([])
    const [docUpdated, setDocUpdate] = useState({})
    const [responseFetchEdit, setResponseFetchEdit] = useState({})

    useEffect(() => {
        fetch('http://localhost:3001/user/list')
            .then(response => response.json())
            .then(response => setUsers(response.data))
            .catch(err => console.error(err));
    }, [responseFetchEdit])

    const ajustedDate = (date) => {
        let dateAjusted = new Date(date);
        dateAjusted = dateAjusted.toLocaleDateString() + " - " + dateAjusted.toLocaleTimeString();
        return dateAjusted
    }

    const handleEdit = (e) => {
        const { name, value } = e.target;

        setDocUpdate({ ...docUpdated, [name]: value })
        console.log(docUpdated)
    }

    const Edit = (e, id) => {
        e.preventDefault()

        fetch('http://localhost:3001/user/edit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                name: docUpdated.name,
                email: docUpdated.email,
                sector: docUpdated.sector,
                admin: docUpdated.admin
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setResponseFetchEdit(response)
                setDocUpdate({})
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="container">
            {users.map((user, index) => {
                return (
                    < div key={index} id={user._id} className="card my-2" >
                        <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                            <div className="col-md-9 text-center text-md-start">
                                <h4 className="card-title fw-bold">{user.name} - {user.sector}</h4>
                                <h5 className="card-subtitle mb-2">{user.admin ? "Admin" : "Normal"}</h5>
                                <p className="card-text">{user.email}</p>
                            </div>
                            <div className="d-flex flex-column text-center justify-content-center mt-2">
                                <h4 className="card-title fw-bold">{ajustedDate(user.createdAt)}</h4>
                                <button className="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target={`#modalEditRequest${user._id}`}>Ver Mais</button>
                            </div>
                        </div>
                        {/* ---------Modal---------------- */}
                        <div className="modal fade" id={`modalEditRequest${user._id}`} tabIndex="-1" aria-labelledby="modalEditUserLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content bg-warning">
                                    <div className="d-flex align-items-center justify-content-between p-4">
                                        <h2 className="modal-title fw-bold" id="modalEditUserLabel">Usuario</h2>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={e => Edit(e, user._id)}>
                                            <input onChange={e => handleEdit(e)} className="form-control mb-2" type="text" name="name" placeholder="Nome" defaultValue={user.name} required></input>
                                            <input onChange={e => handleEdit(e)} className="form-control mb-2" type="email" name="email" placeholder="Email" defaultValue={user.email} required></input>
                                            <select onChange={e => handleEdit(e)} className="form-select mb-2" name="sector" defaultValue={user.sector} required>
                                                <option selected disabled value="" className="d-none">Setor</option>
                                                <option value="ti">TI</option>
                                                <option value="juridico">Juridico</option>
                                                <option value="financeiro">Financeiro</option>
                                            </select>
                                            <select onChange={e => handleEdit(e)} className="form-select mb-2" name="admin" defaultValue={user.admin} required>
                                                <option selected disabled value="" className="d-none">Permissão</option>
                                                <option value="true">Admin</option>
                                                <option value="false">Normal</option>
                                            </select>
                                            <div className="d-flex align-items-end justify-content-center">
                                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Salvar</button>
                                                <button type="button" className="btn btn-danger ms-2">Excluir</button>
                                                <button type="button" className="btn btn-secondary ms-2" data-bs-dismiss="modal">Fechar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default ListUser;