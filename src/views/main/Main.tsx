import React from "react";
import {Card as BSCard} from "react-bootstrap";
import Sale from "../../assets/sale@2x.png";
import Carousel from "../../components/Carousel";
import logo from '../../assets/mallmalle.png'
import Card from './components/Card';
import useSuggestionData from "./hooks/useSuggestionData";

type Props = {};

export default function Main(props: Props) {
  const suggestions = useSuggestionData();
  
  return (
    <div className={"container pb-0 p-5"}>
      <Carousel/>
      <div className="row justify-content-around">
        <div className="row">
          <div className="col p-0">
            <BSCard>
              <BSCard.Img variant="top" src={Sale}/>
            </BSCard>
          </div>
          <div className="col p-0 mx-3">
            <BSCard>
              <BSCard.Img variant="top" src={Sale}/>
            </BSCard>
          </div>
          <div className="col p-0">
            <BSCard>
              <BSCard.Img variant="top" src={Sale}/>
            </BSCard>
          </div>
        </div>
      </div>

      <div className="row my-5">{''}</div>
      <hr className="mt-5 line-through position-relative"/>
      <div className="row justify-content-center">
        <div className="col text-center">
          <img src={logo} alt={'logo.png'}/>
        </div>
      </div>
      <div className="row my-5">{''}</div>
      <section>
        <h3>შემოთავაზება</h3>
        <div className="row justify-content-between">
          {
            suggestions.map((card, key) =>
              <Card
                key={key}
                currentValue={card.value.current}
                discountValue={card.value.discounted}
                text={card.title}
                image={card.image}
              />
            )
          }
        </div>
      </section>
    </div>
  );
}
