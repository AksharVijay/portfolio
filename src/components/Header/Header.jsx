import React from 'react'
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <img src="" alt="" className={styles.logo} />
        <div className={styles.menu}>
          
        </div>
        <button className={styles.contactHeader}>
          <img src="" alt="" className={styles.contactIcon} />
          Contact
        </button>
      </nav>
    </>
  )
}

export default Header;