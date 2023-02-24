import styles from "../../styles/AddPartner.module.css";
import Navbar from "../SideNavbar/SideNavbar";
import { useSnackbar } from "notistack";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Container, Row, Col, Table, Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import Multiselect from "multiselect-react-dropdown";
import UpperNavbar from "../UpperNavbar/UpperNavbar";

const AddPartner = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const [includeData, setIncludeData] = useState([]);
  const [validated, setValidated] = useState(false);
  const [role, setRole] = useState([]);
 
  

  const options = [
    {
      key: "groomer",
    },
    {
      key: "trainer",
    },
    {
      key: "dog walker",
    },
    {
      key: "doctor",
    },
    {
      key: "advertizer",
    },
    {
      key: "pet hostel",
    },
    {
      key: "dietitian",
    },
  ];

  const [fieldData, setFieldData] = useState({
    city: "",
    street_address: "",
    pin: "",
  });

  const [starttime, setStarttime]= useState("");
  const [endtime, setEndtime]= useState("");
  const timeArray = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const onSelect =(selectedList, selectedItem)=> 
  {
     setRole(selectedList);
 }
  const handleStartTime=(e)=>{
    setStarttime(e.target.value);
  }
  const handleEndTime=(e)=>{
    setEndtime(e.target.value);
    
  }
  console.log("includeData",includeData)
  const submit = async (formData, includeData) => {
   
    let newIncudeData = includeData.map((obj)=>(
      { 
            ...obj,time:starttime + "-" + endtime
      } 
))
console.log("newinclude",newIncudeData)
  
    if (!validateInput(formData, includeData)) return;
      try{
          await axios.post(
              "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/partner/add",
              {
               name:formData.name,
                email: formData.email,
                phone_no: formData.phone,
                description: formData.description,
                role: role,
                available_location_time:newIncudeData,
              }
            );
            enqueueSnackbar("Added Successfully", { variant: "success" });
            router.push("/partner");
      }
      catch(e){
          console.log("error message",e.message)
          if (e.response && e.response.status === 400) {
            enqueueSnackbar(e.response.data.message, { variant: "error" });
          } else {
            enqueueSnackbar("Somthing went wrong", { variant: "error" });
          }
      }

    setFormData({
      name: "",
    email: "",
    phone: "",
    description: "",
    });
    setIncludeData([]);
    setStarttime("");
    setEndtime("");
    setRole([]);
  };

  const validateInput = (data, includeData) => {
    if (!data.name) {
      enqueueSnackbar("name is a required field", { variant: "error" });
      return false;
    }
    if (!data.email) {
      enqueueSnackbar("email is a required field", {
        variant: "error",
      });
      return false;
    }
    if (!data.phone) {
      enqueueSnackbar(" phone is a required field", {
        variant: "error",
      });
      return false;
    }
    if (!data.description) {
      enqueueSnackbar("description is a required field", {
        variant: "error",
      });
      return false;
    }
    console.log("role",role)
    if (!role.length) {
      enqueueSnackbar("role is a required field", { variant: "error" });
      return false;
    }
    if (!starttime) {
      enqueueSnackbar("Start time is a required field", {
        variant: "error",
      });
      return false;
    }
    if (!endtime) {
      enqueueSnackbar("End time is a required field", {
        variant: "error",
      });
      return false;
    }
   
    if (!includeData.length) {
      enqueueSnackbar("please add location address", {
        variant: "error",
      });
      return false;
    }
    // if (!fieldData.street_address) {
    //   enqueueSnackbar("Street Address include field", {
    //     variant: "error",
    //   });
    //   return false;
    // }
    // if (!fieldData.pin) {
    //   enqueueSnackbar("Street Address include field", {
    //     variant: "error",
    //   });
    //   return false;
    // }
    
    return true;
  };
  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };

  const setFiled = (field, val) => {
    setFieldData((prevValue) => ({ ...prevValue, [field]: val }));
  };

  const deleteInclude = (index) => {
    const IncludeArray = [...includeData];
    IncludeArray.splice(index, 1);
    console.log("deleteIndex", IncludeArray);
    setIncludeData(IncludeArray);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setIncludeData([...includeData].concat([fieldData]));
    setValidated(true);
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.partnerContainer}>
      <Navbar />
      <UpperNavbar  Navbarheading="Add Partner" />
      <div className={styles.userDetails}>
        <div className={styles.panel1}>
          <Container>
            <Row>
              <Col>
                <div className={styles.udetails}>
                  <label className={styles.title}>Partner Name</label>
                  <div className={styles.userInput}>
                    <input
                      className={styles.userName}
                      name="name"
                      value={formData.name}
                      onChange={handelInput}
                      placeholder="Enter partner name"
                    />
                  </div>
                </div>
                <div className={styles.udetails}>
                  <label className={styles.title}>Email</label>
                  <div className={styles.userInput}>
                    <input
                      className={styles.userName}
                      name="email"
                      value={formData.email}
                      onChange={handelInput}
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className={styles.udetails}>
                  <label className={styles.title}>Phone number</label>
                  <div className={styles.userInput}>
                    <input
                      className={styles.userName}
                      name="phone"
                      value={formData.phone}
                      onChange={handelInput}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div className={styles.udetails}>
                  <label className={styles.title}>Description</label>
                  <div className={styles.userInput}>
                    <textarea
                      className={styles.userDescription}
                      name="description"
                      value={formData.description}
                      onChange={handelInput}
                      placeholder="Enter description"
                    />
                  </div>
                </div>
                <div className={styles.udetails}>
                  <label className={styles.title}>Role &nbsp;</label>
                  <Multiselect
                    displayValue="key"
                    options={options}
                    onSelect={onSelect}
                  />
                </div>
                <div className={styles.time}>
                  <label className={styles.timeTitle}>Select Time</label>
                  <div className="row mb-3">
                 <div className="form-group col-md-4">
                 <label className={styles.titlestart}>Start Time :</label>
                 <select name="starttime" className="form-control" onChange={handleStartTime}>
                   <option>select time--</option>
                   {
                     timeArray.map( (time,index)=>(
                   <option key={index}>{time}</option>
                     ))
                }
                 
                 </select>
               </div>
               <div className="form-group col-md-4">
               <label className={styles.titlestart}>End Time :</label>
               <select name="endtime" className="form-control" onChange={handleEndTime}>
                   <option>select time--</option>
                   {
                    timeArray.map( (time,index)=>(
                   <option key={index}>{time}</option>
                     ))
                     }
                 </select>
               </div>
                </div>
                </div>
              </Col>
              <Col>
                <div className={styles.udetails}>
                  <h4>Locations</h4>
                  <hr />
                  <div className={styles.includeButton}>
                    <Button variant="outline-primary" onClick={handleShow}>
                      Add Location
                    </Button>
                  </div>
                  <div className={styles.includeDataContainer}>
                    {includeData.map((incl, index_2) => (
                      <ul key={index_2}>
                        <li>
                          <span>{incl.city},{incl.street_address},{incl.pin}</span>
                          <span
                            className={styles.includeSpan}
                            onClick={() => deleteInclude(index_2)}
                          >
                            <FaTrash />
                          </span>
                        </li>
                      </ul>
                    ))}
                  </div>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form noValidate validated={validated}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                         <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=" Enter city"
                            autoFocus
                            required
                            value={fieldData.city}
                            onChange={(e) =>
                              setFiled("city", e.target.value)
                            }
                          />
                          <Form.Label>Street Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=" Enter Street Address"
                            autoFocus
                            required
                            value={fieldData.street_address}
                            onChange={(e) =>
                              setFiled("street_address", e.target.value)
                            }
                          />
                          <Form.Label>Pin</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter pin"
                            autoFocus
                            required
                            value={fieldData.pin}
                            onChange={(e) =>
                              setFiled("pin", e.target.value)
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" onClick={handleSubmit}>
                          Submit
                        </Button>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center p-3">
              <Col md={{ span: 6, offset: 3 }}>
                <Button
                  variant="primary"
                  style={{ width: "200px" }}
                  onClick={() => submit(formData, includeData)}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AddPartner;
