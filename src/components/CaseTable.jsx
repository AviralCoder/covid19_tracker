import React from "react";
import { Table } from "react-bootstrap";

const CaseTable = ({ data }) => {
    const prop = [...data];

    return (
        <React.Fragment>
            <div className="overflow">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Cases</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prop.map((elem) => (
                            <tr key={elem.country}>
                                <td>{elem.country}</td>
                                <td>{elem.cases}</td>
                                <td>{elem.deaths}</td>
                                <td>{elem.recovered}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    );
};

export default CaseTable;
