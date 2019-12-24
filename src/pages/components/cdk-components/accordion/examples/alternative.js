import { DxcAccordion } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [isExpanded, changeIsExpanded] = useState(false);
  const onChange = newValue => {
    changeIsExpanded(newValue);
  };

  return (
    <div style={{ margin: "15px" }}>
      <DxcAccordion
        label="Alternative Accordion"
        mode="alternative"
        isExpanded={isExpanded}
        onChange={onChange}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      </DxcAccordion>
    </div>
  );
}`;

const scope = {
  DxcAccordion,
  useState
};

export default { code, scope };
