import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import getArticles from "../api/article/getArticles";
import Skeleton from "./partial/skeleton";
const { REACT_APP_API_URL } = process.env;

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
      <span key={`label-${i}`} className="app__table__labels__item">
        {label}
      </span>
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
  sizePerPage: 6, // which size per page you want to locate as default
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
  const [articles, setArticles] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pagination, setPagination] = useState(0);

  const fetchArticles = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    await fetch(
      // `${REACT_APP_API_URL}/articles/0/${pagination}?q=`,
      `${REACT_APP_API_URL}/articles?page=${pagination}`,
      requestOptions
    )
      .then(async (response) => {
        const result = await response.json();
        const { articles: articlesRes } = await result;
        if (!response.ok) {
          const error = (result && result.message) || response.status;
          return Promise.reject(error);
        }
        setIsLoading(false);
        setArticles(articlesRes);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(async () => {
    await fetchArticles();
  }, []);

  // Search Api
  const searchApi = async (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    setIsLoading(true);
    setIsError(false);
    await fetch(
      // `${REACT_APP_API_URL}/search/articles/0/${index}?q=${query}`,
      `${REACT_APP_API_URL}/search/articles?q=${query}`,
      requestOptions
    )
      .then(async (response) => {
        const res = await response.json();
        const { articles: resData } = res;
        if (!response.ok) {
          const error = (res && res.message) || response.status;
          return Promise.reject(error);
        }
        setIsLoading(false);
        // console.log(resData);
        setArticles(resData);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const handleSubmit = (event) => {
    const searchValue = event.target.elements.search.value;
    event.preventDefault();
    searchApi(searchValue);
  };
  const handleChange = async (event) => {
    const { value } = event.target;
    await searchApi(value);
  };

  const ArticlesTable = ({ articles }) => {
    if (isError) {
      return (
        <div className="alert alert--danger text-center">
          Error occured while fetching data!
        </div>
      );
    }
    return (
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
              tdStyle={{ whiteSpace: "inherit" }}
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
    );
  };

  // console.log(articles);

  return (
    <>
      <div className="app__search row mb-5">
        <div className="col col-xl-8_ col-sm-10_">
          <h2 className="heading heading--2">Search articles</h2>
          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="flex-grow-1 d-flex ">
              <input
                className="form--control"
                name="search"
                // value={searchInput}
                type="search"
                placeholder="Type an article..."
                // onKeyUp={handleChange}
              />
              <button className="button button--primary">Search</button>
            </div>
            {/* <label className="d-block py-2 text-reg" htmlFor="search">
                Displaying <strong>1-300</strong> in total of{" "}
                <strong>126.662</strong>
              </label> */}
          </form>
        </div>
      </div>
      {loading ? <Skeleton /> : <ArticlesTable articles={articles} />}
    </>
  );
}

export default ArticlesSortableTable;
