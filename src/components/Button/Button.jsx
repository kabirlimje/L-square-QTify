import React from "react";
import styles from "./Button.module.css";

export default function Button({label, onClick, className}){
    return(
        <>
            <button className={`${styles.button} ${className ?? ""}`} onClick={onClick}>
                {label}
            </button>
        </>
    )
}