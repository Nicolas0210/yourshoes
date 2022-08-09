import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footer_col}>
            <h3>ABOUT</h3>
            <ul>
              <li>
                <Link to="/aboutUs">ABOUT US</Link>
              </li>
              <li>
                <Link to="/community">COMUNIDAD</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_col2}>
            <h3>PRODUCTOS</h3>
            <ul>
              <li>ZAPATILLAS PARA LA FLIA</li>
            </ul>
          </div>
          <div className={styles.footer_col3}>
            <h3>SOPORTE</h3>
            <ul>
              <li>FAQ</li>
              <li>CONTACTO</li>
            </ul>
          </div>
          <div>
            <h3>NEWSLETTER</h3>
            <input type="email" placeholder="Email: " />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
