import React from "react";
import ReactDOM from "react-dom/client"; 


// React Element
// const parent = React.createElement(
//     "h1",
//     {},
//     "Hello, world!"
// )

// const parentjsx = <h1 id="heading" className="head">Hello, World</h1>

// Functional React Component
// const HeadingComponent = () => {
//     return <h1>Namaste React</h1>;
// }

// const HeadingComponent1 = () => <h1>Namaste React</h1>;

const Title = () => (
    <h1>HEllo</h1>
);

const HeadingComponent = () => (
    <div>
        <h1>Heading</h1>
        <Title />
    </div>
)


const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<HeadingComponent/>);