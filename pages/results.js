import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import WhoIs from "./tools/whoIs";
import MacAddress from "./tools/macAddress";
import Subdomains from "./tools/subdomains";
import DnsEnumeration from "./tools/dnsEnumeration";

export default function Results() {
  const router = useRouter();
  const rQuery = router.query;

  const [whoIstrue, setWhoIsTrue] = useState(false);
  const [macAddressTrue, setMacAddressTrue] = useState(false);
  const [subDomainsTrue, setSubDomainsTrue] = useState(false);
  const [dnsEnumerationTrue, setDnsEnumerationTrue] = useState(false);

  const url = "https://kvetheus-production.up.railway.app/v1/api/";

  const link = rQuery.link;

  useEffect(() => {
    setWhoIsTrue(rQuery.whoIsTrue);
    setMacAddressTrue(rQuery.macAddressTrue);
    setSubDomainsTrue(rQuery.subDomainsTrue);
    setDnsEnumerationTrue(rQuery.dnsEnumerationTrue);
  }, []);

  const componentRender = () => {
    if (whoIstrue == "true") {
      return <WhoIs name={link} mainUrl={url} />;
    } else if (macAddressTrue == "true") {
      return <MacAddress name={link} mainUrl={url} />;
    } else if (subDomainsTrue == "true") {
      return <Subdomains name={link} mainUrl={url} />;
    } else if (dnsEnumerationTrue == "true") {
      return <DnsEnumeration name={link} mainUrl={url} />;
    }
  };

  return <div>{componentRender()}</div>;
}
