import React, { useState } from "react";
import { DxcResultsetTable, DxcButton } from "@dxc-technology/halstack-react";
import deleteIcon from "../images/delete-24px.svg";

const columns = [
  {
    displayValue: "Id",
    isSortable: false,
  },
  {
    displayValue: "Name",
    isSortable: true,
  },
  {
    displayValue: "City",
    isSortable: false,
  },
  {
    displayValue: "Actions",
    isSortable: true,
  },
];

const rows = [
  [
    {
      displayValue: "001",
      sortValue: "001",
    },
    {
      displayValue: "Peter",
      sortValue: "Peter",
    },
    {
      displayValue: "Oviedo",
      sortValue: "Oviedo",
    },
    {
      displayValue: (
        <DxcButton icon={deleteIcon} onClick={() => console.log("Clicked")} />
      ),
    },
  ],
  [
    {
      displayValue: "002",
      sortValue: "002",
    },
    {
      displayValue: "Louis",
      sortValue: "Louis",
    },
    {
      displayValue: "Oviedo",
      sortValue: "Oviedo",
    },
    {
      displayValue: "",
    },
  ],
  [
    {
      displayValue: "003",
      sortValue: "003",
    },
    {
      displayValue: "Lana",
      sortValue: "Lana",
    },
    {
      displayValue: "Albacete",
      sortValue: "Albacete",
    },
    {
      displayValue: <DxcButton icon={deleteIcon} />,
    },
  ],
  [
    {
      displayValue: "004",
      sortValue: "004",
    },
    {
      displayValue: "Rick",
      sortValue: "Rick",
    },
    {
      displayValue: "Albacete",
      sortValue: "Albacete",
    },
    {
      displayValue: <DxcButton icon={deleteIcon} />,
    },
  ],
  [
    {
      displayValue: "005",
      sortValue: "005",
    },
    {
      displayValue: "Mark",
      sortValue: "Mark",
    },
    {
      displayValue: "Madrid",
      sortValue: "Madrid",
    },
    {
      displayValue: <DxcButton icon={deleteIcon} />,
    },
  ],
  [
    {
      displayValue: "006",
      sortValue: "006",
    },
    {
      displayValue: "Cris",
      sortValue: "Cris",
    },
    {
      displayValue: "Barcelona",
      sortValue: "Barcelona",
    },
    {
      displayValue: "",
    },
  ],
  [
    {
      displayValue: "007",
      sortValue: "007",
    },
    {
      displayValue: "Susan",
      sortValue: "Susan",
    },
    {
      displayValue: "Madrid",
      sortValue: "Madrid",
    },
    {
      displayValue: <DxcButton icon={deleteIcon} />,
    },
  ],
  [
    {
      displayValue: "008",
      sortValue: "008",
    },
    {
      displayValue: "Tina",
      sortValue: "Tina",
    },
    {
      displayValue: "Barcelona",
      sortValue: "Barcelona",
    },
    {
      displayValue: <DxcButton icon={deleteIcon} />,
    },
  ],
  [
    {
      displayValue: "009",
      sortValue: "009",
    },
    {
      displayValue: "Kevin",
      sortValue: "Kevin",
    },
    {
      displayValue: "Oviedo",
      sortValue: "Oviedo",
    },
    {
      displayValue: "",
    },
  ],
  [
    {
      displayValue: "010",
      sortValue: "010",
    },
    {
      displayValue: "Cosmin",
      sortValue: "Cosmin",
    },
    {
      displayValue: "Barcelona",
      sortValue: "Barcelona",
    },
    {
      displayValue: "",
    },
  ],
];

function App() {
  const [myItemsPerPage, setMyItemsPerPage] = useState(3);
  const itemsPerPageFunction = (value) => {
    setMyItemsPerPage(value);
  };

  return (
    <div>
      <div className="test-case" id="xxsmall-margin">
        <h5>xxsmall margin</h5>

        <DxcResultsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={myItemsPerPage}
          itemsPerPageOptions={[3, 6]}
          itemsPerPageFunction={itemsPerPageFunction}
          margin="xxsmall"
        ></DxcResultsetTable>
      </div>
      <div className="test-case" id="xsmall-margin">
        <h5>xsmall margin</h5>

        <DxcResultsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={5}
          margin="xsmall"
        ></DxcResultsetTable>
      </div>
      <div className="test-case" id="small-margin">
        <h5>small margin</h5>

        <DxcResultsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="small"
        ></DxcResultsetTable>
      </div>
      <div className="test-case" id="medium-margin">
        <h5>medium margin</h5>

        <DxcResultsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="medium"
        ></DxcResultsetTable>
      </div>
      <div className="test-case" id="large-margin">
        <h5>large margin</h5>

        <DxcResultsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="large"
        ></DxcResultsetTable>
      </div>
      <div className="test-case" id="xlarge-margin">
        <h5>xlarge margin</h5>

        <DxcResultsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="xlarge"
        ></DxcResultsetTable>
      </div>
      <div className="test-case" id="xxlarge-margin">
        <h5>xxlarge margin</h5>

        <DxcResultsetTable
          columns={columns}
          rows={rows}
          itemsPerPage={3}
          margin="xxlarge"
        ></DxcResultsetTable>
      </div>
    </div>
  );
}

export default App;
