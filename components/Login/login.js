import styles from "../../styles/Login.module.css";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import logo from "../../public/logo.png";
import Image from "next/image";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };

  const login = (formData) => {
    if (!validateInput(formData)) return;
    enqueueSnackbar("Logged in Successfully", { variant: "success" });
    router.push("/user");
    setFormData({
      username: "",
      password: "",
    });
  };

  const validateInput = (data) => {
    if (!data.username) {
      enqueueSnackbar("Username is a required field", { variant: "error" });
      return false;
    }
    if (data.username != "admin") {
      enqueueSnackbar("Enter a valid username", {
        variant: "error",
      });
      return false;
    }

    if (!data.password) {
      enqueueSnackbar("Password is a required field", { variant: "error" });
      return false;
    }
    if (data.password != "admin") {
      enqueueSnackbar("Enter a valid password.. ", { variant: "error" });
      return false;
    }

    return true;
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="logo" width="130" height="120" priority />
        </div>
        <div className={styles.heading}>
          Please enter your loginID and Password
        </div>
        <div className={styles.userInput}>
          <input
            className={styles.userName}
            name="username"
            value={formData.username}
            onChange={handelInput}
            placeholder="Enter your username"
          />
        </div>
        <div className={styles.userInput}>
          <input
            className={styles.userName}
            name="password"
            type="password"
            value={formData.password}
            onChange={handelInput}
            placeholder="Enter your password"
          />
        </div>
        <div className={styles.submitButton} onClick={() => login(formData)}>
          LOGIN
        </div>
      </div>
    </div>
  );
};

export default Login;
