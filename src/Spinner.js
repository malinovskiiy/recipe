import React from "react";

export default function Spinner() {
  return (
    <>
      <div
        className="lds-roller"
        style={{
          display: "flex",
          margin: "3rem auto",
        }}
      >
        {" "}
        <div> </div>
        <div></div> <div> </div>
        <div></div> <div> </div>
        <div></div> <div> </div>
        <div></div>{" "}
      </div>
    </>
  );
}
