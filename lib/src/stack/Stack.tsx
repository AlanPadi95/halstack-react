import React from "react";
import styled from "styled-components";
import StackPropsType from "./types";

const DxcStack = ({
  alignX = "stretch",
  as = "div",
  divider = false,
  gutter = "0rem",
  reverse = false,
  children,
}: StackPropsType): JSX.Element => {
  return (
    <Stack gutter={gutter} alignX={alignX} reverse={reverse} as={as}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {child}
            {divider && index !== React.Children.count(children) - 1 && <Divider />}
          </>
        );
      })}
    </Stack>
  );
};

const Divider = styled.div`
  height: 1px;
  background-color: #999999;
`;

const Stack = styled.div<StackPropsType>`
  display: flex;
  ${({ alignX, gutter, reverse }) => `
    flex-direction: ${reverse ? "column-reverse" : "column"};
    align-items: ${alignX === "start" || alignX === "end" ? `flex-${alignX}` : alignX};
    gap: ${gutter};
  `}
`;

export default DxcStack;
