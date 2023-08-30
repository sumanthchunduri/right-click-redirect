import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const ref = React.useRef(null);

  React.useEffect(() => {
    let current = ref.current;
    function listner(e) {
      e.preventDefault();
      console.log("hi");
      // redirect("/download");
      navigate("/download");
      // return false;
    }
    current.addEventListener("contextmenu", listner);

    return () => {
      current.removeEventListener("contextmenu", listner);
    };
  }, [navigate]);

  return (
    <>
      <div ref={ref}>Hello world</div>
    </>
  );
}

export default Home;
