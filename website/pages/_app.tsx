import { ReactElement, ReactNode, useMemo, useState } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import styled from "styled-components";
import {
  DxcApplicationLayout,
  DxcTextInput,
  HalstackProvider,
} from "@dxc-technology/halstack-react";
import "../global-styles.css";
import { responsiveSizes } from "../screens/common/variables";
import SidenavLogo from "@/common/sidenav/SidenavLogo";
import { useRouter } from "next/router";
import {
  LinksSectionDetails,
  LinksSections,
  themeGeneratorLinks,
} from "@/common/pagesList";
import Link from "next/link";
import StatusBadge from "@/common/StatusBadge";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
type ApplicationLayoutWrapperProps = {
  condition: boolean;
  wrapper: (children: React.ReactNode) => JSX.Element;
  children: ReactNode;
};

const ApplicationLayoutWrapper = ({
  condition,
  wrapper,
  children,
}: ApplicationLayoutWrapperProps): JSX.Element => (
  <>{condition ? wrapper(children) : children}</>
);

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  const componentWithLayout = getLayout(<Component {...pageProps} />);

  const [filter, setFilter] = useState("");
  const { asPath: currentPath } = useRouter();

  const filteredLinks = useMemo(() => {
    const filtered: LinksSectionDetails[] = [];
    LinksSections.map((section) => {
      const sectionFilteredLinks = section?.links.filter((link) =>
        link.label.toLowerCase().includes(filter.toLowerCase())
      );
      if (sectionFilteredLinks.length) {
        filtered.push({ label: section.label, links: sectionFilteredLinks });
      }
    });
    return filtered;
  }, [filter]);

  const onFilterInputChange = ({ value }: { value: string }) => {
    setFilter(value);
  };

  const matchPaths = (linkPath: string) => {
    const pathToBeMatched = currentPath.split("#")[0].slice(0, -1);
    const desiredPaths = [
      linkPath,
      `${linkPath}/specifications`,
      `${linkPath}/usage`,
    ];
    return desiredPaths.includes(pathToBeMatched);
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <HalstackProvider>
        <ApplicationLayoutWrapper
          condition={!themeGeneratorLinks.includes(currentPath)}
          wrapper={(children) => (
            <DxcApplicationLayout
              visibilityToggleLabel="Menu"
              sidenav={
                <DxcApplicationLayout.SideNav title={<SidenavLogo />}>
                  <DxcApplicationLayout.SideNav.Section>
                    <DxcTextInput
                      placeholder="Search docs"
                      value={filter}
                      onChange={onFilterInputChange}
                      size="fillParent"
                      clearable
                      margin={{
                        top: "large",
                        bottom: "large",
                        right: "medium",
                        left: "medium",
                      }}
                    />
                  </DxcApplicationLayout.SideNav.Section>
                  {filteredLinks?.map(({ label, links }) => (
                    <DxcApplicationLayout.SideNav.Section key={label}>
                      <DxcApplicationLayout.SideNav.Group title={label}>
                        {links.map(({ label, path, status }) => (
                          <Link
                            key={`${label}-${path}`}
                            href={path}
                            passHref
                            legacyBehavior
                          >
                            <DxcApplicationLayout.SideNav.Link
                              selected={matchPaths(path)}
                            >
                              {label}
                              {status && status !== "stable" && (
                                <StatusBadge hasTitle status={status} />
                              )}
                            </DxcApplicationLayout.SideNav.Link>
                          </Link>
                        ))}
                      </DxcApplicationLayout.SideNav.Group>
                    </DxcApplicationLayout.SideNav.Section>
                  ))}
                  <DxcApplicationLayout.SideNav.Section>
                    <DxcApplicationLayout.SideNav.Link
                      href="https://github.com/dxc-technology/halstack-react"
                      newWindow
                    >
                      GitHub
                    </DxcApplicationLayout.SideNav.Link>
                  </DxcApplicationLayout.SideNav.Section>
                </DxcApplicationLayout.SideNav>
              }
            >
              <DxcApplicationLayout.Main>
                <MainContainer>{children}</MainContainer>
              </DxcApplicationLayout.Main>
            </DxcApplicationLayout>
          )}
        >
          {componentWithLayout}
        </ApplicationLayoutWrapper>
      </HalstackProvider>
    </>
  );
};

const MainContainer = styled.div`
  margin: 80px 0;
  max-width: 1124px;
  margin-inline: max(5%, 50% - 1124px/2);

  @media (max-width: ${responsiveSizes.laptop}px) {
    margin: 80px 32px;
  }
`;

export default MyApp;
