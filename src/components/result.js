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
    <div className="loadingOrError">
      Au sens strict du terme, le boomer est un individu né entre 1945 et 1965,
      pendant une période appelée “le baby-boom”. Les années économiquement
      fastes qui ont suivi la seconde guerre mondiale ont engendré un pic de
      natalité significatif, qualifié de “baby-boom”.
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
