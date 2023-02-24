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
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';

const Service = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const userId = router.query.user_id;
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [vaccineData, setVaccineData] = useState([]);
  const [groomingdata, setGroomingdata]=useState([]);

  
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
              <p>Prasanjit Prusty</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.userDetails}>
      <Row>
      <Col></Col>
      <Col className={styles.userBack}>
      <Link href="/user"> <button className="btn btn-outline-danger btn-md"><i class="fa fa-arrow-circle-left"></i> BACK</button></Link>
     </Col>
     </Row>
     <Accordion defaultActiveKey="0">
     <Accordion.Item eventKey="0">
       <Accordion.Header>Grooming Services</Accordion.Header>
       <Accordion.Body>
       <div className={styles.panel1}>
      
       {groomingdata.length==0?<h5>You have no grooming services ...</h5>: 
       <Container>
       <Row className="justify-content-md-center" style={{margin: "0 0 10px 0"}}>
       <Col md="auto"> 
       <input
       type="text"
       className={styles.formControl}
       placeholder="Search by OrderId ..."
       onChange={(e) => setSearch(e.target.value)}
     />
     </Col>
       </Row>
         <Row>
         {groomingdata?.filter((user) =>
          user.orderID.includes(search)).map((data,index)=>(
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
       </Accordion.Body>
     </Accordion.Item>
     <Accordion.Item eventKey="1">
       <Accordion.Header>Vaccine Services</Accordion.Header>
       <Accordion.Body>
       <div className={styles.panel2}>
       {vaccineData.length==0?<h5>You have no vaccine services ...</h5>: <Container>
       <Row className="justify-content-md-center" style={{margin: "0 0 10px 0"}}>
       <Col md="auto"> 
       <input
       type="text"
       className={styles.formControl}
       placeholder="Search by OrderId ..."
       onChange={(e) => setSearch(e.target.value)}
     />
     </Col>
     </Row>
         <Row>
         {vaccineData?.filter((user) =>
          user.orderID.includes(search)).map((data,index)=>(
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
       </Accordion.Body>
     </Accordion.Item>
   </Accordion>
       
       
      </div>
    </div>
  );
};

export default Service;
