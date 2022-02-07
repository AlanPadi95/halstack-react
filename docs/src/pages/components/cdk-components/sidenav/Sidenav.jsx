import React from "react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import SidenavPropsTable from "./api.jsx";
import SidenavLinkPropsTable from "./linkapi.jsx";
import SidenavSubtitlePropsTable from "./subtitleapi.jsx";
import SidenavTitlePropsTable from "./titleapi.jsx";
import { DxcHeading, DxcLink } from "@dxc-technology/halstack-react";
import defaultSidenav from "./examples/default";
import compoundSidenav from "./examples/compound";

function Sidenav() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Sidenav" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <SidenavPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Children" margin={{ bottom: "small" }} />
        <p>
          This component includes different compound components that are
          customized following the{" "}
          <DxcLink
            href="https://developer.dxc.com/design/guidelines/components/sidenav"
            underlined={false}
            text="design guidelines"
          ></DxcLink>
          .
        </p>
        <DxcHeading text="DxcSidenav.Title" level={4} weight="bold" margin={{ bottom: "small", top: "small" }} />
        <SidenavTitlePropsTable />
        <DxcHeading text="DxcSidenav.Subtitle" level={4} weight="bold" margin={{ bottom: "small", top: "small" }} />
        <SidenavSubtitlePropsTable />
        <DxcHeading text="DxcSidenav.Link" level={4} weight="bold" margin={{ bottom: "small", top: "small" }} />
        <p>Customized link that allows the navigation.</p>
        <DxcHeading
          text="Props"
          level={5}
          weight="bold"
          margin={{ bottom: "small" }}
        />{" "}
        <SidenavLinkPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Default Sidenav" example={defaultSidenav}></Example>
        <Example
          title="Sidenav with compound components"
          example={compoundSidenav}
        ></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Sidenav;
