import useSWR from "swr";
import axios from "axios";
import WhoIsTable from "../../components/whoIsTable";

export default function WhoIs(props) {
  const fetcher = (url) => axios.get(url).then((response) => response.data);
  console.log(props.name, "this is domain name");
  const componentUrl = "domain/whois?q=";
  const { data, error } = useSWR(
    `${props.mainUrl}${componentUrl}${props.name}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <WhoIsTable serverData={data} />
    </div>
  );
}
