import React,{useState, useCallback, useEffect} from "react";
import styles from "./Section.module.css";
import Button from "../Button/Button.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import Card from "../Card/Card.jsx";
import ColorTabs from "../Tab/Tab.jsx";
import axios from "axios";
const Section = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [songsAlbum, setSongsAlbum] = useState([]);
    const [tabs, setTabs] = useState([]);
    const [topLabel, setTopLabel] = useState("Show all");
    const [newLabel, setNewLabel] = useState("Show all");
    const performApiCall = useCallback(async() => {
        try {
            const [topAlbumResponse, newAlbumResponse, songsAlbumResponse, tabResponse] = await Promise.all([
                axios.get('https://qtify-backend.labs.crio.do/albums/top'),
                axios.get('https://qtify-backend.labs.crio.do/albums/new'),
                axios.get('https://qtify-backend.labs.crio.do/songs'),
                axios.get('https://qtify-backend.labs.crio.do/genres')
            ]);
            setTopAlbums(topAlbumResponse.data);
            setNewAlbums(newAlbumResponse.data);
            setSongsAlbum(songsAlbumResponse.data);
            setTabs(tabResponse.data.data);
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
                
                {/* top albums section */}
                <div className={styles.section}>
                    <h2 className={styles.topAlbums}>Top Albums</h2>
                    <Button label={topLabel} onClick={topButtonLabelImplementation} />
                </div>
                {topLabel === "Show all" ? <Carousel data={topAlbums}/> :
                <div className={styles.displayGrid}>
                    {topAlbums.map((album, index) => (
                        <div key={album.id} style={{display:topLabel === "Show all" && index >= 7 ? "none" : "block"}}>
                            {/* <Card topAlbum={album} key={album.id} type="top"/> */}
                            <Card album={album} key={album.id} />
                        </div>
                    ))}
                </div>}
                    {topLabel === "Collapse" && <hr className={styles.line}/>}
                    
                {/* new albums section */}
                <div className={styles.section}>
                    <h2 className={styles.topAlbums}>New Albums</h2>
                    <Button label={newLabel} onClick={newButtonLabelImplementation} />
                </div>
                {newLabel === "Show all" ? <Carousel data={newAlbums}/> :
                <div className={styles.displayGrid}>
                    {newAlbums.map((album, index) => (
                        <div key={album.id} style={{display: newLabel === "Show all" && index >= 7 ? "none" : "block"}}>
                            {/* <Card newAlbum={album} key={album.id} type="new"/> */}
                            <Card album={album} key={album.id} />
                        </div>
                    ))}
                </div>}

                {/* songs section */}
                <div className={styles.section}>
                    <h2 className={styles.topAlbums}>Songs</h2>
                </div>
                <ColorTabs tabData={tabs} songsData={songsAlbum} />

            </div>
           <hr className={styles.line}/>
        </>
    );
}

export default Section;