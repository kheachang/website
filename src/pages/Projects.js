import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "kiki projects";
  }, []);

  return (
    <div>
      <p>
        some projects, find the rest on my{" "}
        <a href="https://github.com/kheachang/" class="clickable" target="_blank">
          github
        </a>{" "}
      </p>
      <hr class="dashed" />
      <p>
        <NavLink to="/quinn-ai" class="clickable">
          <u>
            <b>quinn ai</b>
          </u>
        </NavLink>{" "}
        <br />
        talk to an ai version of me (try it out)!
      </p>
    </div>
  );
}

export default Projects;
