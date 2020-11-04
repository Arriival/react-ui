import React from "react";
import {CarouselControl, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdbreact";
import ReactDOM from 'react-dom';
import App from "../App";

export default class MultiCarouselPage extends React.Component {
    test() {
        ReactDOM.render(
            <React.StrictMode>
                <MultiCarouselPage/>
            </React.StrictMode>,
            document.getElementById('subset')
        );
    }

    render() {

        const items = [
            {
                itemId: 1,
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREK5djTSCG-OkY6LKcDOhEjAWnvp2fLE-Cxw&usqp=CAU',
                title: '1',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                itemId: 2,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg',
                title: '2',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                itemId: 3,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg',
                title: '3',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                itemId: 4,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg',
                title: '4',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                itemId: 5,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg',
                title: '5',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                itemId: 6,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg',
                title: '6',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                itemId: 7,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg',
                title: '7',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                itemId: 8,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg',
                title: '8',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            },
            {
                itemId: 9,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg',
                title: '9',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
            }
        ]
        return (
                <MDBCarousel activeItem={1} length={items.length} slide={true} showControls={false} showIndicators={true} multiItem>
                    <CarouselControl/>
                    <MDBCarouselInner>
                        <MDBRow>

                            {items.map((item) => (
                                <MDBCarouselItem itemId={item.itemId}>
                                    <MDBCard reverse>
                                        <MDBCardImage className={"text-center"} style={{height: '20rem', width: '100%'}} src={item.src}/>
                                        <MDBCardBody cascade className="text-center">
                                            <MDBCardTitle>{item.title}</MDBCardTitle>
                                            <h5 className="indigo-text"><strong>Photography</strong></h5>
                                            <MDBCardText> {item.text}</MDBCardText>
                                            <MDBBtn type="button" onClick={this.test.bind(this)}>Create it</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCarouselItem>
                            ))}
                        </MDBRow>
                    </MDBCarouselInner>
                </MDBCarousel>
        );
    }
}
