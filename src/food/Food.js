import React from 'react';
import {MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBTooltip, MDBCarouselItem, MDBBtn} from 'mdbreact';


export default class Food extends React.Component {
    render() {
        const items = [
            {
                itemId: 1,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg',
                name: 'FOOD NAME',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                price: '10000',
            },
            {
                itemId: 1,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg',
                name: 'FOOD NAME',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                price: '10000',
            },
            {
                itemId: 1,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (40).jpg',
                name: 'FOOD NAME',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                price: '10000',
            },
            {
                itemId: 1,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (39).jpg',
                name: 'FOOD NAME',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                price: '10000',
            },
            {
                itemId: 1,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (51).jpg',
                name: 'FOOD NAME',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                price: '10000',
            },
            {
                itemId: 1,
                src: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (50).jpg',
                name: 'FOOD NAME',
                text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                price: '10000',
            },

        ]
        return (
            <section className='text-center my-5 rtl'>
                <h2 className='h1-responsive font-weight-bold text-center my-5'>{this.props.type}</h2>
                <MDBRow>
                    {items.map((item) => (
                        <MDBCol lg='3' md='12' className='mb-lg-0 mb-4 mt-4'>
                            <MDBCard wide ecommerce>
                                <MDBCardImage
                                    cascade
                                    src={item.src}
                                    top
                                    alt='sample photo'
                                />
                                <MDBCardBody cascade className='text-center'>
                                    <a href='#!' className='text-muted'>
                                        <p>{this.props.type}</p>
                                    </a>
                                    <MDBCardTitle>
                                        <strong>
                                            <a href='#!'>{item.name}</a>
                                        </strong>
                                    </MDBCardTitle>
                                    <MDBCardText>{item.text}</MDBCardText>
                                    <MDBCardFooter className='px-1'>
                <span className='float-right font-weight-bold pr-1'>
                  <strong>{item.price}</strong>
                </span>
                                        <span className='float-left'>
                  <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-eye mr-3'/>
                    <span>Quick Look</span>
                  </MDBTooltip>{' '}
                                            <MDBTooltip domElement placement='top'>
                    <i className='grey-text fa fa-heart'/>
                    <span>Add to Whishlist</span>
                  </MDBTooltip>
                </span>
                                    </MDBCardFooter>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}

                </MDBRow>
            </section>
        )
    }
}
