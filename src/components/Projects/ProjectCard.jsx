import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, sourceWeb, sourceMobile,video },
}) => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    
    // Navigate to the gallery page with the demo images
    navigate("/gallery", { state: { images: demo, title } });
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {/* Conditionally render Demo button if demo images exist */}
        {demo && demo.length > 0 && (
          <button onClick={handleDemoClick} className={styles.link}>
            Gallery
          </button>
        )}
        {video && video.length > 0 && (

        <a href={video} className={styles.link}>
          Video
        </a>
      )}
        <a href={sourceWeb} className={styles.link}>
          Source (Web)
        </a>
        {sourceMobile && sourceMobile.length > 0 && (

        <a href={sourceMobile} className={styles.link}>
          Source (Mobile)
        </a>
      )}
      </div>
    </div>
  );
};
