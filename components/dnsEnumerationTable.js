import styles from "./whoIsTable.module.css";

export default function DnsEnumerationTable(props) {
  const data = [props.serverData];

  const records = data.map((val) => {
    val = val.response;
    // console.log(Object.keys(val));
    console.log(val, "this is val");
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
      console.log(objKey, "this is Object key");
      const objValue = obj[objKey];
      console.log(objValue, "this is Object Value");

      if (typeof objValue == "object") {
        for (let newObjKey in objValue) {
          //   console.log(objValue[newObjValue], "this is new OBJ VALUEW");
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
