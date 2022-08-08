import useSWR from "swr";
import axios from "axios";
import SubdomainsTable from "../../components/subdomainsTable";
import { useEffect, useState } from "react";

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
          while (!response) return <div>loading...</div>;
          console.log(response);
          // console.log(response.data.subdomains);
          setFetchData(response.data.subdomains);
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
      <SubdomainsTable serverData={fetchData} />
    </div>
  );
}
