import { useEffect, useState } from 'react'
import axios from 'axios'
import DnsEnumerationTable from '../../components/dnsEnumerationTable'

export default function DnsEnumeration (props) {
  const componentUrl = 'domain/records?domain='
  const [fetchData, setFetchData] = useState('')

  useEffect(() => {
    axios
      .post(`${props.mainUrl}${componentUrl}${props.name}`, {
        domain: props.name
      })
      .then(
        (response) => {
          // eslint-disable-next-line no-unused-expressions
          response
          setFetchData(response.data)
        },
        (error) => {
          if (error) return <div>failed to load</div>
        }
      )
  }, [])

  /* eslint no-unreachable-loop: ["error", { "ignore": ["WhileStatement"] }] */
  /* eslint no-unmodified-loop-condition: "off" */
  while (fetchData === '') return <loading>loading...</loading>

  return (
    <div>
      <DnsEnumerationTable serverData={fetchData} />
    </div>
  )
}
