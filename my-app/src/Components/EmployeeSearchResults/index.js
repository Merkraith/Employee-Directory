import React from "react";
import '../../App.css';



function EmployeeSearchResults(props) {

    return (
        <div>
            <table className="list-group search-results">
                <thead>
                    <tr>
                        <th style={{ width: "25%", height: "50%" }}>Profile Pic</th>
                        <th style={{ width: "50%", height: "50%" }}><button className="btn btn-success" type="submit" onClick={() => props.onSort("asc")}>Ascending</button></th>
                        <th style={{ width: "50%", height: "50%" }}><button className="btn btn-success" type="submit" onClick={() => props.onSort("desc")}>Descending</button></th>

                    </tr>
                </thead>
                {props.employees.map(employee => (
                    <tbody key={employee} className="list-group-item">
                        
                            <tr>
                                <h1>{employee.name.super} </h1>
                            </tr>
                            <tr> <img alt="employee-pic" src={employee.picture.medium} className="img-fluid" /></tr>
                            <tr>
                                <h2>{employee.name.first}  {employee.name.last}</h2>
                            </tr>
                        
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default EmployeeSearchResults;
