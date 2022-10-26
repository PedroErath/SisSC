import React from "react";

function EditRequest() {
    return (
        <div class="modal modal-lg fade" id="modalEditRequest" tabindex="-1" aria-labelledby="modalEditRequestLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-warning">
                    <div class="d-flex align-items-center justify-content-between p-4">
                        <h2 class="modal-title fw-bold" id="modalEditRequestLabel">Chamado</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                            <div className="col-8">
                                <h4 className="card-title fw-bold">Pedro - TI</h4>
                                <h5 className="card-subtitle mb-2">Impressora</h5>
                                <p className="card-text">Não está imprimindo</p>
                            </div>
                            <div className="text-md-center mt-3">
                                <h4 className="card-title fw-bold">26/10/2022 - 09:45</h4>
                                <h4 className="card-title fw-bold text-danger">Urgente</h4>
                            </div>
                        </div>
                        <form>
                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <div className="col-md-6">
                                    <textarea className="form-control mb-2" type="text" rows="3" name="answer" placeholder="Respostas" required></textarea>
                                    <select className="form-select mb-2" required>
                                        <option selected disabled value="" className="d-none">Status</option>
                                        <option value="aberto">Aberto</option>
                                        <option value="pendente">Pendente</option>
                                        <option value="finalizado">Finalizado</option>
                                    </select>
                                </div>
                                <div class="d-flex align-items-end justify-content-center">
                                    <button class="btn btn-primary">Salvar</button>
                                    <button type="button" class="btn btn-danger ms-2">Excluir</button>
                                    <button type="button" class="btn btn-secondary ms-2" data-bs-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditRequest;