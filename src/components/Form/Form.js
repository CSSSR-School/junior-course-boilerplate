import React from "react";
import styles from "./Form.module.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <h2>Цена</h2>
        <label>
          <span>от</span>
          <input type="number" placeholder="30"/>
        </label>
        <label>
          <span>до</span>
          <input type="number" placeholder="3000"/>
        </label>
        <button type="submit">Применить</button>
      </form>
    );
  }
}
