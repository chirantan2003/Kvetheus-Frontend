import useSWR from "swr";
import axios from "axios";
import WhoIsTable from "../../components/whoIsTable";

export default function WhoIs(props) {
  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const componentUrl = "domain/whois?q=";

  const { data, error } = useSWR(
    `${props.mainUrl}${componentUrl}${props.name}`,
    fetcher
  );

  if (error) return <loading>failed to load</loading>;
  if (!data) return <loading>loading...</loading>;

  return (
    <div>
      <WhoIsTable serverData={data} />
    </div>
  );
}
