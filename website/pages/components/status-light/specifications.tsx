import Head from "next/head";
import type { ReactElement } from "react";
import StatusLightSpecsPage from "../../../screens/components/status-light/specs/StatusLightSpecsPage";
import StatusLightPageLayout from "../../../screens/components/status-light/StatusLightPageLayout";

const Specifications = () => {
  return (
    <>
      <Head>
        <title>Status Light Specs — Halstack Design System</title>
      </Head>
      <StatusLightSpecsPage></StatusLightSpecsPage>
    </>
  );
};

Specifications.getLayout = function getLayout(page: ReactElement) {
  return <StatusLightPageLayout>{page}</StatusLightPageLayout>;
};

export default Specifications;
