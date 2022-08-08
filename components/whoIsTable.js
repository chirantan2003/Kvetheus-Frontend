import styles from "./whoIsTable.module.css";

export default function WhoIsTable(props) {
  const data = [props.serverData];

  const records = data.map((val) => {
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

    outerLoop: for (let objKey in val) {
      console.log(objKey + ":", obj[objKey]);
      const item = val;
      // console.log(objKey, "this is Object key");
      const objValue = item[objKey];
      // console.log(objValue, "this is Object Value");

      if (objKey == "rawdata") {
        continue outerLoop;
      }

      if (objKey == "contacts") {
        const arr = [objValue].map((valArr) => {
          if (valArr.owner == null) {
            pushContent(objKey, null);
          } else {
            // console.log(valArr.owner[0], "value in contacts arr ");
            const owner = valArr.owner[0];
            for (let arrKey in owner) {
              // console.log(arrKey, "this is arrKey");
              const arrKeyValue = owner[arrKey];
              // console.log(arrKeyValue, "this is Array key Value");
              pushContent("Contacts " + arrKey, arrKeyValue);
            }
          }
        });
        continue outerLoop;
      }

      // for keys nested in registrar
      if (objKey == "registrar") {
        // console.log(objValue.owner[0].handle, "ths is contacts");
        const arr = [objValue].map((valArr) => {
          console.log(valArr, "value in arr");
          for (let arrKey in valArr) {
            // console.log(arrKey, "this is arrKey");
            const arrKeyValue = valArr[arrKey];
            // console.log(arrKeyValue, "this is Array key Value");

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
