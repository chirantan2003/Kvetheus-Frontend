import { useRouter } from "next/router";
import { useState } from "react";

export default function FormJs() {
  const [fWhoIs, setfWhoIs] = useState(false);
  const [fMacAddress, setfMacAddress] = useState(false);
  const [fSubDomains, setfSubDomains] = useState(false);
  const [fDnsEnumeration, setfDnsEnumeration] = useState(false);

  const router = useRouter();

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

  const validMAC = new RegExp("^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$");

  const validURL = new RegExp(
    "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
  );

  const submitWhoIs = async () => {
    if (!validURL.test(link.value)) {
      alert("Enter Valid URL");
      link.value = null;
    } else {
      setfWhoIs(true);
    }
  };

  const submitMacAddress = async () => {
    if (!validMAC.test(link.value)) {
      alert("Enter Valid MAC Address");
      link.value = null;
    } else {
      setfMacAddress(true);
    }
  };

  const submitSubDomains = async () => {
    if (!validURL.test(link.value)) {
      alert("Enter Valid URL");
      link.value = null;
    } else {
      setfSubDomains(true);
    }
  };

  const submitDnsEnumeration = async () => {
    if (!validURL.test(link.value)) {
      alert("Enter Valid URL");
      link.value = null;
    } else {
      setfDnsEnumeration(true);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submitContact}>
          <label htmlFor="link" className="mb-2 italic">
            KVETHEUS
          </label>
          <br></br>
          <input
            className="mb-4 border-b-2"
            id="link"
            name="link"
            type="text"
            autoComplete="link"
            placeholder="Search"
            required
          />
          <div className="submitButtons">
            <button
              onClick={submitWhoIs}
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Who is
            </button>
            <button
              onClick={submitMacAddress}
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Mac Address
            </button>
            <button
              onClick={submitSubDomains}
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Sub Domains
            </button>
            <button
              onClick={submitDnsEnumeration}
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Dns Enumeration
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
