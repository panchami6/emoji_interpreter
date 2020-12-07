import React, { useState } from "react";
import "./styles.css";

var handGestureDictionary = {
  "👍": "Thums Up",
  "👎": "Thumbs Down",
  "👋": "Waving Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤝": "HandShake",
  "👏": "Clapping Hands",
  "🤏": "Pinching Hand",
  "🤙": "Call Me",
  "✍️": "Writing",
  "🤳": "Let's take a Selfie",
  "🙌": "Raising Hands",
  "🤲": "Palms up Together",
  "🙏": "Folded Hands"
};

var gesturesWeKnow = Object.keys(handGestureDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = handGestureDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! We don't have this in our database.";
    }
    setMeaning(meaning);
  }

  function handClickHandler(hand) {
    var meaning = handGestureDictionary[hand];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">Do you know these Hand Gestures?</h1>
      <hr />
      <h2>
        Enter any hand gesture you want to know the meaning of. Or select from
        the below mentioned set.
      </h2>
      <input className="input" onChange={inputChangeHandler} />

      <h2> {meaning} </h2>

      <h3>Hand Gestures we have:</h3>
      {gesturesWeKnow.map(function (hand) {
        return (
          <span
            className="gestures"
            onClick={() => handClickHandler(hand)}
            key={hand}
          >
            {hand}
          </span>
        );
      })}
    </div>
  );
}
