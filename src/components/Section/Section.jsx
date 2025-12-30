import React,{useState, useCallback, useEffect} from "react";
import styles from "./Section.module.css";
import Button from "../Button/Button.jsx";
import Card from "../Card/Card.jsx";
import axios from "axios";
const Section = () => {
    const [topAlbums, setTopAlbums] = React.useState([]);
    const [newAlbums, setNewAlbums] = React.useState([]);
    const [topLabel, setTopLabel] = useState("Show all");
    const [newLabel, setNewLabel] = useState("Show all");
    const performApiCall = useCallback(async() => {
        try {
            const [topAlbumResponse, newAlbumResponse] = await Promise.all([
                axios.get('https://qtify-backend.labs.crio.do/albums/top'),
                axios.get('https://qtify-backend.labs.crio.do/albums/new')
            ]);
            setTopAlbums(topAlbumResponse.data);
            setNewAlbums(newAlbumResponse.data);
        } catch (err){
            console.log("Error", err);
        }
    },[]);

    // purpose of calling
    useEffect(() => {
        performApiCall();
    }, [performApiCall]);

    const topButtonLabelImplementation = useCallback((e) => {
        topLabel === "Show all" ? setTopLabel("Collapse") : setTopLabel("Show all");
    },[topLabel]);

    const newButtonLabelImplementation = useCallback((e) => {
        newLabel === "Show all" ? setNewLabel("Collapse") : setNewLabel("Show all");
    },[newLabel]);


    return(
        <>
           <div className={styles.parentSection}>
                <div className={styles.section}>
                    <h2 className={styles.topAlbums}>Top Albums</h2>
                    <Button label={topLabel} onClick={topButtonLabelImplementation} />
                </div>
                <div className={styles.displayGrid}>
                    {topAlbums.map((album, index) => {
                        if (topLabel === "Show all" && index >= 7) return null;
                        return <Card topAlbum={album} key={album.id} type="top"/>
                    })}
                </div>
                    {topLabel === "Collapse" && <hr className={styles.line}/>}
                <div className={styles.section}>
                    <h2 className={styles.topAlbums}>New Albums</h2>
                    <Button label={newLabel} onClick={newButtonLabelImplementation} />
                </div>
                <div className={styles.displayGrid}>
                    {newAlbums.map((album, index) => {
                        if (newLabel === "Show all" && index >= 7) return null;
                        return <Card newAlbum={album} key={album.id} type="new"/>
                    })}
                </div>
           </div>
           <hr className={styles.line}/>
        </>
    );
}

export default Section;