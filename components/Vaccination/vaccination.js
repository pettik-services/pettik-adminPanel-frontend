import VaccinationComponent from "../../components/BodyComponent/BodyComponent";
import Navbar from "../../components/SideNavbar/SideNavbar";
import styles from "../../styles/Vaccination.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Grid } from "@mui/material";

const Vaccination = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isVaccination, setIsVaccination] = useState(false);
  const [completedButtonColor, setCompletedButtonColor] = useState({
    backgroundColor: "#EBEBEB",
    color: "black",
  });
  const [notCompletedButtonColor, setNotCompletedButtonColor] = useState({
    backgroundColor: "#EBEBEB",
    color: "black",
  });
  const [vaccinationUserData, setVaccinationUserData] = useState([]);
  const performAPICall = async () => {
    try {
      const response = await axios.get(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/get/vaccination"
      );
      setVaccinationUserData(response.data.bookings);
      console.log("response data", response);
      console.log("data", response.data);
      setIsVaccination(true);
      setCompletedButtonColor({ backgroundColor: "#EBEBEB", color: "black" });
      setNotCompletedButtonColor({
        backgroundColor: "#EBEBEB",
        color: "black",
      });
    } catch (e) {
      console.log(e);
    }
  };
  const completed = async () => {
    let allData = {};
    setNotCompletedButtonColor({ backgroundColor: "#EBEBEB", color: "black" });
    setCompletedButtonColor({ backgroundColor: "green", color: "white" });

    const res = await axios.get(
      "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/get/vaccination"
    );
    allData = res.data.bookings;

    let returned = [];
    let vacci = {};
    for (let i = 0; i < allData.length; i++) {
      console.log("vaccinationcompleted data", allData);
      let numberOfVAccine = allData[i].vaccination_details;
      for (let j = 0; j < numberOfVAccine.length; j++) {
        if (allData[i].vaccination_details[j].is_completed == true) {
          vacci = {
            vaccination_details: allData[i].vaccination_details,
            user_id: allData[i].user_id,
          };

          returned.push(vacci);
        }
      }
    }
    console.log("vaccidata", returned);
    setVaccinationUserData(returned);
  };
  const notCompleted = async () => {
    let allData;
    setCompletedButtonColor({ backgroundColor: "#EBEBEB", color: "black" });
    setNotCompletedButtonColor({ backgroundColor: "#E82525", color: "white" });
    const res = await axios.get(
      "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/get/vaccination"
    );
    allData = res.data.bookings;
console.log("alldata",allData)
    let returnedVacci = [];
    let novacci = {};

    for (let i = 0; i < allData.length; i++) {
      let numberOfVAccine = allData[i].vaccination_details;
      for (let j = 0; j < numberOfVAccine.length; j++) {
        if (allData[i].vaccination_details[j].is_completed == false) {
          novacci = {
            vaccination_details: allData[i].vaccination_details,
            user_id: allData[i].user_id,
          };
          returnedVacci.push(novacci);
        }
      }
    }
    console.log("novaccidata", returnedVacci);
    setVaccinationUserData(returnedVacci);
  };
  const markAsDone = async (userID, orderId,pIndex, cIndex) => {
    try {
      await axios.post(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/update/status",
        {
          uid: userID,
          status: "Completed",
          orderID: orderId,
        }
      );
      let newArray = [...vaccinationUserData];
      newArray[pIndex]["vaccination_details"][cIndex]["status"] = "Completed";
      setVaccinationUserData(newArray);
      enqueueSnackbar("Updated Successfully", { variant: "success" });
    } catch (e) {
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong", { variant: "error" });
      }
    }
  };
  const markAsUpcoming = async (userID, orderId, pIndex, cIndex) => {
    try {
       await axios.post(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/update/status",
        {
          uid: userID,
          status: "Upcoming",
          orderID: orderId,
        }
      );
      let newArray = [...vaccinationUserData];
      newArray[pIndex]["vaccination_details"][cIndex]["status"] = "Upcoming";
      setVaccinationUserData(newArray);
      enqueueSnackbar("Updated Successfully", { variant: "success" });
    } catch (e) {
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong", { variant: "error" });
      }
    }
  };
  const cancel = async (userID, orderId,pIndex,
    cIndex) => {
    try {
      await axios.post(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/cancle/order",
        {
          uid: userID,
          status: "Cancelled",
          orderID: orderId,
        }
      );
      let newArray = [...vaccinationUserData];
      console.log("newarraydata",newArray)
      newArray[pIndex]["vaccination_details"][cIndex]["status"] = "Cancelled";
      setVaccinationUserData(newArray);
      enqueueSnackbar("Updated Successfully", { variant: "success" });
    } catch (e) {
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong", { variant: "error" });
      }
    }
  };

  return (
    <div className={styles.Container}>
      <Navbar />
      <div>
        <VaccinationComponent data="vaccination" refresh={performAPICall} />
        {isVaccination ? (
          <>
            <div className={styles.completeNotYetDoneButtonContainer}>
              <div
                style={{
                  backgroundColor: completedButtonColor.backgroundColor,
                  color: completedButtonColor.color,
                }}
                className={styles.completedButton}
                onClick={() => completed()}
              >
                Completed
              </div>
              <div
                style={{
                  backgroundColor: notCompletedButtonColor.backgroundColor,
                  color: notCompletedButtonColor.color,
                }}
                className={styles.completedButton}
                onClick={() => notCompleted()}
              >
                Not yet Done
              </div>
            </div>
            {vaccinationUserData?.map((data, index) => (
              <div key={index.toString()}>
                <div className={styles.vaccinationDetailsContainer}>
                  <div className={styles.userDataContainerUserid}>
                    <span className={styles.userid}>USER ID:&nbsp;&nbsp;</span>
                    {data.user_id}
                  </div>
                  <div className={styles.userDataContainerVaccinationDetails}>
                    <Grid container spacing={2}>
                      {data.vaccination_details.map((value, index_1) => (
                        <Grid item md={6} lg={6} key={index_1.toString()}>
                          <div className={styles.VaccinationDetails}>
                            <div>
                              user_selected_time:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.user_selected_time}
                              </span>
                            </div>
                            <div>
                              cost:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.cost}
                              </span>
                            </div>
                            <div>
                              orderID:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.orderID}
                              </span>
                            </div>
                            <div>
                              pet_addres:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.pet_addres}
                              </span>
                            </div>
                            <div>
                              booking_date:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.booking_date}
                              </span>
                            </div>
                            <div>
                              user_selected_date:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.user_selected_date}
                              </span>
                            </div>
                            <div>
                              is_completed:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.is_completed.toString()}
                              </span>
                            </div>
                            <div>
                              pet_name:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.pet_name}
                              </span>
                            </div>
                            <div>
                              service:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.service}
                              </span>
                            </div>
                            <div>
                              pet_unique_id:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.pet_unique_id}
                              </span>
                            </div>
                            <div>
                              status:&nbsp;&nbsp;
                              <span className={styles.petDetails}>
                                {value.status}
                              </span>
                            </div>

                            <div className={styles.markContainer}>
                              {value.status === "Completed" ? (
                                <div
                                  className={styles.markAsUpcoming}
                                  onClick={() =>
                                    markAsUpcoming(
                                      data.user_id,
                                      value.orderID,
                                      index,
                                      index_1
                                    )
                                  }
                                >
                                  Mark as Upcoming
                                </div>
                              ) : value.status === "Cancelled" ? (
                                <div
                                  className={styles.markAsDoneButon}
                                  onClick={() =>
                                    markAsDone(data.user_id, value.orderID, index,
                                      index_1)
                                  }
                                >
                                  Mark as Done
                                </div>
                              ) : (
                                <div className={styles.markAsDoneContainer}>
                                  <div
                                    className={styles.markAsDoneButon}
                                    onClick={() =>
                                      markAsDone(data.user_id, value.orderID, index,
                                      index_1)
                                    }
                                  >
                                    Mark as DONE
                                  </div>
                                  <div
                                    className={styles.cancel}
                                    onClick={() =>
                                      cancel(data.user_id, value.orderID,index,
                                      index_1)
                                    }
                                  >
                                    Cancel
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Vaccination;
