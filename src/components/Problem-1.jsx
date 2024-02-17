import React, { useState } from "react";

const Problem1 = () => {
    const [show, setShow] = useState("all");

    const [todos, setTodos] = useState([
        { name: "Learn java", status: "pending", priority: 3 },
        { name: "learn python", status: "completed", priority: 2 },
        { name: "Make a list", status: "active", priority: 1 },
        { name: "Do 10 maths", status: "archive", priority: 3 },
    ]);

    const sortTodos = () =>
        todos.sort((a, b) => {
            return a.priority - b.priority;
        });

    const [filteredTodos, setFilteredTodos] = useState(sortTodos());

    const handleClick = (val) => {
        setShow(val);
        if (val === "all") {
            setFilteredTodos(sortTodos());
        } else {
            setFilteredTodos(todos.filter((todo) => todo.status === val));
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
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
                                onChange={(event) => setNewTodo({ name: event.target.value })}
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                onChange={(event) => setNewTodo({ status: event.target.value })}
                                type="text"
                                className="form-control"
                                placeholder="Status"
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
                            {filteredTodos.length &&
                                filteredTodos.map((todo, index) => {
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
