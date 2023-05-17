import "../../styles/App.css";
import ProjectDisplay from "../molecules/ProjectDisplay";
import axios from "axios";
import React, { useEffect, useState } from 'react';

const ProjectList = () => {
    // Page should re-render when projects are updated
    const [projects, setProjects] = useState([]);

    // Retrieve the project data on mount
    useEffect(() => {
        axios.get('https://sherwoodprojectdata.blob.core.windows.net/tech-challenge/projects.json')
        .then(({
            data: projects
        }) => {
            setProjects(projects);
        })
        .catch(error => {
            console.error("Failed to retrieve project list", error);
        });
    }, []);

    return (
        <>
            {/* Header above the grid */}
            <div className="project-list-header">
                Project list
            </div>

            {/* Using css grid display to organise the projects on the page */}
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectDisplay className="project-list" key={index} project={project}/>
                ))}
            </div>
        </>
    );
}

export default ProjectList;
