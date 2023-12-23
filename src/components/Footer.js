import "./footer.css";

function Footer() {
  return (
    <div>
      <hr class="dashed" />
      <p class="links">
        <a
          href="https://www.linkedin.com/in/kheachang/"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-linkedin fa-lg"
        ></a>
        <a
          href="https://github.com/kheachang/"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-github fa-lg"
        >
          {" "}
        </a>
        {<a
          href="https://twitter.com/kiki404_"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-twitter fa-lg"
        ></a>}
      </p>
    </div>
  );
}

export default Footer;
