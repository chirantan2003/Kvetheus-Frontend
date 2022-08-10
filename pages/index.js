import { useState } from "react";
import Layout from "../components/layout";
import FormJs from "./formJs";

export default function Index() {
  const [linkUrl, setLinkUrl] = useState("");

  return (
    <div>
      <Layout>
        <FormJs setLinkUrl={setLinkUrl} />
      </Layout>
    </div>
  );
}
