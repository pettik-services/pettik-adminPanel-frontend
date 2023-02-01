import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../styles/service.module.css";
import Button from 'react-bootstrap/Button';
import Navbar from "../SideNavbar/SideNavbar";
import { Container, Row, Col, Table } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import Card from "react-bootstrap/Card";
import { useSnackbar } from "notistack";

const Service = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const userId = router.query.user_id;

  const [loading, setLoading] = useState(false);
  const [vaccineData, setVaccineData] = useState([]);
  const [groomingdata, setGroomingdata]=useState([]);

  const performAPICall = async () => {
   
    try {
      setLoading(true);
      const response = await axios.get(
        `https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/user/services/${userId}`
      );
      console.log("response data", response.data);
      console.log("response data", response.data.serviceList.grooming_details);
      setGroomingdata(response.data.serviceList.grooming_details);
      setVaccineData(response.data.serviceList.vaccination_details);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const markAsUpcoming = async (index,orderId) => {
    
    try {
       await axios.post(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/update/status",
        {
          uid: userId,
          status: "Upcoming",
          orderID: orderId,
        }
      );
      let groomingObj = [...groomingdata]
      groomingObj[index]["status"] = "Upcoming";
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

  const markAsDone = async (index,orderId) => {
    try {
       await axios.post(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/update/status",
        {
          uid: userId,
          status: "Completed",
          orderID: orderId,
        }
      );
      let groomingObj = [...groomingdata]
      groomingObj[index]["status"] = "Completed";
      console.log("clickfun",groomingObj)
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
  const cancel = async (index,orderId) => {
    try {
      await axios.post(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/cancle/order",
        {
          uid: userId,
          status: "Cancelled",
          orderID: orderId,
        }
      );
      let groomingObj = [...groomingdata]
      groomingObj[index]["status"] = "Cancelled";
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

  useEffect(() => {
    if (!!userId) {
      performAPICall();
    }
  }, [userId]);

  return (
    <div className={styles.userContainer}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.colUser}>
            <span className={styles.userListSpan}>Services Details</span>
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
          <h2>Grooming Services</h2>
          {groomingdata.length==0?<h5>You have no grooming services ...</h5>: 
          <Container>
            <Row>
            {groomingdata.map((data,index)=>(
              <Col xs={6} key={index}>
                <Card bg={"secondary"} text={"white"} className="mb-4" style={{ height: '23rem' }}>
                  <Card.Body>
                   
                      <Card.Text className={styles.cardText}>
                        user_selected_time : <span>&nbsp;&nbsp; {data.user_selected_time}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        cost : <span>&nbsp;&nbsp;{data.cost}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        orderID : <span>&nbsp;&nbsp;{data.orderID}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        pet_addres : <span>&nbsp;&nbsp; {data.pet_address}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        booking_date : <span>&nbsp;&nbsp;{data.booking_date}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        user_selected_date : <span>&nbsp;&nbsp;{data.user_selected_date}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        is_completed : <span>&nbsp;&nbsp; {data.is_completed}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        pet_name : <span>&nbsp;&nbsp;{data.pet_name}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        service : <span>&nbsp;&nbsp;{data.service}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        pet_unique_id : <span>&nbsp;&nbsp;{data.pet_unique_id}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        status : <span>&nbsp;&nbsp;{data.status}</span>
                     </Card.Text>
                     <Card.Text className={styles.markContainer}>{
                      data.status === "Completed" ? (
                        <span className={styles.markAsUpcoming} onClick={() =>
                      markAsUpcoming(index,
                        data.orderID
                      )}> Mark as Upcoming</span>
                      ): data.status === "Cancelled" ? (
                        <span  className={styles.markAsDoneButon} onClick={() =>
                      markAsDone(index, groomingdata.orderID)
                    }>Mark as Done</span>
                      ):(
                        <Card.Text className={styles.markAsDoneContainer}>
                        <span  className={styles.markAsDoneButon} onClick={() =>
                      markAsDone(index, groomingdata.orderID)
                    }>Mark as DONE</span>
                        <span  className={styles.cancel} onClick={() =>
                      cancel(index, groomingdata.orderID)
                    }>Cancel</span>
                      </Card.Text>
                      )
                     }
                     </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
              
            </Row>
          </Container>}
         
        </div>
        <div className={styles.panel2}>
          <h2>Vaccine Services</h2>
          {vaccineData.length==0?<h5>You have no vaccine services ...</h5>: <Container>
            <Row>
            {vaccineData.map((data,index)=>(
              <Col xs={6} key={index}>
                <Card bg={"secondary"} text={"white"} className="mb-4" style={{ height: '23rem' }}>
                  <Card.Body>
                   
                      <Card.Text className={styles.cardText}>
                        user_selected_time : <span>&nbsp;&nbsp; {data.user_selected_time}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        cost : <span>&nbsp;&nbsp;{data.cost}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        orderID : <span>&nbsp;&nbsp;{data.orderID}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        pet_addres : <span>&nbsp;&nbsp; {data.pet_address}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        booking_date : <span>&nbsp;&nbsp;{data.booking_date}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        user_selected_date : <span>&nbsp;&nbsp;{data.user_selected_date}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        is_completed : <span>&nbsp;&nbsp; {data.is_completed}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        pet_name : <span>&nbsp;&nbsp;{data.pet_name}</span>
                     </Card.Text>
                     
                      <Card.Text className={styles.cardText}>
                        pet_unique_id : <span>&nbsp;&nbsp;{data.pet_unique_id}</span>
                     </Card.Text>
                      <Card.Text className={styles.cardText}>
                        status : <span>&nbsp;&nbsp;{data.status}</span>
                     </Card.Text>
                     <Card.Text className={styles.markContainer}>{
                      data.status === "Completed" ? (
                        <span className={styles.markAsUpcoming}> Mark as Upcoming</span>
                      ): data.status === "Cancelled" ? (
                        <span  className={styles.markAsDoneButon}>Mark as Done</span>
                      ):(
                        <Card.Text className={styles.markAsDoneContainer}>
                        <span  className={styles.markAsDoneButon}>Mark as DONE</span>
                        <span  className={styles.cancel}>Cancel</span>
                      </Card.Text>
                      )
                     }
                     </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
              
            </Row>
          </Container>}
         
        </div>
      </div>
    </div>
  );
};

export default Service;
