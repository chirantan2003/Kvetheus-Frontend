import styles from "./whoIsTable.module.css";

export default function WhoIsTable(props) {
  const data = [props.serverData];

  const records = data.map((val) => {
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

    outerLoop: for (let objKey in val) {
      const item = val;
      const objValue = item[objKey];

      if (objKey == "rawdata") {
        continue outerLoop;
      }

      if (objKey == "contacts") {
        const arr = [objValue].map((valArr) => {
          if (valArr.owner == null) {
            pushContent(objKey, null);
          } else {
            const owner = valArr.owner[0];
            for (let arrKey in owner) {
              const arrKeyValue = owner[arrKey];
              pushContent("Contacts " + arrKey, arrKeyValue);
            }
          }
        });
        continue outerLoop;
      }

      // for keys nested in registrar
      if (objKey == "registrar") {
        const arr = [objValue].map((valArr) => {
          for (let arrKey in valArr) {
            const arrKeyValue = valArr[arrKey];
            pushContent("Registrar " + arrKey, arrKeyValue);
          }
        });
        continue outerLoop;
      }

      pushContent(objKey, objValue);
    }
    return content;
  });

  return (
    <>
      <h1>Domain Records</h1>

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
