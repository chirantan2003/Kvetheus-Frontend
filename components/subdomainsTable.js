import styles from "./whoIsTable.module.css";

export default function SubdomainsTable(props) {
  const data = [props.serverData];

  const records = data.map((val) => {
    let content = [];

    function pushContent(dataValue) {
      content.push(
        <>
          <tr>
            <td>{dataValue}</td>
          </tr>
        </>
      );
    }

    for (let obj in val) {
      const item = val;
      const objValue = item[obj];
      pushContent(objValue);
    }
    return content;
  });

  return (
    <>
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
        <pre>{JSON.stringify(data, null, 1)}</pre>
      </div>
    </>
  );
}
