import useSWR from 'swr'
import axios from 'axios'
import MacAddressTable from '../../components/macAddressTable'

const fetcher = (url) => axios.get(url).then((response) => response.data)

export default function MacAddress (props) {
  const componentUrl = 'mac?q='
  const { data, error } = useSWR(
    `${props.mainUrl}${componentUrl}${props.name}`,
    fetcher
  )

  if (error) return <loading>failed to load</loading>
  if (!data) return <loading>loading...</loading>

  return (
    <div>
      <MacAddressTable serverData={data} />
    </div>
  )
}
