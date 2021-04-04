import React from "react";
import DashGraph from "../components/DashGraph";
import Layout from "../Layout";
import RangeSlider from "../utils/RangeSlider";
import "../styles/dash.scss";

function Dash() {
  return (
    <Layout>
      <div className="app__wrapper py-0">
        <section className="app__dash my-n4">
          <div className="hard-full-width">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 col-xl-3">
                  <aside className="app__dash__aside">
                    <div className="app__dash__aside__metric">
                      <div className="app__dash__aside__metric__label">
                        Cutoff
                      </div>
                      <input
                        type="text"
                        className="form--control"
                        placeholder="01/01/2018"
                      />
                    </div>
                    <div className="app__dash__aside__metric">
                      <div className="app__dash__aside__metric__label">
                        Label lorem
                      </div>
                      <select className="form--control" multiple>
                        <option value="" defaultValue>
                          Content marketing
                        </option>
                        <option value="" defaultValue>
                          SEO
                        </option>
                        <option value="" defaultValue>
                          Facebook
                        </option>
                        <option value="">Email marketing</option>
                        <option value="">Social media marketing</option>
                        <option value="">Instagram</option>
                        <option value="">Community reviews</option>
                      </select>
                    </div>
                    <div className="app__dash__aside__metric">
                      <div className="app__dash__aside__metric__label">
                        Sources
                      </div>
                      <a
                        href="searchenginejournal.com"
                        target="_blank"
                        className="app__dash__aside__metric__label--sm"
                      >
                        searchenginejournal.com
                      </a>
                      <div className="app__dash__aside__metric__range">
                        <RangeSlider value={77} />
                      </div>
                      <a
                        href="searchengineland.com"
                        target="_blank"
                        className="app__dash__aside__metric__label--sm"
                      >
                        searchengineland.com
                      </a>
                      <div className="app__dash__aside__metric__range">
                        <RangeSlider value={33} />
                      </div>
                      <a
                        href="marketingland.com"
                        target="_blank"
                        className="app__dash__aside__metric__label--sm"
                      >
                        marketingland.com
                      </a>
                      <div className="app__dash__aside__metric__range">
                        <RangeSlider value={50} />
                      </div>
                      <a
                        href="socialmediaexplorer.com"
                        target="_blank"
                        className="app__dash__aside__metric__label--sm"
                      >
                        socialmediaexplorer.com
                      </a>
                      <div className="app__dash__aside__metric__range">
                        <RangeSlider value={80} />
                      </div>
                      <a
                        href="socialmediaexaminer.com"
                        target="_blank"
                        className="app__dash__aside__metric__label--sm"
                      >
                        toprankblog.com
                      </a>
                      <div className="app__dash__aside__metric__range">
                        <RangeSlider value={100} />
                      </div>
                      <a
                        href="socialmediaexaminer.com"
                        target="_blank"
                        className="app__dash__aside__metric__label--sm"
                      >
                        socialmediaexaminer.com
                      </a>
                      <div className="app__dash__aside__metric__range">
                        <RangeSlider value={45} />
                      </div>
                      <a
                        href="socialmediaexaminer.com"
                        target="_blank"
                        className="app__dash__aside__metric__label--sm"
                      >
                        socialmediaexaminer.com
                      </a>
                      <div className="app__dash__aside__metric__range">
                        <RangeSlider value={45} />
                      </div>
                      <a
                        href="socialmediaexaminer.com"
                        target="_blank"
                        className="app__dash__aside__metric__label--sm"
                      >
                        socialmediaexaminer.com
                      </a>
                      <div className="app__dash__aside__metric__range">
                        <RangeSlider value={45} />
                      </div>
                      <a
                        href="socialmediaexaminer.com"
                        target="_blank"
                        className="app__dash__aside__metric__label--sm"
                      >
                        socialmediaexaminer.com
                      </a>
                      <div className="app__dash__aside__metric__range">
                        <RangeSlider value={45} />
                      </div>
                      <a
                        href="socialmediaexaminer.com"
                        target="_blank"
                        className="app__dash__aside__metric__label--sm"
                      >
                        socialmediaexaminer.com
                      </a>
                      <div className="app__dash__aside__metric__range">
                        <RangeSlider value={45} />
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="col-md-8 col-xl-9 py-4">
                  <div className="app__intro mb-4">
                    <h1 className="heading heading--1">
                      Dash lorem ispum set amet
                    </h1>
                    <p>
                      If several languages coalesce, the grammar of the
                      resulting language is more simple and regular than that of
                      the individual languages. The new common language will be
                      more simple and regular than the existing European
                      languages
                    </p>
                  </div>
                  <div className="app__graph__wrapper">
                    <div className="py-3">
                      <h2 className="heading heading--3">Chart</h2>
                    </div>
                    <DashGraph />
                    {/* <DashGraph /> */}
                    {/* <DashGraph /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Dash;
