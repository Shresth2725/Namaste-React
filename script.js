/* 
    <div class = "parent">
        <div class = "child">
            <h1 class = "h11">Hello</h1>
            <h1 class = "h12">React</h1>
        </div>
    </div>
*/

const parent = React.createElement(
    "div",
    { className: "parent" },
    React.createElement(
        "div",
        { className: "child"},
        [React.createElement("h1" , { className: "child"} , "Hello"),
            React.createElement("h1" , { className: "child"} , "React")]
    )
)

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);