import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      Built with 
      <FontAwesomeIcon
        icon={faHeart}
        className="footer-icon"
        aria-hidden="true"
      />
        by  
      <a href="https://www.linkedin.com/in/shayandutta10/" target="_blank" rel="noreferrer">
        shayandutta
      </a>
    </footer>
  );
}
