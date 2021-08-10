import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import ArticlesSortableTable from "../components/ArticlesSortableTable";

function Articles() {
  return (
    <Layout>
      <div className="app__search mb-3">
        <div className="app__intro mb-4">
          <h1 className="heading">List of articles</h1>
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vel fugiat doloribus eum atque? Eveniet quae, ab nobis
            perferendis cum, quod unde tenetur iste minus impedit fugit maiores
            inventore quidem voluptatum numquam! Veniam perspiciatis vero
            officia dolores sed cum, molestiae tempora nostrum, a ut quod
            impedit architecto commodi voluptate sequi laboriosam nulla, quam
            et. Sequi id, in facilis tempora molestiae soluta!
          </p>
        </div>
      </div>

      <ArticlesSortableTable />
    </Layout>
  );
}

export default Articles;
