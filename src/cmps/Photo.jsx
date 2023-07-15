import { useNavigate } from "react-router-dom";
import Chat from "./Chat";
import "../style.css";
import { useState } from "react";
import catImage from "../utilities/cat.webp";

function Photo({ item }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section
      onClick={() => setIsClicked(!isClicked)}
      key={item._id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "black solid 5px",
        margin: "5px",
        minWidth: "303px",
        width: "20%",
        flex: 1,
      }}
    >
      <img
        src={catImage}
        alt={item.name}
        style={{ maxWidth: "150px", minWidth: "50px" }}
      />
      <p className="item-name">{item.name}</p>
      <p className="item-artistName">{item.artistName}</p>
      <p className="item-describtion">{item.describtion}</p>
    </section>
  );
}

export default Photo;
