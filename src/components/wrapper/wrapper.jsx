import React from "react";
import Header from "../header/header"

function Wrapper({children}) {
  return (
    <>
    <Header />
    <main>
      {children}
    </main>
    </>
  );
}

export default Wrapper;
