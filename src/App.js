import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages components
import Homepage from "./pages/homepage";
import Articles from "./pages/articles";
import Topics from "./pages/topics";
import Dash from "./pages/dash";
import SingleArticle from "./pages/singleArticle";
import CreateTopic from "./pages/CreateTopic";
import EditTopic from "./pages/EditTopic";

function App() {
  return (
    <div className="app">
      {/* <header className="App-header">
        <h1>React Web srapping </h1>
      </header> */}
      <BrowserRouter>
        <Switch>
          {/* Dash page */}
          <Route extact path="/dash" render={() => <Dash />} />
          {/* Topic - Edit */}
          <Route
            extact
            path="/topics/edit/:id"
            render={(routeProps) => (
              <EditTopic topicId={routeProps.match.params.id} />
            )}
          />
          {/* Topic - Create */}
          <Route extact path="/topics/create" render={() => <CreateTopic />} />
          {/* Topics page */}
          <Route extact path="/topics" render={() => <Topics />} />
          {/* Article - single page */}
          <Route
            extact
            path="/articles/:id"
            render={(routeProps) => (
              <SingleArticle articleId={routeProps.match.params.id} />
            )}
          />
          {/* Articles page */}
          <Route extact path="/articles" render={() => <Articles />} />
          {/* Homepage */}
          <Route extact path="/" render={() => <Homepage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
