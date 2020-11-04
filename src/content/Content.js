import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import MainCarousel from "../mainMenu/MainMenu";
import {MDBContainer, MDBRow} from 'mdbreact';

export default class Content extends React.Component {

    render() {
        return (
            <Router>
                <MDBContainer >
                    <MainCarousel/>
                    <div id="content"></div>
                </MDBContainer>
            </Router>
        );
    }
}

