import React from "react";
import { useNavigate } from "react-router-dom";

function Download() {
  const navigate = useNavigate();

  function sendHome(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <>
      <div onContextMenu={sendHome}>Download the files</div>
    </>
  );
}

export default Download;
