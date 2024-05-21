import React from "react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcMarkdown from "./Markdown";

export default {
  title: "Markdown",
  component: DxcMarkdown,
};

export const EditableMarkdownComponent = () => (
  <>
    <Title title="Headings as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown>
        {`
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
        `}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Link as markdown" level={4} />
    <ExampleContainer>
      <DxcMarkdown>{"[DXC Developer Central](https://developer.dxc.com/halstack/)"}</DxcMarkdown>
    </ExampleContainer>
    <Title title="Separator as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown>{"---"}</DxcMarkdown>
    </ExampleContainer>
    <Title title="Paragraph as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown>
        {`
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          `}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Strong text as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown>
        {`Lorem ipsum dolor sit amet, **consectetur adipiscing elit**.
**Suspendisse malesuada lacus ex**, sit amet blandit leo lobortis eget.`}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Italic text as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown>
        {`Lorem ipsum dolor sit amet, *consectetur adipiscing elit*.
_Suspendisse malesuada lacus ex_, sit amet blandit leo lobortis eget.`}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Image as markdown" level={4} />
    <ExampleContainer>
      <DxcMarkdown>
        {
          "![DXC Technology](https://dxc.com/content/dam/dxc/projects/dxc-com/us/images/about-us/newsroom/logos-for-media/horizontal/DXC%20Logo%20Horiz_Purple+Black%20RGB.png)"
        }
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Ordered list as markdown" level={3} />
    <DxcMarkdown>
      {`1. First item
2. Second item
3. Third item`}
    </DxcMarkdown>
    <Title title="Unordered list as markdown" level={3} />
    <DxcMarkdown>
      {`- First item
- Second item
- Third item`}
    </DxcMarkdown>
    <Title title="Table as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown>
        {`| Header1 | Header2 | Header3 |
|---------|---------|---------|
| value1  | value2  | value3  |
| value12 | value22 | value32 |
| value13 | value23 | value33 |`}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Blockquote as markdown" level={3} />
    <DxcMarkdown>
      {`> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
> Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
    </DxcMarkdown>
    <Title title="Code as markdown" level={3} />
    <DxcMarkdown>
      {`\`\`\`html
<h1>My first heading</h1>
\`\`\``}
    </DxcMarkdown>
    <Title title="Pre as markdown" level={3} />
    <DxcMarkdown>
      {`\`\`\`
echo "my first <pre/>"
\`\`\``}
    </DxcMarkdown>
  </>
);

export const NotEditableMarkdownComponent = () => (
  <>
    <Title title="Headings as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {`
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
        `}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Link as markdown" level={4} />
    <ExampleContainer>
      <DxcMarkdown readOnly>{"[DXC Developer Central](https://developer.dxc.com/halstack/)"}</DxcMarkdown>
    </ExampleContainer>
    <Title title="Separator as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>{"---"}</DxcMarkdown>
    </ExampleContainer>
    <Title title="Paragraph as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {`
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          `}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Strong text as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {`Lorem ipsum dolor sit amet, **consectetur adipiscing elit**.
**Suspendisse malesuada lacus ex**, sit amet blandit leo lobortis eget.`}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Italic text as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {`Lorem ipsum dolor sit amet, *consectetur adipiscing elit*.
_Suspendisse malesuada lacus ex_, sit amet blandit leo lobortis eget.`}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Image as markdown" level={4} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {
          "![DXC Technology](https://dxc.com/content/dam/dxc/projects/dxc-com/us/images/about-us/newsroom/logos-for-media/horizontal/DXC%20Logo%20Horiz_Purple+Black%20RGB.png)"
        }
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Ordered list as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {`1. First item
2. Second item
3. Third item`}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Unordered list as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {`- First item
- Second item
- Third item`}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Table as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {`| Header1 | Header2 | Header3 |
|---------|---------|---------|
| value1  | value2  | value3  |
| value12 | value22 | value32 |
| value13 | value23 | value33 |`}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Blockquote as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {`> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
> Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Code as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {`\`\`\`html
<h1>My first heading</h1>
\`\`\``}
      </DxcMarkdown>
    </ExampleContainer>
    <Title title="Pre as markdown" level={3} />
    <ExampleContainer>
      <DxcMarkdown readOnly>
        {`\`\`\`
echo "my first <pre/>"
\`\`\``}
      </DxcMarkdown>
    </ExampleContainer>
  </>
);
