import React from "react";
import Header from "./Header";
import Content from "./Content";
import './TimeLine.css';

export default class TimeLine extends React.Component {
    render() {
        const activities = [
            {
                timestamp: new Date().getTime(),
                text: "Ate lunch",
                user: {
                    id: 1, name: 'Nate',
                    avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                },
                comments: [{ from: 'Ari', text: 'Me too!' }]
            },
            {
                timestamp: new Date().getTime(),
                text: "Woke up early for a beautiful run",
                user: {
                    id: 2, name: 'Ari',
                    avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                },
                comments: [{ from: 'Nate', text: 'I am so jealous' }]
            },
        ]
        return (
            <div className="demo">
                <div className="notificationsFrame">
                    <div className="panel">
                        <Header title="Setting"/>
                        <Content activities={activities}/>
                    </div>
                </div>
            </div>

        )
    }
}
