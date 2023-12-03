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
        <a href="https://github.com/kheachang/strava-meet-cute" class="clickable" target="_blank">
          <u>
            <b>meet cute strava</b>
          </u>
        </a>{" "}
        <br />
        nothing to see here...literally just started...WIP
      </p>
    </div>
  );
}

export default Projects;
