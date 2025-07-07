import React from "react";

export default function PageTitle({ title }) {
  // console.log(title, description);
  return (
    <>
      <h1 className="page-title">{title}</h1>{" "}
      {/* title here is a super parent prop coming from home to PageHeading to PageTitle so that theres no hardcoded value in any of the components and all components can be resused again and again*/}
    </>
  );
}
