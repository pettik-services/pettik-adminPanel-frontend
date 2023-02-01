import React, { useState } from 'react';
import styles from "../../styles/AddUser.module.css";
import Navbar from "../SideNavbar/SideNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSnackbar } from "notistack";
import { Container, Row, Col, Table,Modal } from "react-bootstrap";


const AddUser = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        userID:""
      });

      const handelInput = (e) => {
        const [key, value] = [e.target.name, e.target.value];
        setFormData((prevValue) => ({ ...prevValue, [key]: value }));
      };

      const submit = (formData) => {
        if (!validateInput(formData)) return;
        enqueueSnackbar("User Added Successfully", { variant: "success" });
        
        setFormData({
            name: "",
            email: "",
            userID:""
        });
      };

      const validateInput = (data) => {
        if (!data.name) {
          enqueueSnackbar("Username is a required field", { variant: "error" });
          return false;
        }
        if (!data.email) {
          enqueueSnackbar("Email is a required field", { variant: "error" });
          return false;
        }
        if (!data.userID) {
          enqueueSnackbar("Enter a valid password.. ", { variant: "error" });
          return false;
        }
    
        return true;
      };

  return (
    <div className={styles.userContainer}>
    <Navbar />
    <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.colUser}>
            <span className={styles.userListSpan}>User Add</span>
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
      <div className={styles.adduserContainer}>
      <div className={styles.panel1}>
      <Form>
      <Row>
            <Col >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.formTitle}>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  value={formData.name} onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.formTitle}>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.formTitle}>Contact No</Form.Label>
        <Form.Control type="text" placeholder="Contact No" onChange={handelInput} />
      </Form.Group>
     
      </Col>
      <Col >
      <div className={styles.addAddressButton}>
      <Button variant="outline-primary" onClick={handleShow}>
        Add Address
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street Address"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Pincode"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      
      </Col>
    </Row>
    <Row className="justify-content-md-center p-3">
    <Col md={{ span: 6, offset: 3 }}>
    <Button variant="primary" onClick={submit}>
        Submit
      </Button>
    </Col>
   
    </Row>
     
    </Form>
      </div>
      </div>
    </div>
  )
}

export default AddUser