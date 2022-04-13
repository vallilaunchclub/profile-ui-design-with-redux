import "../styles/subpage.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUser } from "@fortawesome/free-solid-svg-icons";

const SubPage = () => {
    return (
        <div className="sub-page">
            <div className="timeline">
                <FontAwesomeIcon icon={faEye} className="timeline-icon" />
                <span className="timeline-title"> Timeline </span>
            </div>
            <div className="about">
                <FontAwesomeIcon icon={faUser} className="about-icon" />
                <span className="about-title">About</span>
            </div>
        </div>
    );
}

export default SubPage;