import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <h2>KVETHEUS</h2>
      {children}
    </div>
  );
}
