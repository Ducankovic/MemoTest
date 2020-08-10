import React, { useState, useEffect, createContext } from "react";

const UpisForma = (props) => {
  const pocetneVrednosti = {
    redniBroj: "",
    datum: "",
    naslov: "",
    opis: "",
    ocena: "1",
    kategorija: "Licni Zivot",
    ocekivanja: "",
  };

  var [vrednost, setVrednost] = useState(pocetneVrednosti);
  const handlePromena = (e) => {
    var { name, value } = e.target;
    setVrednost({ ...vrednost, [name]: value });
  };

  const handleUpis = (e) => {
    e.preventDefault();
    props.unosIliPromena(vrednost);
  };
  useEffect(() => {
    if (props.id == "") {
      setVrednost({ ...pocetneVrednosti });
    } else setVrednost({ ...props.unosObjekat[props.id] });
  }, [props.id, props.unosObjekat]);
  return (
    <form autoComplete="off" onSubmit={handleUpis}>
      <div className="form-group input group">
        <div className="input-group-prepend">
          <span className="input-group-text mb-4">
            Unesite svoje ideje ovde
          </span>
        </div>
        <input
          className="Form-control mb-4 mr-4"
          placeholder="Naslov"
          name="naslov"
          value={vrednost.naslov}
          onChange={handlePromena}
        ></input>
        <label for="date">Datum </label>
        <input
          type="date"
          className="Form-control mb-4 ml-2"
          name="datum"
          value={vrednost.datum}
          onChange={handlePromena}
        ></input>
        <textarea
          rows="6"
          className="Form-control w-100 mb-4"
          placeholder="Opis ideje"
          name="opis"
          value={vrednost.opis}
          onChange={handlePromena}
        ></textarea>
        <textarea
          rows="6"
          className="Form-control w-100 mb-4"
          placeholder="Sta ocekujem od ideje"
          name="ocekivanja"
          value={vrednost.ocekivanja}
          onChange={handlePromena}
        ></textarea>
        <label for="select">Ocena 1-10</label>
        <select
          className="select ml-4 mr-4"
          name="ocena"
          value={vrednost.ocena}
          onChange={handlePromena}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <select
          className="select ml-4 mr-4"
          onChange={handlePromena}
          name="kategorija"
          label="Multiple Select"
          value={vrednost.kategorija}
        >
          <option value="Licni Zivot">Licni Zivot</option>
          <option value="Posao">Posao</option>
          <option value="Obrazovanje">Obrazovanje</option>
          <option value="zabava">zabava</option>
          <option value="Putovanja">Putovanja</option>
          <option value="Ostalo">Ostalo</option>
        </select>

        <label for="select">Kategorija</label>

        <button
          type="submit"
          value={props.id == "" ? "Unos" : "Izmena"}
          class="btn btn-success w-50 mr-4"
          name="sacuvaj"
        >
          Sacuvaj
        </button>
      </div>
    </form>
  );
};

export default UpisForma;
