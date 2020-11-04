import React from "react";
import {MDBBtn, MDBCol, MDBIcon, MDBRow, MDBSmoothScroll} from "mdbreact";
import ReactDOM from "react-dom";
import Food from "../food/Food";


export default class Card extends React.Component {
    pizza() {
        ReactDOM.render(
            <React.StrictMode>
                <Food type="PIZZA"/>
            </React.StrictMode>,
            document.getElementById('content')
        );
    }

    hotDog() {
        ReactDOM.render(
            <React.StrictMode>
                <Food type="HOTDOG"/>
            </React.StrictMode>,
            document.getElementById('content')
        );
    }

    hamburger() {
        ReactDOM.render(
            <React.StrictMode>
                <Food type="HAMBURGER"/>
            </React.StrictMode>,
            document.getElementById('content')
        );
    }

    render() {
        return (
            <section className="text-center mt-5 rtl">
                <h2 className="h1-responsive font-weight-bold my-5">
                    MAKE YOUR FOOD
                </h2>
                <h4 className="h4-responsive  mb-5 mt-0 pt-0">
                    CHOOSE ONE
                </h4>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBIcon icon="hamburger" size="3x" className="orange-text"/>
                        <h5 className="font-weight-bold my-4">HAMBURGER</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                        <MDBSmoothScroll to="content">
                            <MDBBtn type="button" flat onClick={this.hamburger.bind(this)}>Create it</MDBBtn>
                        </MDBSmoothScroll>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBIcon icon="hotdog" size="3x" className="cyan-text"/>
                        <h5 className="font-weight-bold my-4">HOTDOG</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                        <MDBSmoothScroll to="content">
                            <MDBBtn type="button" flat onClick={this.hotDog.bind(this)}>Create it</MDBBtn>
                        </MDBSmoothScroll>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBIcon fas icon="pizza-slice" size="3x" className="red-text"/>
                        <h5 className="font-weight-bold my-4">PIZZA</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                        <MDBSmoothScroll to="content">
                            <MDBBtn type="button" flat onClick={this.pizza.bind(this)}>Create it</MDBBtn>
                        </MDBSmoothScroll>
                    </MDBCol>
                    <MDBCol md="4" className="mt-5">
                        <MDBIcon fas icon="pizza-slice" size="3x" className="red-text"/>
                        <h5 className="font-weight-bold my-4">PIZZA</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                        <MDBSmoothScroll to="content">
                            <MDBBtn type="button" flat onClick={this.pizza.bind(this)}>Create it</MDBBtn>
                        </MDBSmoothScroll>
                    </MDBCol>
                    <MDBCol md="4" className="mt-5">
                        <MDBIcon fas icon="pizza-slice" size="3x" className="red-text"/>
                        <h5 className="font-weight-bold my-4">PIZZA</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                        <MDBSmoothScroll to="content">
                            <MDBBtn type="button" flat onClick={this.pizza.bind(this)}>Create it</MDBBtn>
                        </MDBSmoothScroll>
                    </MDBCol>
                    <MDBCol md="4" className="mt-5">
                        <MDBIcon fas icon="pizza-slice" size="3x" className="red-text"/>
                        <h5 className="font-weight-bold my-4">PIZZA</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                        </p>
                        <MDBSmoothScroll to="content">
                            <MDBBtn type="button" flat onClick={this.pizza.bind(this)}>Create it</MDBBtn>
                        </MDBSmoothScroll>
                    </MDBCol>
                </MDBRow>
            </section>
        );
    }
}
