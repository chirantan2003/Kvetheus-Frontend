import styles from "./dataTable.module.css";

export default function SubdomainsTable(props) {
  const data = [props.serverData];

  const records = data.map((val) => {
    const content = [];

    function pushContent(dataValue) {
      content.push(
        <>
          <tr>
            <td>{dataValue}</td>
          </tr>
        </>
      );
    }

    for (const obj in val) {
      const item = val;
      const objValue = item[obj];
      pushContent(objValue);
    }
    return content;
  });

  return (
    <div className={styles.body}>
      <h1>Subdomains records</h1>

      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.heading}>Results</th>
            </tr>
          </thead>
          <tbody>{records}</tbody>
        </table>
      </div>
    </div>
  );
}
