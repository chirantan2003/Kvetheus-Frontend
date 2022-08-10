import styles from "./whoIsTable.module.css";

export default function DnsEnumerationTable(props) {
  const data = [props.serverData];

  const records = data.map((val) => {
    val = val.response;
    const obj = val;

    let content = [];

    function pushContent(objKey, objValue) {
      content.push(
        <>
          <tr>
            <td>{objKey}</td>
            <td>{String(objValue)}</td>
          </tr>
        </>
      );
    }

    for (let objKey in val) {
      const objValue = obj[objKey];

      if (typeof objValue == "object") {
        for (let newObjKey in objValue) {
          const newObjValue = objValue[newObjKey];
          pushContent(objKey, newObjValue);
        }
      } else {
        pushContent(objKey, objValue);
      }
    }

    return content;
  });

  return (
    <>
      <h1>DnsEnumeration</h1>

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
        <pre>{JSON.stringify(data, null, 1)}</pre>
      </div>
    </>
  );
}
