import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import getArticles from "../api/article/getArticles";

// Action Column
const viewButton = (cell, row, rowIndex, formatExtraData) => {
  return (
    <Link className="button button--primary" to={`/articles/${row.id}`}>
      View
    </Link>
  );
};

// Labels column
const labelsColumn = (cell, row) => {
  const { labels } = row;
  // console.log(labels);
  const renderLabels = labels.map((label, i) => {
    const resultHtml = label ? (
      <a
        key={`label-${i}`}
        href={`https://www.google.com/search?q=${label?.toLowerCase()}`}
        target="_blank"
        rel="noreferrer"
        className="app__table__labels__item"
      >
        {label}
      </a>
    ) : (
      <span
        key={`label-${i}`}
        className="app__table__labels__item"
        style={{ backgroundColor: "#de7f24" }}
      >
        Empty
      </span>
    );
    return resultHtml;
  });

  return <div className="app__table__labels">{renderLabels}</div>;
};

// Edit/Save on blur
const cellEditProp = {
  mode: "click",
  blurToSave: true,
};
// Total pagination
const renderShowsTotal = (start, to, total) => {
  return (
    <p style={{ color: "blue" }}>
      From {start} to {to}, totals is {total}&nbsp;&nbsp;(its a customize text)
    </p>
  );
};
// Options
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
  paginationShowsTotal: renderShowsTotal,
};

function ArticlesSortableTable() {
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(async () => {
    async function fetchArticles() {
      try {
        const articlesData = await getArticles();
        setArticles(articlesData);
        setLoading(false);
      } catch (error) {
        console.log("ERROR: ", error);
        setLoading(false);
        setIsError(true);
      }
    }
    fetchArticles();
  }, []);

  console.log(articles);

  return (
    <>
      {loading ? (
        <p>loading ....</p>
      ) : (
        <div className="table-responsive mb-4">
          <div className="app__table">
            <BootstrapTable
              version="4"
              data={articles}
              // cellEdit={cellEditProp}
              ignoreSinglePage
              pagination={true}
              options={options}
            >
              <TableHeaderColumn isKey dataField="date_time" dataSort>
                Date
              </TableHeaderColumn>
              <TableHeaderColumn dataField="site" dataSort>
                Site
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="title"
                dataSort
                tabindex="0"
                tdStyle={{ overflow: "unset", whiteSpace: "inherit" }}
              >
                Title
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="article_keywords"
                dataSort
                width="30%"
              >
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
              <TableHeaderColumn
                thStyle={{ textAlign: "center" }}
                tdStyle={{ textAlign: "center", overflow: "unset" }}
                dataField="button"
                dataFormat={viewButton}
              >
                Action
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      )}
    </>
  );
}

export default ArticlesSortableTable;
