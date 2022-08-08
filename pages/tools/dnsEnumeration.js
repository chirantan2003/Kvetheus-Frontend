import axios from "axios";
import { useEffect, useState } from "react";
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
          while (!response) return <div>loading...</div>;
          console.log(response);
          // console.log(response.data.subdomains);
          setFetchData(response.data);
        },
        (error) => {
          console.log(error);
          if (error) return <div>failed to load</div>;
        }
      );
  }, []);

  // console.log(data.data, "this is data consoled");
  console.log(fetchData, "this is fetched data");

  return (
    <div>
      <DnsEnumerationTable serverData={fetchData} />
    </div>
  );
}
