import styles from "./whoIsTable.module.css";

export default function MacAddressTable(props) {
  const data = [props.serverData];

  const records = data.map((val) => {
    val = val.result;

    const content = [];

    function pushContent(objKey, objValue) {
      content.push(
        <>
          <tr>
            <td className={styles.name}>{objKey}</td>
            <td>{String(objValue)}</td>
          </tr>
        </>
      );
    }

    for (const objKey in val) {
      const item = val;
      const objValue = item[objKey];
      pushContent(objKey, objValue);
    }
    return content;
  });

  return (
    <div className={styles.body}>
      <h1>Mac Address Records</h1>

      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.heading}>Heading</th>
              <th className={styles.heading}>Results</th>
            </tr>
          </thead>
          <tbody>{records}</tbody>
        </table>
      </div>
    </div>
  );
}
