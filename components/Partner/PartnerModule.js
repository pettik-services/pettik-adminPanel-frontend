import styles from "../../styles/Partner.module.css";
import Navbar from "../SideNavbar/SideNavbar";
import { useSnackbar } from "notistack";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Table } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "@mui/system";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/fontawesome-free-solid'
import { useRouter } from "next/router";
import UpperNavbar from "../UpperNavbar/UpperNavbar";

const PartnerModule = () => {
  const router = useRouter();
  let [color, setColor] = useState("#ffffff");
  const { enqueueSnackbar } = useSnackbar();
  const [search, setSearch] = useState("");
  const [partnerData, setPartnerData] = useState([]);
  const [loading, setLoading] = useState(false);

  const performAPICall = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/partner/list"
      );
      console.log("response data", response.data.partnerList);
      //let partnerList = response.data.partnerList 

      setPartnerData(response.data.partnerList);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const partnerDelete = async(id)=>{
    console.log("partnerid",id)
    
    if (confirm('Are you sure to delete this partner id ?')) {
      try{
          await axios.post(
              "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/partner/delete",
              {
                id:id
              }
            );
            setPartnerData(partnerData.filter((p)=>p.id !==id));
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
  const StorePartner = (data)=>{
    localStorage.setItem("partner",JSON.stringify(data));
    router.push("/update-partner");
  }
  

  useEffect(() => {
    performAPICall();
  }, []);

  return (
    <div className={styles.partnerContainer}>
      <Navbar />
      <UpperNavbar  Navbarheading="Partner List" />
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
              <Link href="/add-partner">
              <button className="btn btn-outline-primary btn-md">
                Add Partner
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
              <th className={styles.th}>Phone No</th>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Role</th>
              <th className={styles.th}>Email</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {partnerData.map((data, index_1) => (
                <tr key={index_1}>
                <td className={styles.td}>{data.phone_no}</td>
                <td className={styles.td}>{data.id}</td>
                <td className={styles.td}>{data.partner_role[0]?.key}</td>
                <td className={styles.td}>{data.email}</td>
                <td className={styles.td}>{data.partner_name}</td>
                  <td className={styles.td}>
                  <span  className={styles.appGroIcon}>
                    <FontAwesomeIcon icon={faTrash} className={styles.appGroIconDelete} onClick={()=>{partnerDelete(data.id)}} />
                    <FontAwesomeIcon icon={faEdit} className={styles.appGroIconedit}  onClick={()=>StorePartner(data)} />
                    </span>
                  </td>
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
          <h4>Loading Partner List...</h4>
        </Box>
      )}
    </div>
  )
}

export default PartnerModule