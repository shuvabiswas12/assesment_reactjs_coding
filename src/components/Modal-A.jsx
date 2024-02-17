import React, { useEffect, useState } from "react";

const ModalA = () => {
    const [allContact, setAllContact] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("https://contact.mediusware.com/api/contacts/", requestOptions)
            .then((response) => response.json())
            .then((result) => setAllContact(result.results))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <div
            className="modal fade"
            id="modal-a"
            // data-bs-backdrop="static"
            // data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            All Contact
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Phone No.</th>
                                    <th scope="col">Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allContact.map((contact, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{contact.phone}</td>
                                            <td>{contact.country.name}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button
                            style={{ backgroundColor: "#ff7f50", color: "white" }}
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-b"
                        >
                            US Contacts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalA;
