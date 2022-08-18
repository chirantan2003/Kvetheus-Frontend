import { useRouter } from "next/router";
import styles from "./card.module.css";
import Image from "next/image";

export default function Cards(props) {
  const router = useRouter();

  function checkVal() {
    router.push(
      {
        pathname: "../formJs",
        query: {
          title: props.title,
        },
      },
      "form"
    );
  }

  return (
    <>
      <div className={styles.outer}>
        <div className={styles.circle}>
          <Image src={props.image} className={styles.icon} />
        </div>
        <div className={styles.border}>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <button className={styles.button} onClick={checkVal} type="submit">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
