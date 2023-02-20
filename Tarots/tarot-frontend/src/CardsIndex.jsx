import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "./Modal";

export function CardsIndex() {
  let [cards, setCards] = useState([]);

  let [currentCard, setCurrentCard] = useState(true);

  const [showImage, setShowImage] = useState(false);
  const [textDescription, setTextDescription] = useState();
  const [title, setTitle] = useState();

  const [currentImage, setCurrentImage] = useState("");

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleHideImage = () => {
    setShowImage(false);
  };
  let [card1, setCard1] = useState(true);
  let [card2, setCard2] = useState(true);
  let [card3, setCard3] = useState(true);

  let [cardnum1, setCardNum1] = useState(Math.ceil(Math.random() * 78));
  let [cardnum2, setCardNum2] = useState(Math.ceil(Math.random() * 78));
  let [cardnum3, setCardNum3] = useState(Math.ceil(Math.random() * 78));

  let [randomCard1, setRandomCard1] = useState(Math.ceil(Math.random() * 78));
  let [randomCard2, setRandomCard2] = useState(Math.ceil(Math.random() * 78));
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
    <div className="cardy">
      <div className="layout">
        <div className="label">
          <h3> Present</h3>
        </div>
        <div id="pad1">
          <div className="card">
            <button
              id="card"
              onClick={() => {
                if (card1) {
                  handleGenerateNumber1();
                } else {
                  // setCurrentImage("/images/8.png");
                  handleShowImage();
                  setTitle("Present");
                  setCurrentCard(randomCard1.name);
                  setTextDescription(randomCard1.description);
                }
              }}
            >
              <img id="symbol" src={randomCard1.image} />
            </button>
          </div>
        </div>

        <div className="card">
          <div id="pad2">
            <button
              id="card"
              onClick={() => {
                if (card2) {
                  handleGenerateNumber2();
                } else {
                  // setCurrentImage("/images/8.png");
                  handleShowImage();
                  setTitle("Past");
                  setCurrentCard(randomCard2.name);

                  setTextDescription(randomCard2.description);
                }
              }}
            >
              {" "}
              <img id="symbol" src={randomCard2.image} />
            </button>
          </div>

          <div id="pad3">
            <button
              id="card"
              onClick={() => {
                if (card3) {
                  handleGenerateNumber3();
                } else {
                  // setCurrentImage("/images/8.png");
                  handleShowImage();
                  setTitle("Future");
                  setCurrentCard(randomCard3.name);
                  setTextDescription(randomCard3.description);
                }
              }}
            >
              {" "}
              <img id="symbol" src={randomCard3.image} />
            </button>
          </div>
        </div>
      </div>
      <div className="label">
        <h3>Past &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
        <h3> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Future</h3>
      </div>
      <Modal show={showImage} onClose={handleHideImage}>
        {/* <img id="modalImage" src={currentImage} /> */}
        <h3> {title} </h3>
        <p> {currentCard} </p>
        <p> {textDescription} </p>
      </Modal>
    </div>
  );
}
