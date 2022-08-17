import styles from "./features.module.css";
import Cards from "../components/card";
import whoIs from "../components/images/whois.svg";
import mac from "../components/images/macAddress.svg";
import subDomains from "../components/images/subdomains.svg";
import dns from "../components/images/dns.svg";

export default function Features() {
  return (
    <div className={styles.backgroundImg}>
      <div className={styles.format}>
        <Cards
          title="WhoIs"
          content="Widely used Internet record listing that identifies who owns a domain and how to get in contact with them."
          image={whoIs}
        />
        <Cards
          title="MAC Address"
          content="Information about any MAC Address of a networking card installed into your computer or any other device."
          image={mac}
        />
      </div>

      <div className={styles.format}>
        <Cards
          title="Sub Domains"
          content="Identify subdomains associated with a domain name using passive DNS data."
          image={subDomains}
        />
        <Cards
          title="DNS Enumeration"
          content="Locates all DNS servers and their corresponding records for an
            organisation."
          image={dns}
        />
      </div>
    </div>
  );
}
