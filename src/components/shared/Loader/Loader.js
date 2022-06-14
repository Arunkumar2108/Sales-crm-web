import React, { Fragment } from "react";
import "./Loader.scss";

export default function Loader() {
    return (
        <Fragment>
            <div className="loader__wrapper">
                <div className="loader">
                    <div className="loader-inner line-scale">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
