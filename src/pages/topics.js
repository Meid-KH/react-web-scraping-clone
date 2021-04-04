import React from "react";
import Layout from "../Layout";
import ArticlesSortableTable from "../components/ArticlesSortableTable";

function Topics() {
  return (
    <Layout>
      <div className="app__search mb-5">
        <div className="app__intro mb-4">
          <h1 className="heading">List of Topics</h1>
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vel fugiat doloribus eum atque? Eveniet quae, ab nobis
            perferendis cum, quod unde tenetur iste minus impedit fugit maiores
            inventore quidem voluptatum numquam! Veniam perspiciatis vero
            officia dolores sed cum, molestiae tempora nostrum
          </p>
        </div>
        <div className="row">
          <div className="col col-xl-8_ col-sm-10_">
            <h2 className="heading heading--2">Search topics</h2>
            <form className="mt-2">
              <div className="flex-grow-1 d-flex ">
                <input
                  className="form--control"
                  name="search"
                  type="search"
                  placeholder="Type a topic..."
                />
                <button className="button button--primary">Search</button>
              </div>
              <label className="d-block py-2 text-reg" htmlFor="search">
                Displaying <strong>1-300</strong> in total of{" "}
                <strong>126.662</strong>
              </label>
            </form>
          </div>
        </div>
      </div>

      <ArticlesSortableTable />
    </Layout>
  );
}

export default Topics;
