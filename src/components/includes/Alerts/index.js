import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Alerts({ alerts }) {

    useEffect(() => {
        if (alerts.type === "error") {
            toast.error(alerts.message, {
                hideProgressBar: true,
                position: alerts.position,
                autoClose: alerts.close
            });
        }
        if (alerts.type === "success") {
            toast.success(alerts.message, {
                hideProgressBar: true,
                position: alerts.position,
                autoClose: alerts.close,
            });
        }
        if (alerts.type === "warning") {
            toast.warning(alerts.message, {
                hideProgressBar: true,
                position: alerts.position,
                autoClose: alerts.close
            });
        }
        if (alerts.type === "info") {
            toast.info(alerts.message, {
                hideProgressBar: true,
                position: alerts.position,
                autoClose: alerts.close
            });
        }
        if (alerts.type === "dark") {
            toast.dark(alerts.message, {
                hideProgressBar: true,
                position: alerts.position,
                autoClose: alerts.close
            });
        }
    }, [alerts]);

    return (
        <div>
            <ToastContainer />
        </div>
    );
}

const mapState = (state) => ({
    alerts: state.alerts
});

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Alerts);

