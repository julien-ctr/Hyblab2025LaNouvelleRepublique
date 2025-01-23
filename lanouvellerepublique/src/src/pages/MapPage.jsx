import { useState } from "react";
import ScrollableMap from "../components/ScrollableMap";
import DialogueBox from "../components/DialogueBox";

function MapPage() {
  const [selectedText, setSelectedText] = useState(""); // Manage text globally

  return (
    <div className="game_container">
      <ScrollableMap
        width={4000}
        height={4000}
        background="url('/background.jpg')"
        setSelectedText={setSelectedText}
      />
      {selectedText && <DialogueBox text={selectedText} setSelectedText={setSelectedText} />}
      <h1>Carrousel</h1>
    </div>
  );
}

export default MapPage;
