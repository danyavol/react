import React, {Fragment, Component} from "react";
import {Nav, NavItem} from 'reactstrap';
import {Link} from "react-router-dom";
import './style.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={"header"}>
                <div className={"header_logo"}><Link to="/"></Link></div>
                <Nav className={"header_nav"}>
                    <NavItem>
                        <Link to="/">Главная</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/catalog">Каталог</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/news">Новости</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about">О нас</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contacts">Контакты</Link>
                    </NavItem>
                </Nav>
            </header>
        )
    }
}
