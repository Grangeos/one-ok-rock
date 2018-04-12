import React, { Component } from 'react';
import oorLogo from "../../photo/oneokrock.logo.png";

class Header extends Component {
    render() {
        return (
            <header>
                <img src={oorLogo} />
                <ul className="listeHeader">
                    <li>
                        <a href="#">Actu</a>
                    </li>
                    <li>
                        <a href="#">Picture</a>
                    </li>
                    <li>
                        <a href="#">Live</a>
                    </li>
                    <li>
                        <a href="#">Members</a>
                    </li>
                </ul>
            </header>

        );
    }
}

export default Header;
