import React from "react";

const Grid = ({ children, columns }) => {
    return (
        <div
            className="grid"
            style={{ gridTemplateColumns: `repeat(${columns},1fr)` }}
        >
            {children}
        </div>
    );
};

const Flexbox = ({ children }) => {
    return <div className="flexbox">{children}</div>;
};

export { Grid, Flexbox };
