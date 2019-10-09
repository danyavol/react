import React, {Fragment, Component} from "react";
import {Card, CardText, CardBody} from 'reactstrap';
import {Link} from "react-router-dom";
import ListItem from "./listItem";
import Pagination from '../../components/pagination/pagination';
import {Form, Input} from 'reactstrap';
import { Ellipsis } from 'react-spinners-css';
import '../../style/style.scss';
import './style.scss';

export default class NewsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemsOutput: [],
            showPageSize: 10
        }
    }


    render() {
        return (
            <Fragment>

                <div className={"wrapper"}>
                    <h1>{"NewsPage"}</h1>
                    <div className={'paginat'}>
                        <Pagination items={this.state.items} pageSize={this.state.showPageSize} onChangePage={this.togglePage}/>
                        <Form className={'pagination_input'}>
                            <Input type="select" name="select" onInput={(e)=>this.changePageSize(e)}>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                                <option value={0}>Все</option>
                            </Input>
                        </Form>
                    </div>
                    {
                        this.state.itemsOutput.map((item, i) =>
                            <ListItem key={i} item={item} comments={this.state.comments}/>
                        )
                    }
                </div>
            </Fragment>
        )
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json())
            .then(items => this.setState({
                items: [...items]
            }));
        fetch("https://jsonplaceholder.typicode.com/comments").then(data => data.json())
            .then(items => this.setState({
                comments: [...items]
            }));
    }

    togglePage = (page) => {
        this.setState({itemsOutput: page});
    }

    changePageSize = (e) => {
        this.setState({showPageSize: +e.target.value});

    }


}
