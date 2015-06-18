require("babel/polyfill");
require("../assets/stylesheets/style.less");

// third party css 

// TODO: Require assets here.
// require("../assets/images/product.png");

import React from "react";
import App from "./components/FaqApp.jsx";

React.render(<App />, document.getElementById("faq"));


