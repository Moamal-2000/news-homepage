import React, { useState } from "react";
import cardImgThree from "../images/image-gaming-growth.jpg";
import cardImgOne from "../images/image-retro-pcs.jpg";
import cardImgTwo from "../images/image-top-laptops.jpg";
import "./Cards.css";

const Cards = () => {
  const [cardsData] = useState([
    {
      imgUrl: cardImgOne,
      id: "01",
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
    },
    {
      imgUrl: cardImgTwo,
      id: "02",
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
    },
    {
      imgUrl: cardImgThree,
      id: "03",
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
    },
  ]);

  const cardStructure = (card) => {
    return (
      <div className="card" key={card.id}>
        <div className="img">
          <img src={card.imgUrl} alt="Card" />
        </div>

        <div className="content">
          <span>{card.id}</span>
          <h4 className="title">{card.title}</h4>
          <p>{card.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="cards">{cardsData.map((card) => cardStructure(card))}</div>
  );
};

export default Cards;
