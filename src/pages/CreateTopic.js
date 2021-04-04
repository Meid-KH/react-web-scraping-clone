import React from "react";
import Layout from "../Layout";

function CreateTopic() {
  return (
    <Layout>
      <section className="app__main">
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
            <form className="form">
              <div className="form__grid">
                <div className="form__group">
                  <label className="form__label">Name</label>
                  <input type="text" className="form--control" />
                </div>
                <div className="form__group">
                  <label className="form__label">Parent ID</label>
                  <input type="text" className="form--control" />
                </div>
                <div className="form__group">
                  <label className="form__label">Regex terms</label>
                  <input type="text" className="form--control" />
                </div>
              </div>
              <div className="form__submit my-3">
                <div className="d-flex align-items-center justify-content-between">
                  <button className="button button--primary">
                    Save record
                  </button>
                  <button className="button button--secondary">
                    Reverse selection
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4 py-3">
            <h2 className="heading heading--3">Record availability</h2>
            <div className="app__topic__result mt-4">
              <button className="button button--primary w-100">
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
      </section>
    </Layout>
  );
}

export default CreateTopic;
