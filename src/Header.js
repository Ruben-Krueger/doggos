import React, { PureComponent } from "react";
import "./header.css";
import logo from './logo.png';

export default class Header extends PureComponent {
    render() {
        return (
            <header className="component-header">
            <div className = "row">

            <img src={logo} className="App-logo" alt="logo" width="100" height="100" />
            <h1>Doggos</h1>

            </div>

            </header>
    );
    }
}
