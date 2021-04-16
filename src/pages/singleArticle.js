import React, { useEffect, useState } from "react";
import Layout from "../Layout";
const { REACT_APP_API_URL } = process.env;

function SingleArticle({ articleId }) {
  // State Management
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchSingleArticle = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    await fetch(`${REACT_APP_API_URL}/article/${articleId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result[0]);
        setIsLoading(false);
        setArticle(result[0]);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  console.log("data ==> ", article);

  return (
    <Layout>
      {isLoading ? <p>Loading...</p> : <ArticleTemplate data={article} />}
    </Layout>
  );

  const ArticleTemplate = ({ data }) => {
    const {
      id,
      title,
      text,
      site,
      labels,
      date_time: date,
      article_keywords: keywords,
    } = article;

    if (isError) {
      return (
        <div className="alert alert--danger">
          <p>Oops ... Unexpected error occured while fetching data !</p>
        </div>
      );
    }

    return (
      <section className="app__wrapper">
        <div className="row">
          <div className="col-xl-9 col-md-8">
            <div className="app__content">
              <div className="app__intro">
                <h1 className="heading heading--1">{title}</h1>
                <p>{text}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-4">
            <aside className="app__aside">
              <div className="app__aside__heading">Date</div>
              <p>{date}</p>
              <div className="app__aside__heading">Keywords</div>
              <p>{keywords}</p>
              {labels && (
                <>
                  <div className="app__aside__heading">Labels</div>
                  <p>
                    {labels.map((label) => {
                      <span>{label}</span>;
                    })}
                  </p>
                </>
              )}

              {site && (
                <>
                  <div className="app__aside__heading">URL link</div>
                  <p>
                    <a href={site} target="_blank" rel="noreferrer">
                      {site}
                    </a>
                  </p>
                </>
              )}
            </aside>
          </div>
        </div>
      </section>
    );
  };
}

export default SingleArticle;
