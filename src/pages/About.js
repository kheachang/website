import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function About() {
  // useEffect(() => {
  //   document.title = "quinn's life (〃 ω 〃)";
  // }, []);

  return (
    <div>
      {/* <img src="/images/me.png" alt="it's me!" width="200" height="auto" /> */}
      <p>
        <nobr>meeee</nobr>
      </p>
      <hr class="dashed" />
      <p>
        wheeee some stuff about me
      </p>
    </div>
  );
}

export default About;