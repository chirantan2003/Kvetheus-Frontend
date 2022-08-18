import { useEffect, useState } from 'react'
import axios from 'axios'
import SubdomainsTable from '../../components/subdomainsTable'

export default function WhoIs (props) {
  const componentUrl = 'domain/subdomains?q='
  const [fetchData, setFetchData] = useState('')

  useEffect(() => {
    axios
      .post(`${props.mainUrl}${componentUrl}${props.name}`, {
        q: props.name
      })
      .then(
        (response) => {
          // eslint-disable-next-line no-unused-expressions
          response
          setFetchData(response.data.subdomains)
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
      <SubdomainsTable serverData={fetchData} />
    </div>
  )
}
