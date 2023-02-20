import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function CardsIndex() {
  let [cards, setCards] = useState([]);
  let [card1, setCard1] = useState(true);

  let [card2, setCard2] = useState(true);

  let [card3, setCard3] = useState(true);

  let [cardnum1, setCardNum1] = useState(Math.ceil(Math.random() * 78));
  let [randomCard1, setRandomCard1] = useState(Math.ceil(Math.random() * 78));
  let [cardnum2, setCardNum2] = useState(Math.ceil(Math.random() * 78));
  let [randomCard2, setRandomCard2] = useState(Math.ceil(Math.random() * 78));
  let [cardnum3, setCardNum3] = useState(Math.ceil(Math.random() * 78));
  let [randomCard3, setRandomCard3] = useState(Math.ceil(Math.random() * 78));

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

    if (cardnum2 === cardnum1 || cardnum3 === cardnum1) {
      setCardNum1(Math.ceil(Math.random() * 78));
      if (cardnum2 === cardnum1 || cardnum3 === cardnum1) {
        setCardNum1(Math.ceil(Math.random() * 78));
      }
    }

    axios
      .get(`http://localhost:3000/cards/${cardnum1}`)
      .then((response) => {
        console.log(response);
        setRandomCard1(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setCard1(false);
  };

  const handleGenerateNumber2 = () => {
    setCardNum2(Math.ceil(Math.random() * 78));

    if (cardnum2 === cardnum1 || cardnum3 === cardnum2) {
      setCardNum2(Math.ceil(Math.random() * 78));
      if (cardnum2 === cardnum1 || cardnum3 === cardnum2) {
        setCardNum2(Math.ceil(Math.random() * 78));
      }
    }

    axios
      .get(`http://localhost:3000/cards/${cardnum2}`)
      .then((response) => {
        console.log(response);
        setRandomCard2(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setCard2(false);
  };

  const handleGenerateNumber3 = () => {
    setCardNum3(Math.ceil(Math.random() * 78));
    if (cardnum2 === cardnum3 || cardnum3 === cardnum1) {
      setCardNum3(Math.ceil(Math.random() * 78));
      if (cardnum2 === cardnum1 || cardnum3 === cardnum1) {
        setCardNum3(Math.ceil(Math.random() * 78));
      }
    }

    axios
      .get(`http://localhost:3000/cards/${cardnum3}`)
      .then((response) => {
        console.log(response);
        setRandomCard3(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setCard3(false);
  };

  return (
    <div>
      <div className="layout">
        <div className="label">
          <h3> Present</h3>
        </div>
        <div className="card">
          <button
            id="card"
            onClick={() => {
              if (card1) {
                handleGenerateNumber1();
              }
            }}
          >
            {" "}
            {randomCard1.name}
          </button>
        </div>
        <div className="label">
          <h3>Past &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
          <h3> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Future</h3>
        </div>
        <div className="card">
          <button
            id="card"
            onClick={() => {
              if (card2) {
                handleGenerateNumber2();
              }
            }}
          >
            {" "}
            {randomCard2.name}
          </button>
          <button
            id="card"
            onClick={() => {
              if (card3) {
                handleGenerateNumber3();
              }
            }}
          >
            {" "}
            {randomCard3.name}
          </button>
        </div>
      </div>
    </div>
  );
}
