//Assets
import boomer from "../assets/img/Boomer.jpg";
import genX from "../assets/img/GenX.jpg";
import genY from "../assets/img/GenY.jpg";
import genZ from "../assets/img/GenZ.jpg";

export function Result({ result, isFetching, isError }) {
  return isFetching ? (
    <div className="loadingOrError">Boomer loading...</div>
  ) : isError ? (
    <div className="loadingOrError">
      An error occured. Are you sure about spelling?
    </div>
  ) : result === "" ? (
    <div className="welcomeScreen">
      <div>
        <strong>Baby boomers</strong> were born between 1946 and 1964. They're
        currently between 57-75 years old (71.6 million in the U.S.)
      </div>
      <div>
        <strong>Gen X</strong> was born between 1965 and 1979/80 and is
        currently between 41-56 years old (65.2 million people in the U.S.)
      </div>
      <div>
        <strong>Gen Y, or Millennials</strong>, were born between 1981 and
        1994/6. They are currently between 25 and 40 years old (72.1 million in
        the U.S.)
      </div>
      <div>
        <strong>Gen Z</strong> is the newest generation, born between 1997 and
        2012. They are currently between 9 and 24 years old (nearly 68 million
        in the U.S.)
      </div>
    </div>
  ) : (
    <div className="result">
      <div className="extraInfo">
        <img src={result.src} alt={result.name} />
        <label>
          {result.name}, born in {result.birthYear}
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
  );
}
