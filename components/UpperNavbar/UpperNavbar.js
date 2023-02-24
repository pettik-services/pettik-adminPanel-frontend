import React from "react";
import styles from "../../styles/UpperNavbar.module.css";
import Badge from "@mui/material/Badge";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const UpperNavbar = ({ Navbarheading}) => {
  const router = useRouter();
  const [notificationCount, setNotificationCount] = useState("");
  setInterval(function () {
    notificationView();
  }, 600000);
  const notificationView = async () => {
    try {
      const resNotification = await axios.get(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/notificationView"
      );
      console.log("notification response", resNotification.data);
      setNotificationCount(resNotification.data.notificationCount);
    } catch (e) {
      console.log("notification error", e);
    }
  };
  const notificationUpdate = async () => {
    try {
      const res = await axios.get(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/updateAdminView"
      );
      console.log("updateAdminview notification", res.data);
      router.push("/orders")
    } catch (e) {
      console.log("notificationupdate Error", e);
    }
  };

  useEffect(() => {
    notificationView();
  }, []);
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.colUser}>
            <span className={styles.userListSpan}>{Navbarheading}</span>
          </div>
          <div className={styles.colUser}>
            <div className={styles.profile}>
              <Badge
                badgeContent={notificationCount}
                color="error"
                className={styles.profileIconNotification}
                onClick={notificationUpdate}
              >
                <span className={styles.profileIcon}>
                  <i className="fa fa-user-circle fa-2x"></i>
                </span>
              </Badge>

              <p>Prasanjit Prusty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
