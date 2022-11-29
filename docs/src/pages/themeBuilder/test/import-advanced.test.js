import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, act, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import routeData from "react-router";

import { versionsResponse } from "./mocks/VersionsMock";
import ThemeBuilder from "../ThemeBuilder";

const portalUrl = "https://developer.dxc.com/tools/react/versions.json";

const validThemeInputString = JSON.stringify({
  alert: {
    titleFontColor: "#fabada",
    infoIconColor: "#cecece",
  },
  box: {
    borderRadius: "9.7px",
    borderThickness: "3.5px",
    borderStyle: "dotted",
  },
});

const wrongComponentNameString = JSON.stringify({
  alert: {
    titleFontColor: "#fabada",
    infoIconColor: "#cecece",
    successBackgroundColor: "#ffffff",
  },
  boxes: {
    borderRadius: "6px",
    borderThickness: "1px",
    borderStyle: "dotted",
  },
});

const wrongThemeInputString = JSON.stringify({
  alert: {
    accentColor: "#fabada",
    infoIconColor: "#CEE0F5",
    successIconColor: "#ffffff",
  },
  box: {
    borderRadius: "6px",
    borderThickness: "1px",
    bad: "dotted",
  },
});

const handler = [
  rest.get(portalUrl, (req, res, ctx) => {
    const response = res(ctx.delay(100), ctx.json(versionsResponse));
    response.headers.set(
      "x-api-key",
      "p4JuyDseE33fwi5qK3DXf7DzxmNzxC2L7QH9uSJn"
    );
    response.headers.set("content-type", "binary/octet-stream");
    return response;
  }),
];
const server = setupServer(...handler);

beforeAll(() => {
  server.listen();

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Import advanced theme", () => {
  const history = createMemoryHistory();
  history.push("/themeBuilder");
  window.location.pathname = "/tools/react/next/";
  jest.spyOn(routeData, "useParams").mockReturnValue({ type: "advancedTheme" });

  it("Should open a dialog when Import button is clicked", async () => {
    const { getByText, getAllByText, getByPlaceholderText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(getByText("Import theme")).toBeTruthy();
    expect(getAllByText("Import")[1].closest("button").disabled).toBeTruthy();
    expect(getByText("Cancel").closest("button").disabled).toBeFalsy();
    expect(getByPlaceholderText("Paste your theme here...")).toBeTruthy();
  });

  it("Should close the import dialog when 'Cancel' button is clicked", async () => {
    const { getByText, queryByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.click(getByText("Cancel"));
    });
    expect(queryByText("Import theme")).toBeFalsy();
    expect(getByText("Accordion component")).toBeTruthy();
  });

  it("Should show the JSON error message", async () => {
    const { getByText, getByPlaceholderText, getAllByText, queryByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.change(getByPlaceholderText("Paste your theme here..."), {
        target: { value: "prueba" },
      });
    });
    expect(getAllByText("Import")[1].closest("button").disabled).toBeFalsy();
    act(() => {
      fireEvent.click(getAllByText("Import")[1].closest("button"));
    });
    expect(getByText("Invalid JSON input.")).toBeTruthy();
    expect(getAllByText("Import")[1].closest("button").disabled).toBeTruthy();
  });

  it("Should show the component error message", async () => {
    const { getByText, getByPlaceholderText, getAllByText, queryByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.change(getByPlaceholderText("Paste your theme here..."), {
        target: { value: wrongComponentNameString },
      });
    });
    expect(getAllByText("Import")[1].closest("button").disabled).toBeFalsy();
    act(() => {
      fireEvent.click(getAllByText("Import")[1].closest("button"));
    });
    expect(getByText("Invalid component name.")).toBeTruthy();
    expect(getAllByText("Import")[1].closest("button").disabled).toBeTruthy();
  });

  it("Should show the theme input error message", async () => {
    const { getByText, getByPlaceholderText, getAllByText, queryByText } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.change(getByPlaceholderText("Paste your theme here..."), {
        target: { value: wrongThemeInputString },
      });
    });
    expect(getAllByText("Import")[1].closest("button").disabled).toBeFalsy();
    act(() => {
      fireEvent.click(getAllByText("Import")[1].closest("button"));
    });
    expect(
      getByText("Invalid theme input name in the alert component.")
    ).toBeTruthy();
    expect(getAllByText("Import")[1].closest("button").disabled).toBeTruthy();
  });

  it("Should import a valid json and update the current theme of the builder", async () => {
    const {
      getByText,
      getByPlaceholderText,
      getAllByText,
      queryByText,
      getAllByRole,
      getByDisplayValue,
    } = render(
      <Router history={history}>
        <Route>
          <ThemeBuilder />
        </Route>
      </Router>
    );
    act(() => {
      fireEvent.click(getByText("Import"));
    });
    expect(queryByText("Import theme")).toBeTruthy();
    act(() => {
      fireEvent.change(getByPlaceholderText("Paste your theme here..."), {
        target: { value: validThemeInputString },
      });
    });
    expect(getAllByText("Import")[1].closest("button").disabled).toBeFalsy();
    act(() => {
      fireEvent.click(getAllByText("Import")[1].closest("button"));
    });
    act(() => {
      fireEvent.click(getByText("Alert"));
    });
    expect(getByText("Alert component")).toBeTruthy();
    expect(getAllByRole("color-container")[0].getAttribute("color")).toBe(
      "#fabada"
    );
    expect(getAllByRole("color-container")[6].getAttribute("color")).toBe(
      "#cecece"
    );
    act(() => {
      fireEvent.click(getByText("Box"));
    });
    expect(getByText("Box component")).toBeTruthy();
    expect(getByText("ShadowDepth 0")).toBeTruthy();
    expect(getByDisplayValue("9.7")).toBeTruthy();
    expect(getByDisplayValue("3.5")).toBeTruthy();
    expect(getByDisplayValue("dotted")).toBeTruthy();
  });
});
