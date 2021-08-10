import { useEffect, useState } from "react";
import BackButton from "../components/partial/BackButton";
import Layout from "../Layout";
const { REACT_APP_API_URL } = process.env;

const EditTopic = ({ topicId }) => {
  // Managing states
  const [data, setData] = useState({
    name: "",
    parentId: "",
    terms: [],
    // termsIds: "",
  });
  const [termsCurrent, setTermsCurrent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fetching current topic
  const fetchCurrentTopic = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${REACT_APP_API_URL}/topic/${topicId}`, requestOptions)
      .then(async (response) => {
        const currentData = await response.json();
        const currentDataItem = currentData[0];
        console.log(currentDataItem);
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        setData({
          name: currentDataItem.name,
          parentId: currentDataItem.parent_id || "",
          terms: currentDataItem.terms || [],
          // termsIds: currentDataItem.terms_ids || [],
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    fetchCurrentTopic();
  }, []);

  // Handle Update event
  const handleUpdate = () => {
    const { name, parentId, terms } = data;

    const endPoint =
      parentId !== ""
        ? `${REACT_APP_API_URL}/topic/${topicId}/?name=${name}&parent_id=${parentId}`
        : `${REACT_APP_API_URL}/topic/${topicId}/?name=${name}`;

    console.log(endPoint);

    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    const requestOptions = {
      method: "PUT",
      redirect: "follow",
    };
    fetch(endPoint, requestOptions)
      .then(async (response) => {
        const res = await response.json();
        // console.log(res);
        if (!response.ok) {
          const error = (res && res.message) || response.status;
          return Promise.reject(error);
        }
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error("There was an error!", error);
      });
  };

  const updateTerms = (termID, topicId, termValue) => {
    const requestOptions = {
      method: "PUT",
      redirect: "follow",
    };
    fetch(
      `${REACT_APP_API_URL}/term/${termID}?topic_id=${topicId}&term=${termValue}`,
      requestOptions
    )
      .then(async (response) => {
        const res = await response.json();
        // console.log(res);
        if (!response.ok) {
          const error = (res && res.message) || response.status;
          return Promise.reject(error);
        }
        // setIsLoading(false);
        // setIsSuccess(true);
      })
      .catch((error) => {
        // setIsLoading(false);
        // setIsError(true);
        console.error("There was an error!", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    // console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate();
  };

  const handleChangeTerm = (event) => {
    const { name, value } = event.target;
    setTermsCurrent(value);
    console.log(value);
    // console.log(termsString);
    Array.from(terms).map((t) => {
      console.log(t.id, topicId, value);
      return updateTerms(t.id, topicId, value);
    });
  };

  const { terms } = data;
  const termsInputs = Array.from(terms).map((t, i) => {
    // console.log(t.term);
    // setTermsString(t.term);

    return (
      <div className="form__group" key={i}>
        <input
          type="text"
          className="form--control"
          name={t.term}
          defaultValue={t.term}
          onChange={handleChangeTerm}
        />
      </div>
    );
  });

  return (
    <Layout>
      <section className="app__main">
        <BackButton path="/topics" />
        <div className="app__intro">
          <h1 className="heading heading--1">
            Edit Topic {data.name ? "« " + data.name + " »" : "..."}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            perspiciatis mollitia quaerat, veritatis nihil magni? Nisi,
            officiis? Saepe nam porro alias quae sit incidunt, quia optio vel
            explicabo magnam dolores.
          </p>
        </div>
        <div className="row">
          <div className="col-md-8 py-3">
            <form
              className={`form ${isLoading ? "form--loading" : ""}`}
              onSubmit={handleSubmit}
            >
              <div className="form__grid">
                <div className="form__group">
                  <label className="form__label">Name</label>
                  <input
                    type="text"
                    className="form--control"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label className="form__label">Parent ID</label>
                  <input
                    type="text"
                    className="form--control"
                    name="parentId"
                    value={data.parentId}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label className="form__label">Regex terms</label>
                  {/* <input
                    type="text"
                    className="form--control"
                    name="terms"
                    value={data.terms.term}
                    onChange={handleChange}
                  /> */}
                </div>
                {termsInputs}
              </div>
              <div className="form__submit my-3">
                <div className="d-flex align-items-center justify-content-between">
                  <button className="button button--primary">
                    {isLoading ? "Saving..." : "Save changes"}
                  </button>
                </div>
              </div>
            </form>
            {isLoading && (
              <svg className="spinner">
                <circle cx="20" cy="20" r="18"></circle>
              </svg>
            )}
            {isError && (
              <div className="alert alert--danger text-center">
                Error occured while submitting data, please check your input
                values!
              </div>
            )}
            {isSuccess && (
              <div className="alert alert--success text-center">
                Topic has been updated successfully!
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EditTopic;
