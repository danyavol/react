import React ,{Fragment,Component} from "react";
import {Card,  CardText, CardBody} from 'reactstrap';
import { Link } from "react-router-dom";
import { Ellipsis } from 'react-spinners-css';
import '../../style/style.scss';
import Likes from "../../components/likes/index";
import { Button } from 'reactstrap';

export default class NewsItemPage extends Component{
  constructor(props){
    super(props);
    this.state= {
      info: undefined,
        comments: undefined
    }
  }


  render(){

    return(
      <div className={'wrapper'}>
        <Link className={'news_item_button'} to={"/news/"}>К списку </Link>
          { this.state.info!=undefined ?
            <Card>
              <CardBody>
                <p className={'news-title'}>{this.state.info.title}</p>
                <p>{this.state.info.body}</p>
              </CardBody>
            </Card>
            :<div className={"spinner"}><Ellipsis className={"spinner"} color={"#4A90E2"} /></div>

          }
          {
            this.state.comments!=undefined ?
                <Card className={"comments"}>
                  <CardBody>
                  {
                    this.state.comments.map((item,i)=>

                        <div className={'news_item_comments'} key={i}>
                          <div className={'comment-author'}>{"#"+item.id}<span>{item.email}</span></div>
                          <div className={'comment-title'}>{item.name}</div>
                          <div>{item.body}</div>
                          <Likes comment={item} changeVote={(obj)=>this.changeVote(obj,item)}/>
                        </div>)
                  }
                  </CardBody>
                </Card>
                :<div className={"spinner"}><Ellipsis className={"spinner"} color={"#4A90E2"} /></div>
          }


      </div>
    )
  }

  randomInteger = (min, max) => {
    // случайное число от min до (max)
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }

  changeVote = (obj,item) => {
    let newItem = JSON.parse(JSON.stringify(item));
    newItem.likes += obj.likes;
    newItem.dislikes += obj.dislikes;
    console.log(newItem);
    //this.setState({comments: })
  }


  componentDidMount (){
    let id = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(data=>data.json())
            .then(item =>this.setState({
              info: item
            }));
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then(data => data.json())
          .then(item =>
              item.map((elem) => {
                elem.likes = this.randomInteger(0, 300);
                elem.dislikes = this.randomInteger(0, 100);
                return elem;
              })
          )
          .then(comments => this.setState({comments: comments}));
  }
}
