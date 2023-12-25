import { useState } from "react";
import "./ForgiveMe.css";

const ForgiveMe = () => {
  const [response, setResponse] = useState("");
  const [leftStyle, setLeftStyle] = useState(null);
  const [topStyle, setTopStyle] = useState(null);
  const [heading, setHeading] = useState("Do you forgive me???");

  const handleButtonClick = () => {
    const button = document.getElementById("no");
    const headings = [
      "Really?",
      "Choose again",
      "Incorrect option",
      "Not applicable",
      "Think twice",
      "Why??",
      "Don't upset me",
      "Last chance",
      "Pleasee",
      "Pleaseeee",
      "But I'm sorryyyy",
      "But I love you",
    ];

    const randomIndex = Math.floor(Math.random() * headings.length);
    if (button) {
      const newTop = Math.random() * (window.innerHeight - button.offsetHeight);
      const newLeft = Math.random() * (window.innerWidth - button.offsetWidth);

      const clampedTop = Math.max(
        0,
        Math.min(window.innerHeight - button.offsetHeight, newTop)
      );
      const clampedLeft = Math.max(
        0,
        Math.min(window.innerWidth - button.offsetWidth, newLeft)
      );

      setTopStyle(`${clampedTop}px`);
      setLeftStyle(`${clampedLeft}px`);
      console.log(headings[randomIndex]);
      setHeading(headings[randomIndex]);
    }
  };

  return (
    <div className="test-container">
      <div className="header">
        {response === "yes" ? <h1>Yipeeeee</h1> : <h1>{heading}</h1>}
      </div>
      <div>
        {response === "yes" ? (
          <img
            className="gif"
            src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
            alt="please"
          />
        ) : (
          <img
            className="gif"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
            alt="please"
          />
        )}
      </div>
      {response !== "yes" && (
        <div className="buttons-container">
          <button className="btn" id="yes" onClick={() => setResponse("yes")}>
            Yes
          </button>
          <button
            className="btn no-button"
            onClick={handleButtonClick}
            id="no"
            style={{
              top: topStyle,
              left: leftStyle,
              transition: "0.5s",
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgiveMe;
