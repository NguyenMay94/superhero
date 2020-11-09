import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./redux/reducers/reducer";

import Header from "./components/Navigation/Navigation";
import ContentRouter from "./containers/ContentRouter";

const { Content, Footer } = Layout;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout className="layout">
            <Header />
            <Content className="container">
              <ContentRouter />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Super Hero ©2020 Created by May Nguyen
            </Footer>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
