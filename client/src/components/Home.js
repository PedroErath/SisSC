import React from "react";
import ListRequest from "./request/List";
import ListUser from "./user/List";
import AddRequest from "./request/Add";

function Home() {
    return (
        <div className="text-center mt-3 container">
            <h1 className="fw-bold display-1">SisSC</h1>
            <h3>Ordem dos Chamados</h3>
            <div className="">
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="d-flex justify-content-center justify-content-md-start">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item me-1" role="presentation">
                                <button className="nav-link active" id="pills-open-request-tab" data-bs-toggle="pill" data-bs-target="#pills-open-request" type="button" role="tab" aria-controls="pills-open-request" aria-selected="true">Abertos</button>
                            </li>
                            <li className="nav-item me-1" role="presentation">
                                <button className="nav-link" id="pills-pending-request-tab" data-bs-toggle="pill" data-bs-target="#pills-pending-request" type="button" role="tab" aria-controls="pills-pending-request" aria-selected="false">Pendentes</button>
                            </li>
                            <li className="nav-item me-1" role="presentation">
                                <button className="nav-link" id="pills-finished-request-tab" data-bs-toggle="pill" data-bs-target="#pills-finished-request" type="button" role="tab" aria-controls="pills-finished-request" aria-selected="false">Finalizados</button>
                            </li>
                            <li className="nav-item me-1" role="presentation">
                                <button className="nav-link" id="pills-user-tab" data-bs-toggle="pill" data-bs-target="#pills-user" type="button" role="tab" aria-controls="pills-user" aria-selected="false">Usuários</button>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-2">
                        <button type="button" className="btn btn-success me-2" data-bs-toggle="modal" data-bs-target="#modalAddRequest" >Novo Chamado</button>
                        <button className="btn btn-danger" >Sair</button>
                    </div>
                    <AddRequest></AddRequest>
                </div>
                <div className='tab-content bg-warning p-3 rounded' id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-open-request" role="tabpanel" aria-labelledby="pills-open-request-tab" ><ListRequest></ListRequest></div>
                    <div className="tab-pane fade" id="pills-pending-request" role="tabpanel" aria-labelledby="pills-pending-request-tab"></div>
                    <div className="tab-pane fade" id="pills-finished-request" role="tabpanel" aria-labelledby="pills-finished-request-tab"></div>
                    <div className="tab-pane fade" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab"><ListUser></ListUser></div>
                </div>
            </div>
        </div>
    )
}

export default Home;