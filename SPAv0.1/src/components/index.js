import React, {Component, Fragment} from "react";
import Header from '../includes/header/header'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./../pages/main/index";
import CatalogPage from "./../pages/catalog/index";
import NewsPage from "./../pages/news/index";
import NotFound from "./../pages/404/index";
import NewsItemPage from "./../pages/news/itemInfo";
import ContactsPage from "./../pages/contacts/index";

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    // f3b3675c-c7bf-453e-ab4b-c70537a72ccd

    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/catalog" component={CatalogPage}/>
                        <Route exact path="/news" component={NewsPage}/>
                        <Route exact path="/news/post/:id" component={NewsItemPage}/>
                        <Route exact path="/contacts" component={ContactsPage}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
