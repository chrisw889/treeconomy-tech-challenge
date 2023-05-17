import "../../styles/App.css";
import "../organisms/ProjectList"
import ProjectList from "../organisms/ProjectList";

// Main page of the project
const App = () => (
  <>
    {/* Title */}
    <div className="app-header">
      Treeconomy - Christopher Worthington
    </div>
    <ProjectList className="project-list"/>
  </>
);

export default App;
