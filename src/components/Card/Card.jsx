import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

const Card = ({ album, type="" }) => {



  return (
    <div className={styles.parentDivImage} key={album.id}>
      <div className={styles.imageContainerWithFollows}>
        <img
          src={album.image}
          alt={type === "songs" ? album.title : album.slug}
          className={styles.actualImage}
        />
        <Chip
          label={type === "songs" ? `${album.likes} Likes` : `${album.follows} Follows`}
          variant="outlined"
          sx={{
            minWidth: 71,
            minHeight: 15,
            top: 176,
            left: 6,
            opacity: 1,
            gap: 1,
            borderRadius: "50",
            p: "4px 1px",
            ml: "8px",
            backgroundColor: "rgba(18, 18, 18, 1)",
            color: "rgba(255, 255, 255, 1)",
          }}
        />
      </div>
      <p className={styles.imageTitle}>{album.title}</p>
    </div>
  );
};

export default Card;
