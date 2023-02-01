import styles from "../../styles/User.module.css";
import Navbar from "../SideNavbar/SideNavbar";
import { useSnackbar } from "notistack";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";

const Userlist = () => {
  const router = useRouter();
  let [color, setColor] = useState("#ffffff");
  const { enqueueSnackbar } = useSnackbar();
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const performAPICall = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/user/list"
      );
      console.log("response data", response.data.userList);
      let userList = response.data.userList || [];
      for (let i = 0; i < userList.length; i++) {
        userList[i]["user_details"]["PhoneNo"] = await phoneNumber(
          userList[i].user_details.userID
        );
      }

      setUserData(userList);
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
  const service = (serviceid) => {
    localStorage.setItem("serviceid", serviceid);

    router.push("/services");
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
            <span className={styles.userListSpan}>User List</span>
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
                placeholder="Search by name, email and phoneNo"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>

            <Col className={styles.addUserCol}>
              {/* <Link href="/adduser">
              <button className="btn btn-outline-primary btn-md">
                Add User
              </button>
              </Link> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.userData}>
        <Table striped>
          <thead>
            <tr>
              <th className={styles.th}>User ID</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Email</th>
              <th className={styles.th}>Phone No</th>
              <th className={styles.th}>Dogs</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData
              ?.filter(
                (user) =>
                  user.user_details.name.toLowerCase().includes(search) ||
                  user.user_details.email.toLowerCase().includes(search) ||
                  user.user_details.PhoneNo.toLowerCase().includes(search)
              )
              .map((data, index_1) => (
                <tr key={index_1}>
                  <td className={styles.td}>{data.user_details.userID}</td>
                  <td className={styles.td}>{data.user_details.name}</td>
                  <td className={styles.td}>{data.user_details.email}</td>
                  <td className={styles.td}>{data.user_details.PhoneNo}</td>
                  <td className={styles.td}>{data.pet_details.length}</td>
                  <td className={styles.td}>
                    <span>
                      <Link href={`/user/${data.id}`}>
                        <button className="btn btn-primary btn-sm">View</button>
                      </Link>
                    </span>
                    <span className="padingL">
                      <Link href={`/user/service/${data.id}`}>
                        <button className="btn btn-primary btn-sm">Service</button>
                      </Link>
                    </span>
                  </td>
                  {/* <td className={styles.td}>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => service(data.id)}
                    >
                      Services
                    </button>
                  </td> */}
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      {loading && (
        <Box className={styles.loading}>
          <ClipLoader
            color={color}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h4>Loading User List...</h4>
        </Box>
      )}
    </div>
  );
};

export default Userlist;
