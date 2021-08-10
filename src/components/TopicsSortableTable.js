import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Skeleton from "./partial/skeleton";
const { REACT_APP_API_URL } = process.env;

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
  // paginationShowsTotal: renderShowsTotal,
};

function TopicsSortableTable() {
  // States
  const [topics, setTopics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pagination, setPagination] = useState(0);

  // Fetching topics goes here
  const fetchTopics = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    await fetch(
      // `${REACT_APP_API_URL}/search/topics/0/${pagination}?q=`,
      `${REACT_APP_API_URL}/topics?page=${pagination}`,
      requestOptions
    )
      .then(async (response) => {
        const result = await response.json();
        const { topics: topicsRes } = await result;
        if (!response.ok) {
          const error = (result && result.message) || response.status;
          return Promise.reject(error);
        }
        setIsLoading(false);
        setTopics(topicsRes);
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

  // Search Api
  const searchApi = async (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    setIsLoading(true);
    await fetch(`${REACT_APP_API_URL}/search/topics?q=${query}`, requestOptions)
      .then(async (response) => {
        const res = await response.json();
        const { topics: resData } = res;
        if (!response.ok) {
          const error = (res && res.message) || response.status;
          return Promise.reject(error);
        }
        setIsLoading(false);
        setTopics(resData);
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

  // Terms column
  const termsColumn = (cell, row) => {
    const TermTpl = ({ termsdata }) => {
      return (
        <>
          {termsdata.map((t, i) => {
            // console.log("Terms from TPL : ", term);
            return (
              <span key={`term-${i}`} className="app__table__labels__item">
                {t.term}
              </span>
            );
          })}
        </>
      );
    };
    return (
      <div className="app__table__labels">
        <TermTpl termsdata={row.terms} />
      </div>
    );
  };
  // Action Column
  const actionsColumn = (cell, row) => {
    // console.log(row.id);
    return (
      <div className="app__topic__tableActions d-flex justify-content-center mx-n2">
        <Link
          className="button button--info mx-2"
          to={`/topics/edit/${row.id}`}
        >
          Edit
        </Link>
        <button
          className="button button--danger mx-2"
          onClick={() => handleDeleteTopic(row.id)}
        >
          Delete
        </button>
      </div>
    );
  };
  // Handle delete topic
  const handleDeleteTopic = (id) => {
    console.log("Deleting the topic : ", id);
    const deleteTopic = async () => {
      // set loading
      // setLoadingOverlay(true);
      setIsLoading(true);
      const requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };
      await fetch(`${REACT_APP_API_URL}/topic/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          fetchTopics();
          // setLoadingOverlay(false);
          setIsLoading(false);
          // setTopics(result);
        })
        .catch((error) => {
          console.log("error", error);
          // setLoadingOverlay(false);
          setIsLoading(false);
          setIsError(true);
        });
    };

    const isConfirmed = window.confirm(
      "Are you sure you want to delete this record ?"
    );

    isConfirmed && deleteTopic();
  };
  // Topic table TPL
  const TopicsTable = ({ topics }) => {
    // console.log("Topics from TPL : ", topics);
    if (isError) {
      return (
        <div className="alert alert--danger text-center">
          Error occured while fetching data!
        </div>
      );
    }
    return (
      <BootstrapTable
        data={topics}
        pagination={true}
        options={options}
        ignoreSinglePage
      >
        <TableHeaderColumn isKey dataField="id" dataSort width="90px">
          ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField="name" dataSort>
          Topic
        </TableHeaderColumn>
        <TableHeaderColumn dataField="parent_name" dataSort tabindex="0">
          Parent
        </TableHeaderColumn>
        <TableHeaderColumn dataField="terms" dataFormat={termsColumn} dataSort>
          Terms
        </TableHeaderColumn>
        <TableHeaderColumn
          thStyle={{ textAlign: "center" }}
          width="230px"
          dataField="button"
          dataFormat={actionsColumn}
        >
          Action
        </TableHeaderColumn>
      </BootstrapTable>
    );
  };

  return (
    <>
      <div className="app__search row justify-content-between mb-5">
        <div className="col col-xl-10">
          <form onSubmit={handleSubmit}>
            <div className="flex-grow-1 d-flex ">
              <input
                className="form--control"
                name="search"
                type="search"
                // value={searchInput}
                placeholder="Type a topic..."
                onKeyUp={handleChange}
              />
              <button className="button button--primary">Search</button>
            </div>
            {/* <label className="d-block py-2 text-reg" htmlFor="search">
                Displaying <strong>1-300</strong> in total of{" "}
                <strong>126.662</strong>
              </label> */}
          </form>
        </div>
        <div className="col-auto">
          <Link to="/topics/create" className="button button--success">
            Add new
          </Link>
        </div>
      </div>
      <div
        className={`table-responsive mb-4 ${
          loadingOverlay ? "blur-loading" : ""
        }`}
      >
        <div className="app__table">
          {isLoading ? <Skeleton /> : <TopicsTable topics={topics} />}
        </div>
        {loadingOverlay && (
          <svg className="spinner">
            <circle cx="20" cy="20" r="18"></circle>
          </svg>
        )}
      </div>
    </>
  );
}

export default TopicsSortableTable;
