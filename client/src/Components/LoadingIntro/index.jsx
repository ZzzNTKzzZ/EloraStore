import { useEffect, useState } from "react";
import styles from "./LoadingIntro.module.scss";
import logo from "../../Assets/logo.svg";

export default function LoadingIntro() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 2.0s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Fully remove from DOM after 2.5s (matching transition duration)
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.content}>
        <img src={logo} className={styles.logo} alt="Elora Store Logo" />
        <div className={styles.progressBar}>
          <div className={styles.progressFill} />
        </div>
      </div>
    </div>
  );
}
