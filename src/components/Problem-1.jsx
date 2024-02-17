import React, { useState } from "react";

var todos = [];

const Problem1 = () => {
    const [show, setShow] = useState("all");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const sortTodos = (t) =>
        t.sort((a, b) => {
            return a.priority - b.priority;
        });

    const [filteredTodos, setFilteredTodos] = useState([]);

    const handleClick = (val) => {
        setShow(val);
        if (val === "all") {
            setFilteredTodos(sortTodos(todos));
        } else {
            setFilteredTodos(todos.filter((todo) => todo.status === val));
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        var priority = 3;

        if (status === "active") priority = 1;
        else if (status === "completed") priority = 2;

        const newTodo = {
            name: name,
            status: status,
            priority: priority,
        };
        todos.push(newTodo);
        todos = sortTodos(todos);

        setFilteredTodos(todos);
        setName("");
        setStatus("");
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form
                        onSubmit={handleFormSubmit}
                        className="row gy-2 gx-3 align-items-center mb-4"
                    >
                        <div className="col-auto">
                            <input
                                onChange={(event) => setName(event.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={name}
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                onChange={(event) => setStatus(event.target.value.toLowerCase())}
                                type="text"
                                className="form-control"
                                placeholder="Status"
                                value={status}
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "all" && "active"}`}
                                type="button"
                                onClick={() => handleClick("all")}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "active" && "active"}`}
                                type="button"
                                onClick={() => handleClick("active")}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${show === "completed" && "active"}`}
                                type="button"
                                onClick={() => handleClick("completed")}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTodos.map((todo, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{todo.name}</td>
                                        <td>{todo.status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
