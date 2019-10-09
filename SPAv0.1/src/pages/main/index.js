import React, {Fragment, Component} from "react";
import CarouselMain from "../../components/carousel/index";
import TopNews from "../../components/topNews/index";
import '../../style/style.scss';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <CarouselMain className={"body_carousel"}/>
                <div className={'wrapper'}>
                    <h2>Top News</h2>
                    <TopNews count={5}/>
                </div>
            </Fragment>
        )
    }


}
