import React, { Ref, forwardRef, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { DxcEditableMarkdownProps, MarkdownProps } from "./types";
import {
  DxcBulletedList,
  DxcContainer,
  DxcDivider,
  DxcFlex,
  DxcHeading,
  DxcImage,
  DxcLink,
  DxcParagraph,
  DxcTable,
  DxcTabs,
  DxcTextarea,
  DxcTypography,
} from "../main";

/**
 * The keys in components are HTML equivalents for the things you write with markdown (such as h1 for # heading).
 * Normally, in markdown, those are:
 * a, blockquote, br, code, em, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, pre, strong, and ul.
 * With remark-gfm, you can also use del, input, table, tbody, td, th, thead, and tr.
 * Other remark or rehype plugins that add support for new constructs will also work with react-markdown.
 * The props that are passed are what you probably would expect:
 * an a (link) will get href (and title) props, and img (image) an src, alt and title, etc.
 * Every component will receive a node.
 * This is the original Element from hast element being turned into a React element.
 */
const DxcMarkdownComponents: object = {
  a: DxcLink,
  h1(props) {
    return <DxcHeading {...props} text={props.children} level={1} as={"h1"} />;
  },
  h2(props) {
    return <DxcHeading {...props} text={props.children} level={2} as={"h2"} />;
  },
  h3(props) {
    return <DxcHeading {...props} text={props.children} level={3} as={"h3"} />;
  },
  h4(props) {
    return <DxcHeading {...props} text={props.children} level={4} as={"h4"} />;
  },
  h5(props) {
    return <DxcHeading {...props} text={props.children} level={5} as={"h5"} />;
  },
  hr: DxcDivider,
  img: DxcImage,
  li(props) {
    const { children } = props;
    return <DxcBulletedList.Item>{children}</DxcBulletedList.Item>;
  },
  //FIXME: Lines added on render
  ul(props) {
    const { children } = props;
    return <DxcBulletedList type="circle">{children}</DxcBulletedList>;
  },
  //FIXME: Lines added on render
  ol(props) {
    const { children } = props;
    return <DxcBulletedList type="number">{children}</DxcBulletedList>;
  },
  p(props) {
    const { children } = props;
    return <DxcParagraph>{children}</DxcParagraph>;
  },
  //FIXME: Lines added on render
  strong(props) {
    const { children } = props;
    return (
      <DxcTypography fontWeight="600" as="strong">
        {children}
      </DxcTypography>
    );
  },
  table: DxcTable,
  blockquote(props) {
    return <DxcTypography {...props} as="blockquote" />;
  },
  code(props) {
    const { children } = props;
    return (
      <DxcTypography fontFamily="Source Code Pro, monospace" as="blockquote">
        {children}
      </DxcTypography>
    );
  },
  //FIXME: Lines added on render
  em(props) {
    const { children } = props;
    return (
      <DxcTypography fontStyle="italic" as="em">
        {children}
      </DxcTypography>
    );
  },
  pre(props) {
    const { children } = props;
    return (
      <DxcTypography whiteSpace="pre" as="pre">
        {children}
      </DxcTypography>
    );
  },
};

/**
 * Component with two tabs:
 * The first one with a textarea to write the markdown
 * and the second one 'Preview' to see the markdown with the Halstack styles
 * @param disabled
 * @param margin
 * @param tabIndex
 * @param text
 * @returns A JSX element
 */
const DxcEditableMarkdown = ({
  disabled = false,
  margin,
  tabIndex = 0,
  text,
  ...otherProps
}: DxcEditableMarkdownProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const [markdownText, setMarkdownText] = useState(text);
  const onTabClick = (i) => {
    setActiveTab(i);
  };
  const onChangeMarkdownText = ({ value, error }) => {
    setMarkdownText(value);
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <DxcFlex direction="column" gap="0.5rem">
            <DxcTextarea
              onChange={onChangeMarkdownText}
              onBlur={onChangeMarkdownText}
              value={markdownText}
              size="fillParent"
            />
            <DxcTypography color="#999999" fontSize="0.75rem">
              {"Styling with "}
              <DxcLink icon="markdown" href="https://www.markdownguide.org/basic-syntax/">
                {"Markdown"}
              </DxcLink>
              {" is supported"}
            </DxcTypography>
          </DxcFlex>
        );
      case 1:
        return (
          <DxcContainer
            borderRadius="0.25rem"
            border={{ width: "0.075rem", style: "solid", color: "color_black" }}
            padding="medium"
          >
            <Markdown rehypePlugins={[rehypeRaw, remarkGfm]} components={DxcMarkdownComponents}>
              {markdownText}
            </Markdown>
          </DxcContainer>
        );
      default:
        console.error("Selected tab is not available");
    }
  };

  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcTabs
        activeTabIndex={activeTab}
        onTabClick={onTabClick}
        tabs={[
          {
            label: "Write",
            icon: "edit",
          },
          {
            label: "Preview",
            icon: "visibility",
          },
        ]}
      />
      {getTabContent()}
    </DxcFlex>
  );
};

const DxcMarkdown = forwardRef(
  (
    { readOnly = false, disabled = false, margin, tabIndex = 0, children, ...otherProps }: MarkdownProps,
    ref: Ref<HTMLAnchorElement>
  ): JSX.Element =>
    readOnly ? (
      <Markdown rehypePlugins={[rehypeRaw, remarkGfm]} components={DxcMarkdownComponents}>
        {children}
      </Markdown>
    ) : (
      <DxcEditableMarkdown disabled={disabled} text={children} margin={margin} tabIndex={tabIndex} />
    )
);

export default DxcMarkdown;
