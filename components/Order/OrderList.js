import React from "react";
import Navbar from "../SideNavbar/SideNavbar";
import styles from "../../styles/OderList.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import Link from "next/link";
import UpperNavbar from "../UpperNavbar/UpperNavbar";

const OrderList = () => {
  
  let [color, setColor] = useState("#ffffff");
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [selectedData, setSelectedData] = useState("");
 

  const options = [
    { value: "alltype", label: "All type" },
    { value: "grooming", label: "Grooming" },
    { value: "vaccine", label: "Vaccine" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelectedData(selectedOption.value);
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
  const performAPICall = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/order/list"
      );
      console.log("response data", response.data.orderList);
      let orderList = response.data.orderList || [];

      for (let i = 0; i < orderList.length; i++) {
        orderList[i]["PhoneNo"] = await phoneNumber(orderList[i].user_id);
      }
      setOrderData(orderList);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
   
    performAPICall();
  }, []);

  const Storage = (orderData) => {
    localStorage.setItem("orderdetails", JSON.stringify(orderData));
    router.push("/order-details");
  };
  return (
    <div className={styles.GroomingContainer}>
      <Navbar />
      <UpperNavbar  Navbarheading="Order List" orderList={performAPICall} />
      
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

            <Col className={styles.typeCategory}>
              <Row>
                <Col>
                  <Select
                  id="selectbox"
                  instanceId="selectbox"
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                  />
                </Col>
                <Col></Col>
              </Row>
            </Col>
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
              <th className={styles.th}>Date</th>
              <th className={styles.th}>Services Name</th>
              <th className={styles.th}>Service Type</th>
              <th className={styles.th}>View</th>
            </tr>
          </thead>
          <tbody>
            {orderData
              ?.filter((user) =>user.PhoneNo.toLowerCase().includes(search))
              .filter((sData) =>sData.service_type.includes(selectedData)||
              selectedData=="alltype"?sData:null)
              .map((data, index_1) => (
                <tr key={index_1}>
                  <td className={styles.td}>{data.PhoneNo}</td>
                  <td className={styles.td}>{data.pet_name}</td>
                  <td className={styles.td}>{data.cost}</td>
                  <td className={styles.td}>{data.user_selected_date}</td>
                  <td className={styles.td}>{data.service}</td>
                  <td className={styles.td}>{data.service_type}</td>
                  <td className={styles.td}>
                    <span>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          Storage(data);
                        }}
                      >
                        View
                      </button>
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
          <h4>Loading Order List...</h4>
        </Box>
      )}
    </div>
  );
};

export default OrderList;
