import React ,{Fragment,Component} from "react";
import '../../style/style.scss';

export default class NotFound extends Component{
  constructor(props){
    super(props);

  }


  render(){
    return(
      <Fragment>
        <div className={'wrapper'}>
          <h1>{"Страница не найдена"}</h1>
        </div>
      </Fragment>
    )
  }






}
