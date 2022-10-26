import React from "react";
import EditUser from "./Edit";

function ListUser() {
    return (
        <div className="container">
            <div className="card my-2" >
                <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-9 text-center text-md-start">
                        <h4 className="card-title fw-bold">Pedro - TI</h4>
                        <h5 className="card-subtitle mb-2">Admin</h5>
                        <p className="card-text">ped@blabla.com</p>
                    </div>
                    <div className="d-flex flex-column text-center justify-content-center mt-2">
                        <h4 className="card-title fw-bold">26/10/2022 - 09:45</h4>
                        <button className="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#modalEditUser">Ver Mais</button>
                    </div>
                </div>
            </div>
            <div className="card my-2" >
                <div className="card-body d-flex flex-column flex-md-row justify-content-between">
                    <div className="col-md-9 text-center text-md-start">
                        <h4 className="card-title fw-bold">Carlos - Juridico</h4>
                        <h5 className="card-subtitle mb-2"></h5>
                        <p className="card-text">carlos@blabla.com</p>
                    </div>
                    <div className="d-flex flex-column text-center justify-content-center mt-2">
                        <h4 className="card-title fw-bold">26/10/2022 - 09:45</h4>
                        <button className="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#modalEditUser">Ver Mais</button>
                    </div>
                </div>
            </div>
            <EditUser></EditUser>
        </div>
    )
}

export default ListUser;