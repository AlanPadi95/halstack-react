import React from "react";
import { DxcNavTabs } from "@dxc-technology/halstack-react";
import XIcon from "../images/x.svg";
import { Link as RouterLink } from "react-router-dom";

const linkedinSVG = (
  <svg
    x="0px"
    y="0px"
    width="438.536px"
    height="438.536px"
    viewBox="0 0 438.536 438.536"
    fill="currentColor"
  >
    <g>
      <path
        d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
   C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
   h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
   C438.532,59.576,430.49,40.204,414.41,24.123z M133.618,367.157H67.666V169.016h65.952V367.157z M127.626,132.332
   c-6.851,6.567-15.893,9.851-27.124,9.851h-0.288c-10.848,0-19.648-3.284-26.407-9.851c-6.76-6.567-10.138-14.703-10.138-24.41
   c0-9.897,3.476-18.083,10.421-24.556c6.95-6.471,15.942-9.708,26.98-9.708c11.039,0,19.89,3.237,26.553,9.708
   c6.661,6.473,10.088,14.659,10.277,24.556C137.899,117.625,134.477,125.761,127.626,132.332z M370.873,367.157h-65.952v-105.92
   c0-29.879-11.036-44.823-33.116-44.823c-8.374,0-15.42,2.331-21.128,6.995c-5.715,4.661-9.996,10.324-12.847,16.991
   c-1.335,3.422-1.999,8.75-1.999,15.981v110.775h-65.952c0.571-119.529,0.571-185.579,0-198.142h65.952v27.974
   c13.867-21.681,33.558-32.544,59.101-32.544c22.84,0,41.21,7.52,55.104,22.554c13.895,15.037,20.841,37.214,20.841,66.519v113.64
   H370.873z"
      />
    </g>
  </svg>
);

function NavTabs() {
  return (
    <div>
      <div className="test-case" id="default">
        <h4>Default</h4>
        <DxcNavTabs>
          <DxcNavTabs.Tab href="/test1" active>
            Tab 1
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="/test2" disabled>
            Tab 2
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="/test3" notificationNumber>
            Tab 3
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="/test5" notificationNumber={100} icon={XIcon}>
            Tab 4
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="/test6" icon={linkedinSVG}>
            Tab 5
          </DxcNavTabs.Tab>
        </DxcNavTabs>
      </div>
      <div className="test-case" id="top-icon">
        <h4>Default with icon at left</h4>
        <DxcNavTabs iconPosition="left">
          <DxcNavTabs.Tab href="#" active>
            Tab 1
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" disabled>
            Tab 2
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" notificationNumber>
            Tab 3
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" notificationNumber={100} icon={XIcon}>
            Tab 4
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" icon={linkedinSVG}>
            Tab 5
          </DxcNavTabs.Tab>
        </DxcNavTabs>
      </div>
      <div className="test-case" id="max-size">
        <h4>Long label</h4>
        <DxcNavTabs>
          <DxcNavTabs.Tab href="#" icon={XIcon}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" icon={linkedinSVG} active>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </DxcNavTabs.Tab>
        </DxcNavTabs>
      </div>
      <div className="test-case" id="max-size-icon-left">
        <h4>Long label icon left</h4>
        <DxcNavTabs iconPosition="left">
          <DxcNavTabs.Tab href="#" icon={XIcon}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </DxcNavTabs.Tab>
          <DxcNavTabs.Tab href="#" icon={linkedinSVG} active>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </DxcNavTabs.Tab>
        </DxcNavTabs>
      </div>
      <div className="test-case" id="react-router">
        <h4>React router tabs</h4>
        <DxcNavTabs>
          <RouterLink to="/test" component={DxcNavTabs.Tab} active>
            Tab 1
          </RouterLink>
          <RouterLink to="/test" component={DxcNavTabs.Tab} disabled>
            Tab 2
          </RouterLink>
          <RouterLink to="/test" component={DxcNavTabs.Tab} notificationNumber>
            Tab 3
          </RouterLink>
          <RouterLink
            to="/test"
            component={DxcNavTabs.Tab}
            notificationNumber={100}
            icon={XIcon}
          >
            Tab 4
          </RouterLink>
          <RouterLink to="/test" component={DxcNavTabs.Tab} icon={linkedinSVG}>
            Tab 5
          </RouterLink>
        </DxcNavTabs>
        <DxcNavTabs iconPosition="left">
          <RouterLink to="/test" component={DxcNavTabs.Tab} active>
            Tab 1
          </RouterLink>
          <RouterLink to="/test" component={DxcNavTabs.Tab} disabled>
            Tab 2
          </RouterLink>
          <RouterLink to="/test" component={DxcNavTabs.Tab} notificationNumber>
            Tab 3
          </RouterLink>
          <RouterLink
            to="/test"
            component={DxcNavTabs.Tab}
            notificationNumber={100}
            icon={XIcon}
          >
            Tab 4
          </RouterLink>
          <RouterLink to="/test" component={DxcNavTabs.Tab} icon={linkedinSVG}>
            Tab 5
          </RouterLink>
        </DxcNavTabs>
      </div>
    </div>
  );
}

export default NavTabs;
