import React from 'react'
import styles from "./Header.module.css";
import { Link } from "react-scroll";
import contact from  "../../assets/contact.png"

const Header = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Akshar Vijay</div>
        <div className={styles.menu}>
          <Link to="/" className={styles.menuListItem}>Home</Link>
          <Link to="/About"className={styles.menuListItem}>About</Link>
          <Link to="/Portfolio"className={styles.menuListItem}>Portfolio</Link>
        </div>
        <button className={styles.contactHeader}>
          <img src={contact} alt="" className={styles.contactIcon} />
          Contact
        </button>
      </nav>
    </>
  )
}

export default Header;