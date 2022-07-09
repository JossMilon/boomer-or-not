//Remaining stuff to do
//Deploy it online first
//Scrap the image from wikipedia or pass the CORB policy
//Add a loader when searching for a boomer

//React elements
import { useState } from "react";
import boomer from "./assets/img/Boomer.jpg";
import genX from "./assets/img/GenX.jpg";
import genY from "./assets/img/GenY.jpg";
import genZ from "./assets/img/GenZ.jpg";

//Style
import "./App.scss";

//Packages
import axios from "axios";

function App() {
  //Component states
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  //Handle functions
  const areUBoomer = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("search", search);
    const response = await axios.post(
      "https://boomer-or-not-back.herokuapp.com/which-gen",
      formData
    );
    console.log(response.data);
    setResult(response.data);
  };
  return (
    <div className="App">
      <form className="form" onSubmit={areUBoomer}>
        <input
          type="text"
          placeholder="Enter someone"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <input type="submit" value="Check for boomer" />
      </form>
      {result === "" ? (
        <div className="instructions">
          Add a name and see if you're dealing with a Boomer.
        </div>
      ) : (
        <div className="result">
          <div className="extraInfo">
            <img src={result.src} alt={result.name} />
            <label>
              {result.name}, {result.birthYear}
            </label>
          </div>
          <div className="generation">
            <img
              src={
                result.gen === "Boomer"
                  ? boomer
                  : result.gen === "Gen X"
                  ? genX
                  : result.gen === "Gen Y"
                  ? genY
                  : genZ
              }
              alt="Generation badge"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
