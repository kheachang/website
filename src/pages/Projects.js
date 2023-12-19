import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "kiki projects";
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <p>
        some projects, find the rest on my{" "}
        <a href="https://github.com/kheachang/" class="clickable" target="_blank" rel="noopener noreferrer">
          github
        </a>{" "}
      </p>
      <hr class="dashed" />
      <p>
        <a href="https://github.com/kheachang/strava-meet-cute" class="clickable" target="_blank" rel="noopener noreferrer">
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
