import React, { useEffect, useState } from "react";
import BackButton from "../components/partial/BackButton";
import Layout from "../Layout";
const { REACT_APP_API_URL } = process.env;

function CreateTopic() {
  const [data, setData] = useState({
    name: "",
    parentId: "",
    terms: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  const handleReverseRegex = (event) => {
    event.preventDefault();
    console.log("handling reverse");
  };
  const handleTestRegex = (event) => {
    event.preventDefault();
    console.log("handling Test");
  };

  const handleSubmit = (event) => {
    const { name, parentId, terms } = data;
    event.preventDefault();
    // 1. activate loading state
    // setIsLoading(true);
    // 2. Await Fetch POST request
    // 3. Disable loading state, then show error or success message
    // setIsError(true);
    // setIsSuccess(true);

    console.log("Submitting", JSON.stringify(data));
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    fetch(
      // `${REACT_APP_API_URL}/topic?name=${name}&parent_id=${parentId}&terms=${terms}`,
      `${REACT_APP_API_URL}/topic?name=${name}&parent_id=${parentId}`,
      {
        method: "POST",
        // body: JSON.stringify({
        //   name: name,
        //   parent_id: parentId,
        //   terms: terms,
        // }),
        redirect: "follow",
      }
    )
      .then((response) => {
        setIsLoading(false);
        console.log(response.json());
        if (response.status != 200) {
          console.log("Submission failed");
          setIsError(true);
        } else {
          console.log("Submission succeded");
          // handleClean();
          setIsSuccess(true);
        }
      })
      .catch((error) => {
        console.log("ERROR : ", error);
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <Layout>
      <section className="app__main">
        <BackButton path="/topics" />
        <div className="app__intro">
          <h1 className="heading heading--1">Create a new Topic</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            perspiciatis mollitia quaerat, veritatis nihil magni? Nisi,
            officiis? Saepe nam porro alias quae sit incidunt, quia optio vel
            explicabo magnam dolores.
          </p>
        </div>
        <div className="row">
          <div className="col-md-8 py-3">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__grid">
                <div className="form__group">
                  <label className="form__label">Name</label>
                  <input
                    type="text"
                    className="form--control"
                    required="required"
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
                    required="required"
                    name="parentId"
                    value={data.parentId}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <label className="form__label">Regex terms</label>
                  <input
                    type="text"
                    className="form--control"
                    // required="required"
                    name="terms"
                    value={data.terms}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form__submit my-3">
                <div className="d-flex align-items-center justify-content-between">
                  <button className="button button--primary">
                    {isLoading ? "Saving..." : "Save topic"}
                  </button>
                  <button
                    className="button button--secondary"
                    onClick={handleReverseRegex}
                  >
                    Reverse selection
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4 py-3">
            <h2 className="heading heading--3">Record availability</h2>
            <div className="app__topic__result mt-4">
              <button
                className="button button--primary w-100"
                onClick={handleTestRegex}
              >
                Test record
              </button>
              <div className="text-lg text-600 my-3">Found 2 results :</div>
              <ul>
                <li>Microsoft Live launches online event management service</li>
                <li>
                  Leading global Event Management platform aquired by HGGC
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isError && (
          <div className="alert alert--danger text-center">
            Error occured while submitting data, the topic name may be already
            existing in the data base, Please insert a unique record !
          </div>
        )}
        {isSuccess && (
          <div className="alert alert--success text-center">
            Topic has been saved successfully!
          </div>
        )}
      </section>
    </Layout>
  );
}

export default CreateTopic;
