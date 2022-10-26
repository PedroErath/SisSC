import React from "react";
import EditRequest from "./Edit";

function ListRequest() {
    return (
        <div className="container mt-5">
            <div className="card mb-3" >
                <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-9 text-center text-md-start">
                        <h4 className="card-title fw-bold">Pedro - TI</h4>
                        <h5 className="card-subtitle mb-2">Impressora</h5>
                        <p className="card-text">Não está imprimindo</p>
                    </div>
                    <div className="d-flex flex-column text-center justify-content-center mt-2">
                        <h4 className="card-title fw-bold">26/10/2022 - 09:45</h4>
                        <h4 className="card-title fw-bold text-danger">Urgente</h4>
                        <button className="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#modalEditRequest">Ver Mais</button>
                    </div>
                </div>
            </div>
            <div className="card mb-3" >
                <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-9 text-center text-md-start">
                        <h4 className="card-title fw-bold">Pedro - TI</h4>
                        <h5 className="card-subtitle mb-2">Impressora</h5>
                        <p className="card-text">Não está imprimindo</p>
                        <div className="d-flex">
                            <h6 className="me-1">Resposta:</h6>
                            <h6 className="fw-normal">Foi trocado o toner</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-column text-center justify-content-center mt-2">
                        <h4 className="card-title fw-bold">26/10/2022 - 09:45</h4>
                        <h4 className="card-title fw-bold text-danger">Urgente</h4>
                        <button className="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#modalEditRequest">Ver Mais</button>
                    </div>
                </div>
            </div>
            <EditRequest></EditRequest>
        </div>
    )
}

export default ListRequest
