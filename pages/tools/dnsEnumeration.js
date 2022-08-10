import { useEffect, useState } from "react";
import axios from "axios";
import DnsEnumerationTable from "../../components/dnsEnumerationTable";

export default function DnsEnumeration(props) {
  const componentUrl = "domain/records?domain=";
  const [fetchData, setFetchData] = useState("");

  useEffect(() => {
    axios
      .post(`${props.mainUrl}${componentUrl}${props.name}`, {
        domain: props.name,
      })
      .then(
        (response) => {
          response;
          setFetchData(response.data);
        },
        (error) => {
          if (error) return <div>failed to load</div>;
        }
      );
  }, []);

  while (fetchData == "") return <div>loading...</div>;

  return (
    <div>
      <DnsEnumerationTable serverData={fetchData} />
    </div>
  );
}
