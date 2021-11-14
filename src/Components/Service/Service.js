import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import "./Service.css"
const Service = (props) => {
    const {title,review,description,time,img}=props.serv
    return (
        <div >
             <Card className="card">
    <Card.Img variant="top" src={img} height="250rem" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        <div>{description}</div>
        <div className="review">
            <div><Rating
            readonly
            initialRating={review}
  emptySymbol={<i class="far fa-star"></i>}
  fullSymbol={<i class="fas fa-star"></i>}
/></div>
            <div><i class="fas fa-clock"></i><small>{time}hr</small></div>
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
        </div>
    );
};

export default Service;