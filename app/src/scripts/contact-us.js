require("babel/polyfill");
require("../assets/stylesheets/style.less");

// third party css 
require("../../../app_static/components/react-select/dist/default.css"); 

// TODO: Require assets here.
// require("../assets/images/product.png");

import React from "react";
import App from "./components/ContactUsApp.jsx";

React.render(<App />, document.getElementById("contact-us"));


