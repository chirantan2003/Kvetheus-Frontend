import { useState } from "react";
import Layout from "../components/layout";
import FormJs from "./formJs";
import Results from "./results";
import React from "react";

export default function Home() {
  const [linkUrl, setLinkUrl] = useState("");

  return (
    <div>
      <Layout>
        <FormJs setLinkUrl={setLinkUrl} />
      </Layout>
    </div>
  );
}
