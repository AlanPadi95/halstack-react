import { DxcSwitch, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(false);
  const onChange = (newValue) => {
    changeChecked(newValue);
  };

  return (
    <DxcInset space="large">
      <DxcSwitch
        label="Controlled"
        checked={checked}
        onChange={onChange}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcSwitch,
  DxcInset,
  useState,
};

export default { code, scope };
