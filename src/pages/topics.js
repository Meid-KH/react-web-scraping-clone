import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import TopicsSortableTable from "../components/TopicsSortableTable";

function Topics() {
  return (
    <Layout>
      <div className="app__search mb-3">
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
        <h2 className="heading heading--2 mt-2">Search topics</h2>
      </div>

      <TopicsSortableTable />
    </Layout>
  );
}

export default Topics;
