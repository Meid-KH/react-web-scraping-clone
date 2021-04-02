import React from "react";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const items = [
  {
    Date: "2020-03-29",
    Site: "martechtoday.com",
    Title: "Set dolor Consecuror zet amet",
    Keywords: "Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing",
    Labels: ["Sprinl", "Shopify", "keyword-classifier"],
    // action: "<button>View</button>",
  },
  {
    Date: "2020-0129",
    Site: "martechtoday.com",
    Title: "Set doonsecuror zet amet",
    Keywords: "Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing",
    Labels: ["Lorem", "Sprinl", "Shopify", "keyword-classifier"],
    // action: "<button>View</button>",
  },
  {
    Date: "2020-05-29",
    Site: "martechtoday.com",
    Title: "Dolor Consecuror zet amet",
    Keywords: "ipsum, dolor, sit, amet, consectetur, adipisicing",
    Labels: ["Sprinl", "Shopify", "keyword-classifier"],
    // action: "<button>View</button>",
  },
  {
    Date: "2020-04-29",
    Site: "martechtoday.com",
    Title: "ASet dolor Consecuror zet amet",
    Keywords: "Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing",
    Labels: ["Sprinl", "Shopify", "keyword-classifier"],
    // action: "<button>View</button>",
  },
  {
    Date: "2020-04-29",
    Site: "google.com",
    Title: "USet dolor Consecuror zet amet",
    Keywords: "Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing",
    Labels: ["Sprinl", "Shopify", "keyword-classifier"],
    // action: viewButton,
  },
];

// Action link
const viewButton = (cell, row, rowIndex, formatExtraData) => (
  <Link className="button button--primary" to="/articles/1">
    View
  </Link>
);

function SortableTable() {
  return (
    <>
      <div className="table-responsive mb-4">
        <div className="app__table">
          <BootstrapTable data={items} striped hover>
            <TableHeaderColumn isKey dataField="Date" dataSort>
              Date
            </TableHeaderColumn>
            <TableHeaderColumn dataField="Site" dataSort>
              Site
            </TableHeaderColumn>
            <TableHeaderColumn dataField="Title" dataSort>
              Title
            </TableHeaderColumn>
            <TableHeaderColumn dataField="Keywords" dataSort width="30%">
              Keywords
            </TableHeaderColumn>
            <TableHeaderColumn dataField="Labels" dataSort width="20%">
              Labels
            </TableHeaderColumn>
            <TableHeaderColumn dataField="button" dataFormat={viewButton}>
              Action
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
      <div className="app__pagination mb-4">
        <ul>
          <li>
            <a href="#">{"<<"}</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">422</a>
          </li>
          <li>
            <a href="#">423</a>
          </li>
          <li>
            <a href="#">{">>"}</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SortableTable;
