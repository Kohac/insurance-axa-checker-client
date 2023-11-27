import React from "react";

const CheckListModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`modal ${isOpen ? "show" : ""}`}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center">Kontrolní soupisky</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div
            className="modal-body"
            style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}
          >
            <table className="table table-light table-hover">
              <thead style={{ position: "sticky", top: "0", zIndex: "50" }}>
                <tr className="table-dark">
                  <th scope="col">Type</th>
                  <th scope="col">Column heading</th>
                  <th scope="col">Column heading</th>
                  <th scope="col">Column heading</th>
                  <th scope="col">Column heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" class="btn btn-danger btn-sm">
                        Zneplatnit
                      </button>
                      <button type="button" class="btn btn-success btn-sm">
                        Obnovit
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckListModal;
