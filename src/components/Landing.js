import "./Landing.css";

import React from "react";

const Landing = ({ gotIt, setGotIt }) => {
    return (
        <>
            <div className="container">
                <div className="container-info">
                    <h2 className="top-part">Ready ?</h2>
                    <div className="bottom-part">
                        <p>
                            press any keys from a to Z to emmit a balafon tone
                        </p>
                    </div>
                    <button className="btn" onClick={() => setGotIt(!gotIt)}>
                        Got it!
                    </button>
                </div>
            </div>
        </>
    );
};

export default Landing;
