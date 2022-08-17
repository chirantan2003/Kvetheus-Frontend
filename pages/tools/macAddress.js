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

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <MacAddressTable serverData={data} />
    </div>
  )
}
