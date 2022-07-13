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
  );
}
