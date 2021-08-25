import React from "react";

const Grid = ({ children, columns, style }) => {
    return (
        <div
            className="grid"
            style={
                ({ gridTemplateColumns: `repeat(${columns},1fr)` },
                { ...style })
            }
        >
            {children}
        </div>
    );
};

const Flexbox = ({ children, style }) => {
    return (
        <div className="flexbox" style={style}>
            {children}
        </div>
    );
};

export { Grid, Flexbox };
