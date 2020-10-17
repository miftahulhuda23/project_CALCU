import React, { useState } from "react";
import "./Button.css";
import Input from "../Input/Input";

const Button = () => {
  const [data, setData] = useState({
    tampil: "0",
    lastInput: "",
    angkaHasil: true 
  });

  const input = (value) => {
    if ( data.angkaHasil === true && value >= 0 && value <= 9 || data.tampil === "0"  ) {
      setData({
        tampil: value,
        lastInput: "",
        angkaHasil: false
      });
    } else if (value >= 0 && value <= 9 && data.angkaHasil === false ) {
      setData({
        tampil: data.tampil += value,
        lastInput: data.lastInput += value,
        angkaHasil: false
      });
    } else if (value === "." ){
      if (data.angkaHasil === true) {
        return;
      }
      else if (data.lastInput.indexOf('.') === -1) {
        setData ({ 
          tampil: data.tampil += value,
          lastInput: data.lastInput += value,
          angkaHasil: false
        })
      } 
    } else if ( value === "+" || value === "-" || value === "*" || value === "/") {
      const angkaAkhir = data.tampil.substr(
        data.tampil.length - 1,
        data.tampil.length
      );
      if (data.tampil === "0") {
        return;
      } else if ( angkaAkhir !== "+" && angkaAkhir !== "-" && angkaAkhir !== "*" && angkaAkhir !== "/") {
        setData({
          tampil: (data.tampil += value),
          lastInput: "",
          angkaHasil: false
         });
      } else if ( angkaAkhir === "+" || angkaAkhir === "-" || angkaAkhir === "*" || angkaAkhir === "/") {
        let deleteList = data.tampil.substr(0, data.tampil.length - 1);
        setData({
          tampil: (deleteList += value),
          lastInput: "",
          angkaHasil: false
        });
      }
    }
  };

  const hasil = () => {
    const angkaAkhir = data.tampil.substr(
      data.tampil.length - 1,
      data.tampil.length
    );
    if (
      angkaAkhir === "+" ||
      angkaAkhir === "-" ||
      angkaAkhir === "*" ||
      angkaAkhir === "/"
    ) {
      const deleteLast = data.tampil.substr(0, data.tampil.length - 1);
      setData({
        // eslint-disable-next-line
        tampil: String(eval(deleteLast)),
        angkaHasil: true
      });
    } else {
      setData({
        // eslint-disable-next-line
        tampil: String(eval(data.tampil)),
        angkaHasil: true
      });
    }
  };

  const clear = () => {
    setData({...data,
      tampil: "0",
    });
  };

  const hapus = () => {
    if (data.tampil.length === 1) {
      setData({...data,
        tampil: "0",
      });
    } else {
      setData({...data,
        tampil: data.tampil.substr(0, data.tampil.length - 1),
      });
    }
  };

  return (
    <div className="container">
      <div className="Container">
        <h1 className="Judul">Calculator</h1>
        <Input isi={data.tampil} />
      </div>
      <div className="Button">
        <button
          name="AC"
          className="btn del btn-danger ml-2 mb-2"
          onClick={() => clear()}
        >
          AC
        </button>
        <button
          name="DEL"
          className="btn del btn-danger ml-2 mb-2"
          onClick={() => hapus()}
        >
          DEL
        </button>
        <br />
        <button
          name="7"
          className="btn btn-info ml-2 mb-2"
          onClick={() => input("7")}
        >
          7
        </button>
        <button
          name="8"
          className="btn btn-info ml-2 mb-2"
          onClick={() => input("8")}
        >
          8
        </button>
        <button
          name="9"
          className="btn btn-info ml-2 mb-2"
          onClick={() => input("9")}
        >
          9
        </button>
        <button
          name="x"
          className="btn btn-info ml-2 mb-2"
          onClick={() => input("*")}
        >
          x
        </button>
        <br />
        <button
          name="4"
          className="btn btn-warning ml-2 mb-2"
          onClick={() => input("4")}
        >
          4
        </button>
        <button
          name="5"
          className="btn btn-warning ml-2 mb-2"
          onClick={() => input("5")}
        >
          5
        </button>
        <button
          name="6"
          className="btn btn-warning ml-2 mb-2"
          onClick={() => input("6")}
        >
          6
        </button>
        <button
          name="÷"
          className="btn btn-warning ml-2 mb-2"
          onClick={() => input("/")}
        >
          ÷
        </button>
        <br />
        <button
          name="1"
          className="btn btn-success ml-2 mb-2"
          onClick={() => input("1")}
        >
          1
        </button>
        <button
          name="2"
          className="btn btn-success ml-2 mb-2"
          onClick={() => input("2")}
        >
          2
        </button>
        <button
          name="3"
          className="btn btn-success ml-2 mb-2"
          onClick={() => input("3")}
        >
          3
        </button>
        <button
          name="-"
          className="btn btn-success ml-2 mb-2"
          onClick={() => input("-")}
        >
          -
        </button>
        <br />
        <button
          name="."
          className="btn btn-dark ml-2 mb-2"
          onClick={() => input(".")}
        >
          .
        </button>
        <button
          name="0"
          className="btn btn-dark ml-2 mb-2"
          onClick={() => input("0")}
        >
          0
        </button>
        <button
          name="="
          className="btn btn-dark ml-2 mb-2"
          onClick={() => hasil()}
        >
          =
        </button>
        <button
          name="+"
          className="btn btn-dark ml-2 mb-2"
          onClick={() => input("+")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Button;
