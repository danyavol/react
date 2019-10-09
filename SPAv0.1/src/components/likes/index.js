import React, {Fragment,Component} from "react";
import { Button, ButtonGroup } from 'reactstrap';


export default class Likes extends Component{
    constructor(props){
        super(props);
        this.state = {
            like: false,
            dislike: false
        }
    }


    render(){

        return(
            <Fragment>
                <ButtonGroup>
                    <Button color={'success'} onClick={this.changeLikes}>{this.props.comment.likes}</Button>
                    <Button color={"danger"} onClick={this.changeDislikes}>{this.props.comment.dislikes}</Button>
                </ButtonGroup>
            </Fragment>
        )
    }

    changeLikes = () => {
        if (this.state.likes) {
            // like -1, dis 0
            this.setState({like:false});
            this.props.changeVote({likes: -1, dislikes: 0});
        } else {

            if (this.state.dislike) {
                //like +1, dis -1
                this.setState({like:true, dislike: false});
                this.props.changeVote({likes: 1, dislikes: -1});
            } else {
                // like +1, dis 0
                this.setState({like: true});
                this.props.changeVote({likes: 1, dislikes: 0});
            }
        }
    }

    changeDislikes = () => {
        if (this.state.dislikes) {
            // like -1, dis 0
            this.setState({dislike:false});
            this.props.changeVote({dislikes: -1, likes: 0});
        } else {
            if (this.state.like) {
                //like +1, dis -1
                this.setState({dislike:true, like: false});
                this.props.changeVote({dislikes: 1, likes: -1});
            } else {
                // like +1, dis 0
                this.setState({dislike: true});
                this.props.changeVote({dislikes: 1, likes: 0});
            }
        }
    }
}
