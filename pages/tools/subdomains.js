import { useEffect, useState } from "react";
import axios from "axios";
import SubdomainsTable from "../../components/subdomainsTable";

export default function WhoIs(props) {
  const componentUrl = "domain/subdomains?q=";
  const [fetchData, setFetchData] = useState("");

  useEffect(() => {
    axios
      .post(`${props.mainUrl}${componentUrl}${props.name}`, {
        q: props.name,
      })
      .then(
        (response) => {
          response;
          setFetchData(response.data.subdomains);
        },
        (error) => {
          if (error) return <div>failed to load</div>;
        }
      );
  }, []);

  while (fetchData == "") return <div>loading...</div>;

  return (
    <div>
      <SubdomainsTable serverData={fetchData} />
    </div>
  );
}
