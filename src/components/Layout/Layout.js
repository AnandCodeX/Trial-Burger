import React from "react";
import "./Layout.css";
import Auxillary from "../../hoc/Auxillary";

const Layout = (props) => (
  <Auxillary>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </Auxillary>
);

export default Layout;

/* import React from "react";
import Auxillary from "../../hoc/Auxillary";
import classes from "./Layout.css";

const Layout = (props) => (
  <Auxillary>
    <div>toolbar, SideDrawer,Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxillary>
);

export default Layout; */
