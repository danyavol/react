import React ,{Fragment,Component} from "react";
import {} from 'reactstrap';
import '../../style/style.scss';


export default class CatalogPage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Fragment>
                <div className={'wrapper'}>
                 <h1>{"Catalog page"}</h1>
                </div>
            </Fragment>
        )
    }


}
