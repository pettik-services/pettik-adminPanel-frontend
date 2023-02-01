import { Box } from "@mui/system";
import Navbar from "../SideNavbar/SideNavbar";
import styles from "../../styles/Grooming.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/router";
import Link from "next/link";

const Grooming = () => {
  let [color, setColor] = useState("#ffffff");
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [groomingUserData, setGroomingUserData] = useState([]);

  const performAPICall = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/get/grooming-services"
      );
      console.log("response data", response.data);
      let groomingList = response.data.bookings || [];
      
      for (let i = 0; i < groomingList.length; i++) {
        groomingList[i]["PhoneNo"] = await phoneNumber(
          groomingList[i].user_id
        );
      }
      console.log("response grromingldt", groomingList);
      setGroomingUserData(groomingList);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const phoneNumber = async (str) => {
    return new Promise((resolve, reject) => {
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
        len = str.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          if (str.charAt(i) == obj[j]) {
            phone += j;
          }
        }
      }
      resolve(phone);
    });
  };

  useEffect(() => {
    performAPICall();
  }, []);

  const Storage = (grooData) => {
    localStorage.setItem("groomingdetails", JSON.stringify(grooData));
    router.push("/grooming-details");
  };

  return (
    <div className={styles.GroomingContainer}>
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
        <Container fluid>
          <Row>
            <Col>
              <input
                type="text"
                className={styles.formControl}
                placeholder="Search by phone number"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>

            <Col className={styles.addUserCol}></Col>
          </Row>
        </Container>
      </div>
      <div className={styles.userData}>
        <Table striped>
          <thead>
            <tr>
              <th className={styles.th}>Phone No</th>
              <th className={styles.th}>Pet Name</th>
              <th className={styles.th}>Cost</th>
              <th className={styles.addressth}>Services Name</th>
              <th className={styles.th}>Completed Status</th>
              <th className={styles.th}>View</th>
            </tr>
          </thead>
            <tbody>
              {groomingUserData ?.filter(
                (user) =>
                  user.PhoneNo.toLowerCase().includes(search)
              )
              .map((data, index_1) => (
                <tr key={index_1}>
                  <td className={styles.td}>{data.PhoneNo}</td>
                  <td className={styles.td}>{data.pet_name}</td>
                  <td className={styles.td}>{data.cost}</td>
                  <td className={styles.addresstd}>{data.service}</td>
                  <td className={styles.td}>{data.is_completed.toString()}</td>
                  <td className={styles.td}>
                    <span>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          Storage(data);
                        }}
                      >
                        {" "}
                        View{" "}
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
        </Table>
      </div>
      {
        loading && (
            <Box className={styles.loading}>
              <ClipLoader
                color={color}
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <h4>Loading Grooming List...</h4>
            </Box>
          ) 
      }
    </div>
  );
};

export default Grooming;
