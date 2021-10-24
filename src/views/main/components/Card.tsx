import React from 'react';
import {Card as BSCard} from 'react-bootstrap'
import '../styles/card.scss';

type Props = {
  currentValue: string | number;
  discountValue: string | number;
  text: string;
  image: string;
};

export default function Card(props: Props) {
  return (
    <div className="col-12 col-md-3 my-md-auto my-2 py-2 mm-card">
      <BSCard>
        <BSCard.Img variant="top" height={320} src={props.image}/>
        <BSCard.Body>
          <span className="current-value">{props.currentValue} ₾</span> 
          <span className="discounted-value">{props.discountValue} ₾</span>
          <div className="title">{props.text}</div>
        </BSCard.Body>
      </BSCard>
    </div>
  );
}
