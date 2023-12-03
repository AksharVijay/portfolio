import React from 'react'
import styles from "./Portfolio.module.css";
import Cards from '../Cards/Cards';

const Portfolio = () => {
  return (
    <>
       <section className={styles.portfolio}>
            <div className={styles.portfolioHeading}>
                <h2>My Portfolio</h2>
            </div>
            <div className={styles.portfolioWork}>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
            <button className={styles.portfolioBtn}> See More</button>
        </section> 
    </>
  )
}

export default Portfolio;