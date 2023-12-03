import React from 'react'
import styles from "./Introduction.module.css";
import { Link } from 'react-scroll';

const Introduction = () => {
  return (
    <>
        <section className={styles.intro}>
            <div className={styles.introContent}>
                <p className={styles.hello}> Hello,</p>
                <h2 className={styles.introText}> I am Akshar Vijay, <br/> Web Developer </h2>
                <p className={styles.intropara}> I am a skilled passionate web developer with experince in creating <br/>visually appealing and user friendly website and interactive applications</p>
                <Link><button className={styles.hirebtn}>Hire Me</button></Link>
            </div>

        </section>
    </>
  )
}

export default Introduction