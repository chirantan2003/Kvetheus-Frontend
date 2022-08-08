import styles from "./whoIsTable.module.css";

export default function MacAddressTable(props) {
  const data = [props.serverData];

  const records = data.map((val) => {
    val = val.result;
    // console.log(Object.keys(val));
    const obj = val;

    let content = [];

    function pushContent(objKey, objValue) {
      content.push(
        <>
          <tr>
            <td>{objKey}</td>
            <td>{String(objValue)}</td>
          </tr>
          <br></br>
        </>
      );
    }

    for (let objKey in val) {
      console.log(objKey + ":", obj[objKey]);
      const item = val;
      console.log(objKey, "this is Object key");
      const objValue = item[objKey];
      console.log(objValue, "this is Object Value");

      pushContent(objKey, objValue);
    }
    return content;
  });

  return (
    <>
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
        <pre>{JSON.stringify(data, null, 1)}</pre>
      </div>
    </>
  );
}
