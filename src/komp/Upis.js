import React, { useState, useEffect } from "react";
import UpisForma from "./UpisForma";
import firebaseDb from "../firebase";

const Upis = () => {
  var [unosObjekat, setUnosObjekat] = useState({});
  var [id, setId] = useState("");

  useEffect(() => {
    firebaseDb.child("upis").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setUnosObjekat({
          ...snapshot.val(),
        });
      else setUnosObjekat({});
    });
  }, []);

  const onDelete = (key) => {
    if (window.confirm("da li ste sigurni da hocete da obrisete ovu ideju?")) {
      firebaseDb.child(`upis/${key}`).remove((err) => {
        if (err) console.log(err);
        else setId("");
      });
    }
  };
  const unosIliPromena = (obj) => {
    if (id == "")
      firebaseDb.child("upis").push(obj, (err) => {
        if (err) console.log(err);
        else setId("");
      });
    else
      firebaseDb.child(`upis/${id}`).set(obj, (err) => {
        if (err) console.log(err);
        else setId("");
      });
  };
  return (
    <React.Fragment>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-6 text-center">Memo</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <UpisForma {...{ unosIliPromena, id, unosObjekat }} />
        </div>
        <div className="col-md-7">
          <table className="table table-stripped">
            <thead className="thead-dark">
              <tr>
                <th>Datum</th>
                <th>Kategorija</th>
                <th>Naslov</th>

                <th>Ocena</th>

                <th>Promene</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(unosObjekat).map((id) => {
                return (
                  <tr key={id}>
                    <td>{unosObjekat[id].datum}</td>
                    <td>{unosObjekat[id].kategorija}</td>
                    <td>{unosObjekat[id].naslov}</td>

                    <td>{unosObjekat[id].ocena}</td>

                    <td>
                      <a className="btn text-primary mr-4">
                        <button
                          className="btn text-warning w-25 mr-4"
                          onClick={() => {
                            setId(id);
                          }}
                        >
                          Izmeni
                        </button>
                        <button
                          className="btn text-danger w-25"
                          onClick={() => {
                            onDelete(id);
                          }}
                        >
                          Brisi
                        </button>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Upis;
