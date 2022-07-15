import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app"

// const element = <h1>Hello World</h1> //! 1

// const Component = () => {  //! 2
// 	return <h1>Hello World</h1>
// }



// reactDom.render(element, document.getElementById('root')) //! 1

// reactDom.render(<Component/>, document.getElementById('root')) //! 2

reactDom.render(<App/>, document.getElementById('root'));