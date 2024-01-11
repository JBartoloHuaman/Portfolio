import React from 'react'
import styles from './styles.module.css'
import aboutMe from '../../assets/icons/aboutMe.svg'
import projects from '../../assets/icons/projects.svg'
import contact from '../../assets/icons/contact.svg'
export default function Nav() {
  return (
    <div className={styles.container}>
        <div className={styles.containerNav}>
            <div className={styles["container-portfolio"]}>My portfolio</div>
            <div className={styles.containerNav2}>
                <div className={styles["container-text"]}>
                    <img className={styles["image-logo"]} src={aboutMe} alt="logo" />
                    <div className={styles["text"]}>About me</div>
                </div>
                <div className={styles["container-text"]}>
                    <img className={styles["image-logo"]} src={projects} alt="logo" />
                    <div className={styles["text"]}>Projects</div>
                </div>
                <div className={styles["container-text"]}>
                    <img className={styles["image-logo"]} src={contact} alt="logo" />
                    <div className={styles["text"]}>Contact</div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
