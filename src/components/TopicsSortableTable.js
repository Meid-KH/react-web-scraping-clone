import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
const { REACT_APP_API_URL } = process.env;

function TopicsSortableTable() {
  // States
  const [topics, setTopics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetching topics goes here
  const fetchTopics = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    await fetch(`${REACT_APP_API_URL}/topics/0/2`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setIsLoading(false);
        setTopics(result);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  // Updating states
  useEffect(async () => {
    await fetchTopics();
  }, []);

  // console.log(topics);
  return (
    <>
      <div className="table-responsive mb-4">
        <div className="app__table">
          {isLoading ? <p>Loading...</p> : <TopicsTable topics={topics} />}
        </div>
      </div>
    </>
  );
}

const TopicsTable = ({ topics }) => {
  // console.log("Topics from TPL : ", topics);
  return (
    <BootstrapTable data={topics} pagination={true} options={options}>
      <TableHeaderColumn isKey dataField="id" dataSort>
        ID
      </TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort>
        Topic
      </TableHeaderColumn>
      <TableHeaderColumn dataField="parent_name" dataSort tabindex="0">
        Parent
      </TableHeaderColumn>
      <TableHeaderColumn dataField="terms" dataSort>
        Terms
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
  );
};

const topicsData = [
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
const termsColumn = (cell, row) => {
  const { terms } = row;
  const Term = terms.map((term, i) => {
    console.log("Terms from TPL : ", term);

    return (
      <span key={`term-${i}`} className="app__table__labels__item">
        {/* {term} */}
        lol
      </span>
    );
  });
  return (
    <div className="app__table__labels">
      <Term />
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
};

export default TopicsSortableTable;
