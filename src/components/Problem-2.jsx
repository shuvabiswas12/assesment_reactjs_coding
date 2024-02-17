import React from "react";
import ModalA from "./Modal-A";
import ModalB from "./Modal-B";

const Problem2 = () => {
    return (
        <div className="container">
            <ModalA />
            <ModalB />

            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        style={{ backgroundColor: "#46139f", color: "white" }}
                        className="btn btn-lg btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-a"
                        type="button"
                    >
                        All Contacts
                    </button>

                    <button
                        style={{ backgroundColor: "#ff7f50", color: "white" }}
                        className="btn btn-lg btn-outline-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-b"
                        type="button"
                    >
                        US Contacts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Problem2;
