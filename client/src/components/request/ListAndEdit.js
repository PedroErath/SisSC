import React, { useEffect, useState } from "react";

function ListRequest(props) {

    const [requests, setRequests] = useState([]);
    const [requestUpdated, setRequestUpdated] = useState({status:"aberto"})

    useEffect(() => {
        fetch('http://localhost:3001/request/all')
            .then(response => response.json())
            .then(response => setRequests(response.data))
            .catch(err => console.error(err));
    }, [])

    const ajustedDate = (date) => {
        let dateAjusted = new Date(date);
        dateAjusted = dateAjusted.toLocaleDateString() + " - " + dateAjusted.toLocaleTimeString();
        return dateAjusted
    }

    const handlePriority = (priority) => {
        if (priority === 'urgente') {
            return (
                <h4 className="card-title fw-bold text-danger text-uppercase">{priority}</h4>
            )
        } else if (priority === 'normal') {
            return (
                <h4 className="card-title fw-bold text-warning text-uppercase">{priority}</h4>
            )
        } else {
            return (
                <h4 className="card-title fw-bold text-uppercase">{priority}</h4>
            )
        }
    }

    const handleEditRequest = (e) => {
        const { name, value } = e.target;

        setRequestUpdated({ ...requestUpdated, [name]: value })
        console.log(requestUpdated)
    }

    const editRequest = (e, id) => {
        e.preventDefault()

        fetch('http://localhost:3001/request/edit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id:id,
                answer: requestUpdated.answer,
                status: requestUpdated.status
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    /*     if (props.page === 'abertos') { */
    return (
        <div className="container">
            {requests.map((request, index) => {
                if (request.status === props.page) {
                    return (
                        <div key={index} id={request._id} className="card my-2" >
                            <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                                <div className="col-md-9 text-center text-md-start">
                                    <h4 className="card-title fw-bold">{request.user} - {request.sector}</h4>
                                    <h5 className="card-subtitle mb-2">{request.problem}</h5>
                                    <p className="card-text">{request.description}</p>
                                </div>
                                <div className="d-flex flex-column text-center justify-content-center mt-2">
                                    <h4 className="card-title fw-bold">{ajustedDate(request.date)}</h4>
                                    {handlePriority(request.priority)}
                                    <button className="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target={`#modalEditRequest${request._id}`}>Ver Mais</button>
                                </div>
                            </div>
                            {/* ---------------Modal ------------*/}
                            <div className="modal modal-lg fade" id={`modalEditRequest${request._id}`} tabIndex="-1" aria-labelledby="modalEditRequestLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content bg-warning">
                                        <div className="d-flex align-items-center justify-content-between p-4">
                                            <h2 className="modal-title fw-bold" id="modalEditRequestLabel">Chamado</h2>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                                                <div className="col-md-8 text-center text-md-start">
                                                    <h4 className="card-title fw-bold">{request.user} - {request.sector}</h4>
                                                    <h5 className="card-subtitle mb-2">{request.problem}</h5>
                                                    <p className="card-text">{request.description}</p>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <h4 className="card-title fw-bold">{ajustedDate(request.date)}</h4>
                                                    {handlePriority(request.priority)}
                                                </div>
                                            </div>
                                            <form onSubmit={e => editRequest(e, request._id)}>
                                                <div className="d-flex flex-column flex-md-row justify-content-between">
                                                    <div className="col-md-6">
                                                        <textarea onChange={e => handleEditRequest(e)} className="form-control mb-2" type="text" rows="3" name="answer" placeholder="Respostas" defaultValue={request.answer}></textarea>
                                                        <select onChange={e => handleEditRequest(e)} name="status" className="form-select mb-2" defaultValue={request.status} required>
                                                            <option selected disabled value="" className="d-none">Status</option>
                                                            <option  value="aberto">Aberto</option>
                                                            <option value="pendente">Pendente</option>
                                                            <option value="finalizado">Finalizado</option>
                                                        </select>
                                                    </div>
                                                    <div className="d-flex align-items-end justify-content-center">
                                                        <button type="submit" className="btn btn-primary">Salvar</button>
                                                        <button type="button " className="btn btn-danger ms-2">Excluir</button>
                                                        <button type="button" className="btn btn-secondary ms-2" data-bs-dismiss="modal">Fechar</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default ListRequest