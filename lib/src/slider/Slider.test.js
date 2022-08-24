import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import DxcSlider from "./Slider";

describe("Slider component tests", () => {
  test("Slider renders with correct text", () => {
    const { getByText } = render(<DxcSlider minValue={0} maxValue={100} showLimitsValues />);
    expect(getByText("0")).toBeTruthy();
    expect(getByText("100")).toBeTruthy();
  });
  test("Slider renders with correct initial value when it is uncontrolled", () => {
    const { getByRole } = render(
      <DxcSlider defaultValue={30} minValue={0} maxValue={100} showLimitsValues showInput />
    );
    const slider = getByRole("slider");
    const input = getByRole("textbox");
    expect(slider.getAttribute("aria-valuenow")).toBe("30");
    expect(input.value).toBe("30");
  });
  test("Calls correct function onChange in controlled slider", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} onChange={onChange} showLimitsValues value={13} showInput />
    );
    expect(getByRole("slider").getAttribute("aria-valuenow")).toBe("13");
    expect(getByRole("textbox").value).toBe("13");
    act(() => {
      fireEvent.change(getByRole("textbox"), { target: { value: 25 } });
    });
    expect(onChange).toHaveBeenCalledWith(25);
    expect(getByRole("slider").getAttribute("aria-valuenow")).toBe("13");
    expect(getByRole("textbox").value).toBe("13");
  });
  test("Calls correct function onChange in uncontrolled slider", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} onChange={onChange} showLimitsValues showInput />
    );
    act(() => {
      fireEvent.change(getByRole("textbox"), { target: { value: 25 } });
    });
    expect(onChange).toHaveBeenCalledWith(25);
    expect(getByRole("slider").getAttribute("aria-valuenow")).toBe("25");
    expect(getByRole("textbox").value).toBe("25");
  });
  test("Disabled slider have disabled input", () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} onChange={onChange} showLimitsValues disabled showInput value={13} />
    );
    act(() => {
      fireEvent.change(getByRole("textbox"), { target: { value: 25 } });
    });
    expect(getByRole("textbox").hasAttribute("disabled")).toBeTruthy();
    expect(getByRole("textbox").value).toBe("13");
  });
  test("Calls correct function onDragEnd", () => {
    const onDragEnd = jest.fn();
    const { getByRole } = render(
      <DxcSlider minValue={0} maxValue={100} showLimitsValues showInput onDragEnd={onDragEnd} value={25} />
    );
    act(() => {
      fireEvent.mouseDown(getByRole("slider"));
    });
    act(() => {
      fireEvent.mouseUp(getByRole("slider"));
    });
    expect(onDragEnd).toHaveBeenCalledTimes(1);
  });
  test("Calls correct function labelFormatCallback", () => {
    const labelFormatCallback = jest.fn((x) => `${x}$`);
    const { getByText } = render(
      <DxcSlider
        minValue={0}
        maxValue={100}
        showLimitsValues
        showInput
        value={25}
        labelFormatCallback={labelFormatCallback}
      />
    );
    expect(getByText("0$")).toBeTruthy();
    expect(getByText("100$")).toBeTruthy();
    expect(labelFormatCallback).toHaveBeenCalledTimes(2);
  });
});
