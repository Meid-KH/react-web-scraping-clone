import React from "react";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const topics = [
  {
    id: 4551,
    topic: "Paid",
    parent: "Software",
    regex: "#paid",
  },
  {
    id: 3743,
    topic: "1000Ft",
    parent: "Software",
    regex: "100ft",
  },
  {
    id: 3719,
    topic: "1056Ft",
    parent: "Software and Hardware",
    regex: "1600ft",
  },
  {
    id: 9993,
    topic: "Lorem",
    parent: "hardware",
    regex: "6600s",
  },
];

// Action Column
const actionsColumn = (cell, row) => {
  // console.log(row.id);
  return (
    <div className="app__topic__tableActions mx-n2">
      <Link className="button button--info mx-2" to={`/topics/edit/${row.id}`}>
        Edit
      </Link>
      <button className="button button--danger mx-2">Delete</button>
    </div>
  );
};

// Labels column
const regexColumn = (cell, row) => {
  return (
    <div className="app__table__labels">
      <span className="app__table__labels__item">{row.regex}</span>
    </div>
  );
};

const options = {
  page: 1, // which page you want to show as default
  sizePerPage: 2, // which size per page you want to locate as default
  prePage: "<<", // Previous page button text
  nextPage: ">>", // Next page button text
  firstPage: "First", // First page button text
  lastPage: "Last", // Last page button text
  prePageTitle: "Go to previous", // Previous page button title
  nextPageTitle: "Go to next", // Next page button title
  firstPageTitle: "Go to first", // First page button title
  lastPageTitle: "Go to Last", // Last page button title
  // paginationShowsTotal: renderShowsTotal(),
};

function TopicsSortableTable() {
  return (
    <>
      <div className="table-responsive mb-4">
        <div className="app__table">
          <BootstrapTable data={topics} pagination={true} options={options}>
            <TableHeaderColumn isKey dataField="id" dataSort>
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="topic" dataSort>
              Topic
            </TableHeaderColumn>
            <TableHeaderColumn dataField="parent" dataSort tabindex="0">
              Parent
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="regex"
              dataFormat={regexColumn}
              dataSort
            >
              Regex
            </TableHeaderColumn>
            <TableHeaderColumn
              thStyle={{ textAlign: "center" }}
              // width="20%"
              dataField="button"
              dataFormat={actionsColumn}
            >
              Action
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
      {/* <div className="app__pagination mb-4">
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
            <a href="/">{">>"}</a>
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default TopicsSortableTable;
