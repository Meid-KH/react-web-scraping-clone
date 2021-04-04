import React from "react";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const items = [
  {
    id: 1,
    date: "2020-03-29",
    site: "martechtoday.com",
    title: "Set dolor Consecuror zet amet",
    keywords: "Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing",
    labels: ["Sprinl", "Shopify", "keyword-classifier"],
    // action: "<button>View</button>",
  },
  {
    id: 2,
    date: "2020-0129",
    site: "martechtoday.com",
    title: "Set doonsecuror zet amet",
    keywords: "Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing",
    labels: ["GraphQl", "API integration", "CMS"],
    // action: "<button>View</button>",
  },
  {
    id: 3,
    date: "2020-05-29",
    site: "martechtoday.com",
    title: "Dolor Consecuror zet amet",
    keywords: "ipsum, dolor, sit, amet, consectetur, adipisicing",
    labels: ["Sprinl", "Shopify", "keyword-classifier"],
    // action: "<button>View</button>",
  },
  {
    id: 4,
    date: "2020-04-29",
    site: "martechtoday.com",
    title: "ASet dolor Consecuror zet amet",
    keywords: "Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing",
    labels: ["Next", "Prestashop", "Node js"],
    // action: "<button>View</button>",
  },
  {
    id: 5,
    date: "2020-04-29",
    site: "google.com",
    title: "USet dolor Consecuror zet amet",
    keywords: "Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing",
    labels: ["Wordpress", "Shopify", "WooCommerce"],
    // action: viewButton,
  },
];

// Action Column
const viewButton = (cell, row, rowIndex, formatExtraData) => {
  // console.log(row.id);
  return (
    <Link className="button button--primary" to={`/articles/${row.id}`}>
      View
    </Link>
  );
};

// Labels column
const labelsColumn = (cell, row) => {
  const { labels } = row;

  const renderLabels = labels.map((label, i) => {
    return (
      <a
        key={`label-${i}`}
        href={`https://www.google.com/search?q=${label.toLowerCase()}`}
        target="_blank"
        rel="noreferrer"
        className="app__table__labels__item"
      >
        {label}
      </a>
    );
  });

  return <div className="app__table__labels">{labels && renderLabels}</div>;
};

function ArticlesSortableTable() {
  return (
    <>
      <div className="table-responsive mb-4">
        <div className="app__table">
          <BootstrapTable data={items} striped hover>
            <TableHeaderColumn isKey dataField="date" dataSort>
              Date
            </TableHeaderColumn>
            <TableHeaderColumn dataField="site" dataSort>
              Site
            </TableHeaderColumn>
            <TableHeaderColumn dataField="title" dataSort tabindex="0">
              Title
            </TableHeaderColumn>
            <TableHeaderColumn dataField="keywords" dataSort width="30%">
              Keywords
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="labels"
              dataFormat={labelsColumn}
              dataSort
              width="20%"
            >
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
            <a href="/">{"<<"}</a>
          </li>
          <li>
            <a href="/">1</a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">4</a>
          </li>
          <li>
            <a href="/">5</a>
          </li>
          <li>
            <a href="/">...</a>
          </li>
          <li>
            <a href="/">422</a>
          </li>
          <li>
            <a href="/">423</a>
          </li>
          <li>
            <a href="/">{">>"}</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ArticlesSortableTable;
