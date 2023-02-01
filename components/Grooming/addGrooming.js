import React from "react";
import Navbar from "../SideNavbar/SideNavbar";
import styles from "../../styles/AddGrooming.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSnackbar } from "notistack";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/router";

const AddGrooming = () => {
    const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const [includeData, setIncludeData] = useState([]);
  const [validated, setValidated] = useState(false);
  const [fieldData, setFieldData] = useState({
    include: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    dcost: "",
    time: "",
    select: "",
  });
 
  
  const submit = async(formData,includeData) => {
    if (!validateInput(formData,includeData)) return;
    try{
        await axios.post(
            "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/grooming/add",
            {
             name:formData.name,
              cost: formData.cost,
              discounted_cost: formData.dcost,
              included: includeData,
              service_for: formData.select,
              service_time:formData.time  + " minutes",
            }
          );
          enqueueSnackbar("Updated Successfully", { variant: "success" });
          router.push("/application-grooming");
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
      cost: "",
      dcost: "",
      time: "",
      select: "",
    });
    setIncludeData([]);
  };

  const validateInput = (data,includeData) => {
    if (!data.name) {
      enqueueSnackbar("name is a required field", { variant: "error" });
      return false;
    }
    if (!data.cost) {
      enqueueSnackbar("cost is a required field", {
        variant: "error",
      });
      return false;
    }
    if (!data.dcost) {
      enqueueSnackbar("Discount cost is a required field", {
        variant: "error",
      });
      return false;
    }
    if (!data.time) {
      enqueueSnackbar("Time is a required field", {
        variant: "error",
      });
      return false;
    }

    if (!data.select) {
      enqueueSnackbar("Pet is a required field", { variant: "error" });
      return false;
    }
    if (!includeData.length) {
        enqueueSnackbar("Add include field", {
          variant: "error",
        });
        return false;
      }

    return true;
  };
  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };
 
  const setFiled = (field, val) => {
    setFieldData((prevValue) => ({ ...prevValue, [field]: val }));
  };
 

  const deleteInclude = (index)=>{
const IncludeArray = [...includeData]
IncludeArray.splice(index,1);
console.log("deleteIndex",IncludeArray)
setIncludeData(IncludeArray)
  }
 

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setIncludeData((t) => [...t, fieldData.include]);
    setValidated(true);
    setShow(false);
  };
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.GroomingContainer}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.colUser}>
            <span className={styles.userListSpan}>Add Groomings</span>
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
                  <label className={styles.title}>Service Name</label>
                  <div className={styles.userInput}>
                    <input
                      className={styles.userName}
                      name="name"
                      value={formData.name}
                      onChange={handelInput}
                      placeholder="Enter service name"
                    />
                  </div>
                </div>
                <div className={styles.udetails}>
                  <label className={styles.title}>Cost</label>
                  <div className={styles.userInput}>
                    <input
                      className={styles.userName}
                      name="cost"
                      value={formData.cost}
                      onChange={handelInput}
                      placeholder="Enter cost"
                    />
                  </div>
                </div>
                <div className={styles.udetails}>
                  <label className={styles.title}>Discounted Cost</label>
                  <div className={styles.userInput}>
                    <input
                      className={styles.userName}
                      name="dcost"
                      value={formData.dcost}
                      onChange={handelInput}
                      placeholder="Enter discounted cost"
                    />
                  </div>
                </div>
                <div className={styles.udetails}>
                  <label className={styles.title}>Service Time</label>
                  <div className={styles.userInput}>
                    <input
                      className={styles.userName}
                      name="time"
                      value={formData.time}
                      onChange={handelInput}
                      placeholder="Enter service time"
                    />
                  </div>
                </div>
                <div className={styles.udetails}>
                  <label className={styles.title}>Pet Type &nbsp;</label>
                  <select
                    value={formData.select}
                    name="select"
                    onChange={handelInput}
                    className={styles.select}
                  >
                    <option value="" selected disabled hidden>
                      Choose pet
                    </option>
                    <option>Dog</option>
                    <option>Cat</option>
                  </select>
                </div>
              </Col>
              <Col>
                <div className={styles.udetails}>
                  <h4>Includes</h4>
                  <hr />
                  <div className={styles.includeButton}>
                    <Button variant="outline-primary" onClick={handleShow}>
                      Add Includes
                    </Button>
                  </div>
                  <div className={styles.includeDataContainer}>
                    {includeData.map((incl, index_2) => (
                      <ul key={index_2}>
                        <li>
                          <span>{incl}</span>{" "}
                          <span className={styles.includeSpan} onClick={()=>deleteInclude(index_2)}>
                            <FaTrash />
                          </span>
                        </li>
                      </ul>
                    ))}
                  </div>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Includes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form noValidate validated={validated}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Include Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            autoFocus
                            required
                            value={fieldData.include}
                            onChange={(e) =>
                              setFiled("include", e.target.value)
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
                  onClick={() => submit(formData,includeData)}
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

export default AddGrooming;
