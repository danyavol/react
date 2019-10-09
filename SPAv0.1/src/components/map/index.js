import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default class Example extends Component {
    constructor(props) {
        super(props);
    }


    render() {
            return (
                <YMaps>
                    <div>
                        <Map state={{ center: this.props.item.coords, zoom: 15 }}  >
                            <Placemark geometry={this.props.item.coords}
                                       properties={{
                                           iconCaption:this.props.item.previewText,
                                           balloonContent:'sdfsdfddddd',
                                           balloonContentBody:'hello world',
                                           balloon: 'dfdfdf'
                                       }}
                                        options={{
                                            preset:this.props.item.marker,
                                            balloon: '11111'
                                        }}
                            />
                        </Map>
                    </div>
                </YMaps>
            )
    }

    showPageContent = () => {
        
    }


}
