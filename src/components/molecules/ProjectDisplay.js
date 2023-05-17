import "../../styles/App.css";
import FullDate from "../atoms/FullDate";

// Component used for each project display
const ProjectDisplay = (props) => {
    return (
        <>
            {/* Containers used to align image and text */}
            <div className="projecy-image-container">
                <img className="project-image" src={props.project.image} alt={props.project.name + " Image"}/>
            </div>
            <div className="project-details">
                <div className="project-name">{props.project.name}</div>
                <div className="project-credits-date">
                    <span>{props.project.available_credits} credits available</span>
                    <span><FullDate date={props.project.start_date}/></span>
                </div>
            </div>
        </>
    );
}

export default ProjectDisplay;
