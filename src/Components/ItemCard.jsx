import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './ItemCard.css'
import {useCart} from "react-use-cart" ;


const ItemCard = (props) => {
    const {addItem} = useCart();
  return (
    <div className="col-12 col-md-6 col-lg-3 mx-0 mb-4">
      <Card >
        <Card.Img variant="top" src={props.img} className="card-img" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div>${props.price}</div>
          <div className="mt-3 mb-2">
            <Button onClick={() => addItem (props.item)} variant="primary">Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
