import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <h1>Header</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
