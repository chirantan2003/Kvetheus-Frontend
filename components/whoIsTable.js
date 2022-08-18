import styles from './dataTable.module.css'

export default function WhoIsTable (props) {
  const data = [props.serverData]

  const records = data.map((val) => {
    const content = []

    function pushContent (objKey, objValue) {
      content.push(
        <>
          <tr>
            <td className={styles.name}>{objKey}</td>
            <td className={styles.data}>{String(objValue)}</td>
          </tr>
        </>
      )
    }

    /* eslint no-labels: ["error", { "allowLoop": true }] */
    outerLoop: for (const objKey in val) {
      const item = val
      const objValue = item[objKey]

      if (objKey === 'rawdata') {
        continue outerLoop
      }

      if (objKey === 'contacts') {
        [objValue].forEach((valArr) => {
          if (valArr.owner == null) {
            pushContent(objKey, null)
          } else {
            const owner = valArr.owner[0]
            for (const arrKey in owner) {
              const arrKeyValue = owner[arrKey]
              pushContent('Contacts ' + arrKey, arrKeyValue)
            }
          }
        })
        continue outerLoop
      }

      // for keys nested in registrar
      if (objKey === 'registrar') {
        [objValue].forEach((valArr) => {
          for (const arrKey in valArr) {
            const arrKeyValue = valArr[arrKey]
            pushContent('Registrar ' + arrKey, arrKeyValue)
          }
        })
        continue outerLoop
      }

      pushContent(objKey, objValue)
    }
    return content
  })

  return (
    <div className={styles.body}>
      <h1>Domain Records</h1>

      <div className={styles.flex}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.heading}>Heading</th>
              <th className={styles.heading}>Results</th>
            </tr>
          </thead>
          <tbody>{records}</tbody>
        </table>
        <div className={styles.empty} />
      </div>
    </div>
  )
}
