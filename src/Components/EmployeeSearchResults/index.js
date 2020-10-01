import React from "react";
import '../../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


function EmployeeSearchResults(props) {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <thead>
                    <tr>
                        <th style={{ width: "25%", height: "50%" }}>Profile Pic</th>
                        <th style={{ width: "50%", height: "50%" }}><button className="btn btn-success" type="submit" onClick={() => props.onSort("asc")}>Ascending</button></th>
                        <th style={{ width: "50%", height: "50%" }}><button className="btn btn-success" type="submit" onClick={() => props.onSort("desc")}>Descending</button></th>
                    </tr>
                </thead>
            </Row>
            <Row className="justify-content-md-center">
                {props.employees.map(employee => (
                    <div>
                        <Row xs={10} md={10} >
                            <Col xs={6} md={6}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" alt="employee-pic" src={employee.picture.medium} />
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>{employee.name.first}  {employee.name.last}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{employee.name.super}</Card.Subtitle>
                                        <Card.Text>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                ))}
            </Row>
        </Container>
    );
}

export default EmployeeSearchResults;

// function EmployeeSearchResults(props) {

//     return (
//         <div>
//             <table className="list-group search-results">
//                 <thead>
//                     <tr>
//                         <th style={{ width: "25%", height: "50%" }}>Profile Pic</th>
//                         <th style={{ width: "50%", height: "50%" }}><button className="btn btn-success" type="submit" onClick={() => props.onSort("asc")}>Ascending</button></th>
//                         <th style={{ width: "50%", height: "50%" }}><button className="btn btn-success" type="submit" onClick={() => props.onSort("desc")}>Descending</button></th>
//                     </tr>
//                 </thead>
//                 {props.employees.map(employee => (
//                     <tbody key={employee} className="list-group-item">
//                         <tr>
//                             <h2>{employee.name.first}  {employee.name.last}</h2>
//                         </tr>
//                         <tr> <img alt="employee-pic" src={employee.picture.medium} className="img-fluid" /></tr>
//                         <tr>
//                             <h1>{employee.name.super} </h1>
//                         </tr>
//                     </tbody>
//                 ))}
//             </table>
//         </div>
//     );
// }

// export default EmployeeSearchResults;
