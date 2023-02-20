import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function CardsIndex() {
  let [cards, setCards] = useState([]);
  let [cardnum, setCardNum] = useState(1);

  let [randomCard1, setRandomCard1] = useState(1);

  const handleCards = () => {
    axios
      .get("http://localhost:3000/cards")
      .then((response) => {
        console.log(response);
        setCards(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleGenerateNumbers = () => {
    setCardNum(Math.ceil(Math.random() * 78));
    axios
      .get(`http://localhost:3000/cards/${cardnum}`)
      .then((response) => {
        console.log(response);
        setRandomCard1(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(handleCards, []);

  return (
    <div>
      <button onClick={handleGenerateNumbers}> random number</button>
      <p> {randomCard1.name}</p>
      {cards.map((card) => (
        <div key={card.id}>
          <h2>{card.name}</h2>
          {/* <p> Description: {card.description}</p> */}
        </div>
      ))}
    </div>
  );
}
