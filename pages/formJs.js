import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

export default function FormJs() {
  const [fWhoIs, setfWhoIs] = useState(false);
  const [fMacAddress, setfMacAddress] = useState(false);
  const [fSubDomains, setfSubDomains] = useState(false);
  const [fDnsEnumeration, setfDnsEnumeration] = useState(false);

  const router = useRouter();

  const submitContact = async (event) => {
    event.preventDefault();
    const linkUrl = event.target.link.value;
    // alert(linkUrl);
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
      // Uncomment the above line to remove the states from URL
    );
    console.log(fWhoIs, "this is values in router");
  };

  const submitWhoIs = async () => {
    setfWhoIs(true);
  };

  const submitMacAddress = async () => {
    setfMacAddress(true);
  };

  const submitSubDomains = async () => {
    setfSubDomains(true);
  };

  const submitDnsEnumeration = async () => {
    setfDnsEnumeration(true);
  };

  return (
    <>
      <div>
        <form onSubmit={submitContact}>
          <label htmlFor="link" className="mb-2 italic">
            Insert Information
          </label>
          <br></br>
          <input
            className="mb-4 border-b-2"
            id="link"
            name="link"
            type="text"
            autocomplete="link"
            required
          />
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
        </form>
      </div>
    </>
  );
}
