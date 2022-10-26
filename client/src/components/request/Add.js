import React from "react";

function AddRequest() {
    return (
        <div class="modal fade" id="modalAddRequest" tabindex="-1" aria-labelledby="modalAddRequestLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-warning">
                    <div class="d-flex align-items-center justify-content-between p-4">
                        <h2 class="modal-title fw-bold" id="modalAddRequestLabel">Novo Chamado</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <input className="form-control mb-2" type="text" name="problem" placeholder="Problema" required></input>
                            <textarea className="form-control mb-2" rows="4" type="email" name="description" placeholder="Descrição" required></textarea>
                            <select className="form-select mb-2" required>
                                <option selected disabled value="" className="d-none">Prioridade</option>
                                <option value="baixa">Baixa</option>
                                <option value="normal">Normal</option>
                                <option value="urgente">Urgente</option>
                            </select>
                            <div class="d-flex justify-content-center">
                                <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Fechar</button>
                                <button class="btn btn-primary">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRequest;