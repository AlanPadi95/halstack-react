import { DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import basicUsage from "./examples/basicUsage";
import TableCode from "@/common/TableCode";
import StatusTag from "@/common/StatusTag";

const sections = [
  {
    title: "Code",
    content: (
      <>
        <DxcTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>level</td>
              <td>
                <TableCode>1 | 2 | 3 | 4 | 5</TableCode>
              </td>
              <td>
                Defines the heading level from 1 to 5. The styles of the heading
                are applied according to the level. The html tag of the heading
                will be the one specified in the 'as' prop. If 'as' is not
                specified, the html tag of the heading is the one specified in
                the 'level' prop.
              </td>
              <td>
                <TableCode>1</TableCode>
              </td>
            </tr>
            <tr>
              <td>
                <DxcFlex direction="column" gap="0.25rem" alignItems="baseline">
                  <StatusTag status="Required">Required</StatusTag>text
                </DxcFlex>
              </td>
              <td>
                <TableCode>string</TableCode>
              </td>
              <td>Heading text.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>weight</td>
              <td>
                <TableCode>'light' | 'normal' | 'bold'</TableCode>
              </td>
              <td>Modifies the default weight of the heading.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>as</td>
              <td>
                <TableCode>'h1' | 'h2' | 'h3' | 'h4'| 'h5'</TableCode>
              </td>
              <td>Specifies the HTML tag of the heading.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>margin</td>
              <td>
                <TableCode>
                  'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
                  | 'xxlarge' | Margin
                </TableCode>
              </td>
              <td>
                Size of the margin to be applied to the component. You can pass
                an object with 'top', 'bottom', 'left' and 'right' properties in
                order to specify different margin sizes.
              </td>
              <td>-</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Examples",
    subSections: [
      {
        title: "Basic usage",
        content: <Example example={basicUsage} defaultIsVisible />,
      },
    ],
  },
];

const HeadingCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/heading/code/HeadingCodePage.tsx" />
    </DxcFlex>
  );
};

export default HeadingCodePage;
