import React from "react";
import styles from "./Card.module.css";
import Chip from '@mui/material/Chip';

const Card = ({topAlbum, newAlbum, type="top"}) => {
    console.log("Top Album in Card:", topAlbum);
    // console.log("New Album in Card:", newAlbum);
    const TOPALBUM = () => {
        return(
        <div className={styles.parentDivImage} key={topAlbum.id}>
            <div className={styles.imageContainerWithFollows}>
                <img src={topAlbum.image} alt={topAlbum.slug} className={styles.actualImage} />
                 <Chip 
                 label= {`${topAlbum.follows} follows`}
                 variant="outlined"
                      sx={{
                        minWidth: 71,
                        minHeight: 15,
                        top: 176,
                        left: 6,
                        opacity: 1,
                        gap : 1,
                        borderRadius: '50',
                        p: '4px 1px',
                        ml: '8px',
                        backgroundColor:'rgba(18, 18, 18, 1)',
                        color: 'rgba(255, 255, 255, 1)',
                    }}
                 />
            </div>
            New English Songs
        </div>
        )
    }

    const NEWALBUM = () => {
        return(
        <div className={styles.parentDivImage} key={newAlbum.id}>
            <div className={styles.imageContainerWithFollows}>
                <img src={newAlbum.image} alt={newAlbum.slug} className={styles.actualImage} />
                 <Chip 
                 label= {`${newAlbum.follows} follows`}
                 variant="outlined"
                      sx={{
                        minWidth: 71,
                        minHeight: 15,
                        top: 176,
                        left: 6,
                        opacity: 1,
                        gap : 1,
                        borderRadius: '50',
                        p: '4px 1px',
                        ml: '8px',
                        backgroundColor:'rgba(18, 18, 18, 1)',
                        color: 'rgba(255, 255, 255, 1)',
                    }}
                 />
            </div>
            New English Songs
        </div>
        )
    }
    
    return(
        <>
            {type === "top" ? TOPALBUM() : NEWALBUM()}  
        </>
    );
};

export default Card;
