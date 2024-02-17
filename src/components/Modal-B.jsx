import React, { useState, useEffect } from "react";

const ModalB = () => {
    const [usContacts, setUsContacts] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            "https://contact.mediusware.com/api/country-contacts/United%20States/",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setUsContacts(result.results))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <div
            className="modal fade"
            id="modal-b"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            US Contacts
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
                                {usContacts.map((contact, index) => {
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
                            style={{ backgroundColor: "#46139f", color: "white" }}
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-a"
                        >
                            All Contacts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalB;
