import React from "react";
import Paper from "@material-ui/core/Paper";

const CaseType = ({ background, type, added, cases }) => {
    return (
        <Paper elevation={5} className="paper" style={{ background }}>
            <p className="type">{type}</p>
            <p className="added">{added === "-" ? "-" : `+${added}`}</p>
            <p className="cases">{cases}</p>
        </Paper>
    );
};

export default CaseType;
