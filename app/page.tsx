import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="title">Sample main page</h1>
      </main>
      <footer className={styles.footer}>
        <p>from bharadwaj</p>
      </footer>
    </div>
  );
}
