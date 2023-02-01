import React, { useEffect, useState } from "react";
import Navbar from "../SideNavbar/SideNavbar";
import styles from "../../styles/ApplicationGrooming.module.css";
import axios from "axios";
import { Container, Row, Col, Table } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/fontawesome-free-solid'
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";



const AppliactionGrooming = () => {
 const router = useRouter();
    let [color, setColor] = useState("#ffffff");
    const { enqueueSnackbar } = useSnackbar();
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [groomingUserData, setGroomingUserData] = useState([]);

    const performAPICall = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/grooming/application/List"
          );
          console.log("response data", response.data);
          setGroomingUserData(response.data.groomingList);
          setLoading(false);
        } catch (e) {
          console.log(e);
        }
      };
      const grooedit = (data)=>{
        localStorage.setItem("grooPlan",JSON.stringify(data));
        router.push("/update-grooming")
      }
      const grooDelete = async (deleteid)=>{
        if (confirm('Are you sure to delete this plan')) {
          try{
              await axios.post(
                  "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/grooming/delete",
                  {
                    serviceID:deleteid
                  }
                );
              setGroomingUserData(groomingUserData.filter((p)=>p.serviceID !==deleteid));
                enqueueSnackbar("Deleted Successfully", { variant: "success" });
              
          }
          catch(e){
              console.log("error message",e.message)
              if (e.response && e.response.status === 400) {
                enqueueSnackbar(e.response.data.message, { variant: "error" });
              } else {
                enqueueSnackbar("Somthing went wrong", { variant: "error" });
              }
          }
        }
      }

      useEffect(() => {
        performAPICall();
      }, []);
  return (
    <div className={styles.GroomingContainer}>
    <Navbar />
    <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.colUser}>
            <span className={styles.userListSpan}>Application Grooming Details</span>
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

            <Col className={styles.addUserCol}>
            <Link href="/add-grooming">
            <button className="btn btn-outline-primary btn-md">
                Add Groomings
              </button>
            </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.userData}>
        <Table striped>
          <thead>
            <tr>
              <th className={styles.th}>Service Name</th>
              <th className={styles.th}>Cost</th>
              <th className={styles.th}>ID</th>
              <th className={styles.addressth}>Services For</th>
              <th className={styles.th}>Completed Time</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
            <tbody>
              {groomingUserData?.filter(
                (user) =>
                  user.name.toLowerCase().includes(search)
              ).map((data, index_1) => (
                <tr key={index_1}>
                  <td className={styles.td}>{data.name}</td>
                  <td className={styles.td}>{data.cost}</td>
                  <td className={styles.td}>{data.serviceID}</td>
                  <td className={styles.addresstd}>{data.service_for}</td>
                  <td className={styles.td}>{data.service_time}</td>
                  <td className={styles.td} >
                    <span  className={styles.appGroIcon}>
                    <FontAwesomeIcon icon={faTrash} className={styles.appGroIconDelete} onClick={()=>{grooDelete(data.serviceID)}} />
                    <FontAwesomeIcon icon={faEdit} className={styles.appGroIconedit} onClick={()=>{grooedit(data)}} />
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
  )
}

export default AppliactionGrooming