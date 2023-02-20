import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function CardsIndex() {
  let [cards, setCards] = useState([]);
  let [cardnum1, setCardNum1] = useState(1);
  let [randomCard1, setRandomCard1] = useState(1);
  let [cardnum2, setCardNum2] = useState(2);
  let [randomCard2, setRandomCard2] = useState(2);
  let [cardnum3, setCardNum3] = useState(3);
  let [randomCard3, setRandomCard3] = useState(3);

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

  const handleGenerateNumber1 = () => {
    setCardNum1(Math.ceil(Math.random() * 78));
    do {
      setCardNum1(Math.ceil(Math.random() * 78));
    } while (cardnum2 === cardnum1 || cardnum3 === cardnum1);

    axios
      .get(`http://localhost:3000/cards/${cardnum1}`)
      .then((response) => {
        console.log(response);
        setRandomCard1(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleGenerateNumber2 = () => {
    setCardNum2(Math.ceil(Math.random() * 78));

    do {
      setCardNum2(Math.ceil(Math.random() * 78));
    } while (cardnum2 === cardnum1 || cardnum3 === cardnum2);

    axios
      .get(`http://localhost:3000/cards/${cardnum2}`)
      .then((response) => {
        console.log(response);
        setRandomCard2(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleGenerateNumber3 = () => {
    setCardNum3(Math.ceil(Math.random() * 78));
    do {
      setCardNum3(Math.ceil(Math.random() * 78));
      console.log(cardnum2);
    } while (cardnum2 === cardnum3 || cardnum3 === cardnum1);

    axios
      .get(`http://localhost:3000/cards/${cardnum3}`)
      .then((response) => {
        console.log(response);
        setRandomCard3(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleGenerateNumber1}> random number</button>
      <p> {randomCard1.name}</p>
      <button onClick={handleGenerateNumber2}> random number</button>
      <p> {randomCard2.name}</p>
      <button onClick={handleGenerateNumber3}> random number</button>
      <p> {randomCard3.name}</p>
      {cards.map((card) => (
        <div key={card.id}>
          <h2>{card.name}</h2>
          {/* <p> Description: {card.description}</p> */}
        </div>
      ))}
    </div>
  );
}
