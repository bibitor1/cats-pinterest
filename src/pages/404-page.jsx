import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="cats">
      <h1>404.
        <br />
        <p>Page not found</p>
      </h1>
      <Link to="/">Go to main page</Link>
    </section>
  )
}

export default PageNotFound;
