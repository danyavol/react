import React ,{Fragment,Component} from "react";
import {Card,  CardText, CardBody} from 'reactstrap';
import { Link } from "react-router-dom";

export default class listItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      comms: undefined
    }
  }


  render(){
    let {item} = this.props;
    return(
      <Fragment>
          <Card className={"news_item"} >
            <CardBody>
              <p>{item.id}</p>
              <p><Link to={`/news/post/${item.id}`}>{item.title}</Link></p>
              <p>{item.body}</p>
              <p>{this.state.comms != undefined ? this.state.comms.length+' комментариев' : null}</p>
            </CardBody>
          </Card>

      </Fragment>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.comments !== prevProps.comments && this.state.comments === undefined) {
      this.setState({comms: this.props.comments.filter((elem, i)=>elem.postId === this.props.item.id)});
    }
  }

  componentDidMount() {
    if (this.props.comments !== undefined) {
      this.setState({comms: this.props.comments.filter((elem, i)=>elem.postId === this.props.item.id)});
    }
  }

}
