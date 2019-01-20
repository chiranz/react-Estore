import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-capitalize text-title pt-5">
            <hl className="display-4">404</hl>
            <hl>error</hl>
            <h2>page not found</h2>
            <h3>
              the requested url{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
