import React, { useState } from 'react'

function PwdRecovery() {

    const [user, setUser] = useState({})
    const [selectedUser, setSelectedUser] = useState(false)

    const handleEdit = (e) => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value })
        console.log(user)
    }

    const findByEmail = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/user/pwdrecovery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(response => {
                setUser(response.data)
                setSelectedUser(response.success)
            })
            .catch(err => console.error(err));
    }

    const pwdRecovery = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/user/edit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: user._id,
                password: user.password
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    setSelectedUser(false)
                    setUser({})
                    window.location.assign("http://localhost:3000");
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="p-5 col-md-4 bg-warning text-center rounded">
                <h1 className="fw-bold">SisSC</h1>
                <h4 className="mb-4">Recuperação de senha</h4>
                {!selectedUser ?
                    <form onSubmit={e => findByEmail(e)} className="d-flex flex-column mb-3">
                        <input onChange={e => handleEdit(e)} className="form-control mb-2" type="email" name="email" placeholder="Email" required ></input>
                        <div id="error"></div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary me-2">Enviar</button>
                        </div>
                    </form>
                    : <form onSubmit={e => pwdRecovery(e)} className="d-flex flex-column mb-3">
                        <input className="form-control mb-2" type="email" name="email" placeholder="Email" value={user.email} required ></input>
                        <input onChange={e => handleEdit(e)} className="form-control mb-2" type="password" name="password" placeholder="Senha" required minLength="6"></input>
                        <div id="error"></div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary me-2">Alterar</button>
                        </div>
                    </form>}
            </div>
        </div>
    )

}

export default PwdRecovery;