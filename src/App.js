import React, { Component } from "react";
import GalleryContextProvider from "./context/GalleryContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <GalleryContextProvider>
        <HashRouter basename="/WebGallery">
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/city" />}
              />

              <Route
                path="/city"
                render={() => <Item searchTerm="city" />}
              />
              <Route path="/dog" render={() => <Item searchTerm="dog" />} />
              <Route path="/cat" render={() => <Item searchTerm="cat" />} />
              <Route path="/food" render={() => <Item searchTerm="food" />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </GalleryContextProvider>
    );
  }
}

export default App;