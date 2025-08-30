import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

// Define the override styles
const override = {
    display: "block",
    margin: "0 auto",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
};

const Loader = () => {
    return (
        <div className="loader-container">
            <PuffLoader
                color="#36d7b7"
                size={60}
                cssOverride={override}
                loading={true}
            />
        </div>
    )
}

export default Loader
