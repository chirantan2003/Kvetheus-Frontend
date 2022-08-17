import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import searchIcon from "../components/images/searchIcon.svg";
import logo from "../components/images/logo.svg";

export default function FormJs() {
  const [fWhoIs, setfWhoIs] = useState(false);
  const [fMacAddress, setfMacAddress] = useState(false);
  const [fSubDomains, setfSubDomains] = useState(false);
  const [fDnsEnumeration, setfDnsEnumeration] = useState(false);

  const router = useRouter();
  const title = router.query.title;
  const placeholder = `Search for a ${title}....`;

  const submitContact = async (event) => {
    event.preventDefault();
    const linkUrl = event.target.link.value;
    router.push(
      {
        pathname: "results",
        query: {
          link: linkUrl,
          whoIsTrue: fWhoIs,
          macAddressTrue: fMacAddress,
          subDomainsTrue: fSubDomains,
          dnsEnumerationTrue: fDnsEnumeration,
        },
      },
      "results"
    );
  };

  const submitTitle = async () => {
    if (title == "WhoIs") {
      console.log("this works");
      submitWhoIs();
    } else if (title == "MAC Address") {
      submitMacAddress();
    } else if (title == "Sub Domains") {
      submitSubDomains();
    } else if (title == "DNS Enumeration") {
      submitDnsEnumeration();
    }
  };

  const validMAC = new RegExp("^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$");

  const validURL = new RegExp(
    "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
  );

  function submitWhoIs() {
    if (!validURL.test(link.value)) {
      alert("Enter Valid URL");
      link.value = null;
    } else {
      setfWhoIs(true);
    }
  }

  function submitMacAddress() {
    if (!validMAC.test(link.value)) {
      alert("Enter Valid MAC Address");
      link.value = null;
    } else {
      setfMacAddress(true);
    }
  }

  function submitSubDomains() {
    if (!validURL.test(link.value)) {
      alert("Enter Valid URL");
      link.value = null;
    } else {
      setfSubDomains(true);
    }
  }

  function submitDnsEnumeration() {
    if (!validURL.test(link.value)) {
      alert("Enter Valid URL");
      link.value = null;
    } else {
      setfDnsEnumeration(true);
    }
  }

  return (
    <div className="form">
      <Image src={logo} />
      <form onSubmit={submitContact}>
        <h1>{title}</h1>
        <div className="searchBar">
          <input
            className="mb-4 border-b-2"
            id="link"
            name="link"
            type="text"
            autoComplete="link"
            placeholder={placeholder}
            required
          />
          <button onClick={submitTitle} type="submit">
            <Image src={searchIcon} />
          </button>
        </div>
      </form>
    </div>
  );
}
