import React from "react";
import './Button.css'

export default class Button extends React.Component {
    handleClick = (d) => {
        alert(d);
    }
    render() {
        return (
            <button className={this.props.className} onClick={this.handleClick.bind(this,'go learning')}>{this.props.children}</button>
        )
    }
}


/*
export default function Button(props) {
    return (
        <button className={props.className}>{props.children}</button>
    )
}
*/
