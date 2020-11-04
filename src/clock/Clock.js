import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.updateDate = this.updateDate.bind(this);

        this.state = {
            date: new Date().toLocaleTimeString(),
            c: 0
        }
        this.interval = setInterval(this.updateDate, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateDate() {

        this.setState({
            date: new Date().toLocaleTimeString(),
            c: this.state.c + 1
        });
    }

    render() {
        return (
            <div>
                <div className="fa-lg">{this.state.date} </div>
            </div>
        );
    }

}
