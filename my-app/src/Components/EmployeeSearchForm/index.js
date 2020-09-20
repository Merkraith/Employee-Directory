import React from "react";
import '../../App.css';

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group input">
                <label htmlFor="employee">Avenger Name: </label>
                <input
                onChange={props.handleInputChange}
                value={props.search}
                name="employee"
                list="employees"
                type="text"
                className="form-control"
                placeholder="Type in an Avenger name"
                id="search"
                />
                <datalist id="employees">
                    {props.employees.map(employee => (
                        <option value={employee} key={employee} />
                    ))}
                </datalist>
            </div>
        </form>
    )
}

export default SearchForm;