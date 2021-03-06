import React, {Component} from "react";


export default class ImageComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            imageStatus: "loading",
        };
    }

    handleLoad() {
        this.setState({imageStatus: "loaded"});
    }

    render() {
        return (
            <img onLoad={()=> this.handleLoad()} src={this.props.imageSrc} alt={this.props.imageAlt} />
        );
    }


}