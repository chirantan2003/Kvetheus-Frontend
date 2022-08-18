import styles from './dataTable.module.css'

export default function DnsEnumerationTable (props) {
  const data = [props.serverData]

  const records = data.map((val) => {
    val = val.response
    const obj = val

    const content = []

    function pushContent (objKey, objValue) {
      content.push(
        <>
          <tr>
            <td className={styles.name}>{objKey}</td>
            <td>{String(objValue)}</td>
          </tr>
        </>
      )
    }

    for (const objKey in val) {
      const objValue = obj[objKey]

      if (typeof objValue === 'object') {
        for (const newObjKey in objValue) {
          const newObjValue = objValue[newObjKey]
          pushContent(objKey, newObjValue)
        }
      } else {
        pushContent(objKey, objValue)
      }
    }

    return content
  })

  return (
    <div className={styles.body}>
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
      </div>
    </div>
  )
}
