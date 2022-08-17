import { useRouter } from "next/router";
import { useState } from "react";

export default function FormJs() {
  const [fWhoIs, setfWhoIs] = useState(false);
  const [fMacAddress, setfMacAddress] = useState(false);
  const [fSubDomains, setfSubDomains] = useState(false);
  const [fDnsEnumeration, setfDnsEnumeration] = useState(false);

  const router = useRouter();
  const title = router.query.title;

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
    <>
      <div className="form">
        <form onSubmit={submitContact}>
          <label htmlFor="link" className="mb-2 italic">
            Kvetheus<span className="text-white">.</span>
          </label>
          <br />
          <input
            className="mb-4 border-b-2"
            id="link"
            name="link"
            type="text"
            autoComplete="link"
            placeholder={title}
            required
          />
          <div className="submitButtons">
            <button onClick={submitTitle} type="submit">
              Kvetheus Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
