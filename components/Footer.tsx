import styles from "./footer.module.css"

function Footer() {
  return (
    <footer className={styles.container1}>
      <div className={styles.container2}>
        <a
          className="a"
          rel="noreferrer"
          target="_blank"
          href="https://samirls.github.io/samirlaguardia/"
        >
          Created by <strong>samirls</strong>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
