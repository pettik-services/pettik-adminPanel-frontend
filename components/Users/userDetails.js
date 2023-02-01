import { useRouter } from "next/router";
import Navbar from "../SideNavbar/SideNavbar";
import styles from "../../styles/UserDetails.module.css";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

const UserDetails = () => {
  const router = useRouter();
  const userId = router.query.user_details;
  const [userData, setUserData] = useState({});
  const [petData, setPetData] = useState([]);
  const [address, setAddress] = useState([]);

  const performAPICall = async () => {
    try {
      const response = await axios.get(
        `https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/user/${userId}`
      );

      console.log("response data", response.data.userList.user_details.address);
      setUserData(response.data.userList.user_details);
      setPetData(response.data.userList.pet_details);
      setAddress(response.data.userList.user_details.address);
    } catch (e) {
      console.log(e);
    }
  };
  const phoneNumber = (str) => {
      const obj = {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
        4: "E",
        5: "F",
        6: "G",
        7: "H",
        8: "I",
        9: "J",
      };
      let phone = "",
        len = str?.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          if (str.charAt(i) == obj[j]) {
            phone += j;
          }
        }
      }
      return phone;
  };

  useEffect(() => {
    performAPICall();
   
  }, []);

  return (
    <div className={styles.userContainer}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.colUser}>
            <span className={styles.userListSpan}>User Details</span>
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
          <h2>User Information</h2>
          <Container>
            <Row>
              <Col>
                <div className={styles.udetails}>
                  <p>
                    User Name : <span>&nbsp;&nbsp;{userData.name}</span>
                  </p>
                  <p>
                    Contact No : <span>&nbsp;&nbsp;{phoneNumber(userData.userID)}</span>
                  </p>
                  <p>
                    User Email : <span>&nbsp;&nbsp;{userData.email}</span>
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.udetails}>
                {address.map((data,index)=>(
                    <p key={index}>
                    Address&nbsp;{index+1} :
                    <span>&nbsp;&nbsp;{data.street_address},&nbsp;{data.city},&nbsp;{data.pincode}</span>
                  </p>
                ))}
                 
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={styles.panel2}>
        <div className={styles.petdeailsHeader}>
        <h2>Pet Details</h2>
        {/* <Button variant="outline-primary">
        Add Pet
      </Button> */}
        </div>
         
          <Table striped>
            <thead>
              <tr>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Gender</th>
                <th className={styles.th}>Weight</th>
                <th className={styles.th}>DOB</th>
                <th className={styles.th}>Type</th>
                <th className={styles.th}>Breed</th>
                <th className={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {petData?.map((data,index_1)=>(

              <tr key={index_1}>
                <td className={styles.td}>{data.name}</td>
                <td className={styles.td}>{data.gender}</td>
                <td className={styles.td}>{data.weight}</td>
                <td className={styles.td}>{data.dob}</td>
                <td className={styles.td}>{data.type}</td>
                <td className={styles.td}>{data.breed}</td>
                <td className={styles.tdIcon}> <i className="fa fa-trash-o fa-lg, deleteicon "></i></td>
              </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
