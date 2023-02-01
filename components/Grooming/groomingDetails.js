import React, { useEffect, useState } from "react";
import Navbar from "../SideNavbar/SideNavbar";
import styles from "../../styles/GroomingDetails.module.css";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { useSnackbar } from "notistack";
import axios from "axios";
import { Container, Row, Col, Table } from "react-bootstrap";

const GroomingDetails = () => {
  
    const { enqueueSnackbar } = useSnackbar();
  const [groomingdata, setGroomingdata]=useState({});
 
  useEffect(()=>{
   let groomingdata = JSON.parse(localStorage.getItem("groomingdetails"));
   setGroomingdata(groomingdata);
  },[])
  const markAsUpcoming = async (userID, orderId) => {
    try {
       await axios.post(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/update/status",
        {
          uid: userID,
          status: "Upcoming",
          orderID: orderId,
        }
      );
      let groomingObj = {...groomingdata}
      groomingObj["status"] = "Upcoming";
      setGroomingdata(groomingObj);
      enqueueSnackbar("Updated Successfully", { variant: "success" });
    } catch (e) {
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong", { variant: "error" });
      }
    }
  };

  const markAsDone = async (userID, orderId) => {
    try {
       await axios.post(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/update/status",
        {
          uid: userID,
          status: "Completed",
          orderID: orderId,
        }
      );
      let groomingObj = {...groomingdata}
      groomingObj["status"] = "Completed";
      setGroomingdata(groomingObj);
      enqueueSnackbar("Updated Successfully", { variant: "success" });
    } catch (e) {
        console.log("error message",e.message)
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong", { variant: "error" });
      }
    }
  };
  const cancel = async (userID, orderId) => {
    try {
      await axios.post(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/cancle/order",
        {
          uid: userID,
          status: "Cancelled",
          orderID: orderId,
        }
      );
      let groomingObj = {...groomingdata}
      groomingObj["status"] = "Cancelled";
      setGroomingdata(groomingObj);
      enqueueSnackbar("Updated Successfully", { variant: "success" });
    } catch (e) {
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong", { variant: "error" });
      }
    }
  };

  console.log("groomingdeatlspage", groomingdata);
  return (
    <div className={styles.userContainer}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.colUser}>
            <span className={styles.userListSpan}>Grooming Details</span>
          </div>
          <div className={styles.colUser}>
            <div className={styles.profile}>
              <span className={styles.profileIcon}>
                <i className="fa fa-user-circle fa-2x"></i>
              </span>
              <p>Dinesh Kapri</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.userDetails}>
      <div className={styles.panel1}>
      <Container>
            <Row>
              <Col>
                <div className={styles.udetails}>
                  <p>
                  user_selected_time : <span>&nbsp;&nbsp; {groomingdata.user_selected_time}</span>
                  </p>
                  <p>
                  cost : <span>&nbsp;&nbsp;{groomingdata.cost}</span>
                  </p>
                  <p>
                  orderID : <span>&nbsp;&nbsp;{groomingdata.orderID}</span>
                  </p>
                  <p>
                  pet_addres : <span>&nbsp;&nbsp; {groomingdata.pet_addres}</span>
                  </p>
                  <p>
                  booking_date : <span>&nbsp;&nbsp;{groomingdata.booking_date}</span>
                  </p>
                  <p>
                  user_selected_date : <span>&nbsp;&nbsp;{groomingdata.user_selected_date}</span>
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.udetails}>
                <p>
                is_completed : <span>&nbsp;&nbsp; {String(groomingdata.is_completed)}</span>
                  </p>
                  <p>
                  pet_name : <span>&nbsp;&nbsp;{groomingdata.pet_name}</span>
                  </p>
                  <p>
                  service : <span>&nbsp;&nbsp;{groomingdata.service}</span>
                  </p>
                  <p>
                  pet_unique_id : <span>&nbsp;&nbsp;{groomingdata.pet_unique_id}</span>
                  </p>
                  <p>
                  status : <span>&nbsp;&nbsp;{groomingdata.status}</span>
                  </p>
                </div>
              </Col>
              
            </Row>
            <Row>
            <Col>
            <div className={styles.markContainer}>
                {groomingdata.status === "Completed" ? (
                  <div
                    className={styles.markAsUpcoming}
                    onClick={() =>
                      markAsUpcoming(
                        groomingdata.user_id,
                        groomingdata.orderID
                      )
                    }
                  >
                    Mark as Upcoming
                  </div>
                ) : groomingdata.status === "Cancelled" ? (
                  <div
                    className={styles.markAsDoneButon}
                    onClick={() =>
                      markAsDone(groomingdata.user_id, groomingdata.orderID)
                    }
                  >
                    Mark as Done
                  </div>
                ) : (
                  <div className={styles.markAsDoneContainer}>
                    <div
                      className={styles.markAsDoneButon}
                      onClick={() =>
                        markAsDone(groomingdata.user_id, groomingdata.orderID)
                      }
                    >
                      Mark as DONE
                    </div>
                    <div
                      className={styles.cancel}
                      onClick={() =>
                        cancel(groomingdata.user_id, groomingdata.orderID)
                      }
                    >
                      Cancel
                    </div>
                  </div>
                )}
              </div>
              </Col></Row>
          </Container>
      </div>
      </div>
    </div>
  );
};

export default GroomingDetails;
