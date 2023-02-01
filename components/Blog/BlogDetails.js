import React from 'react'
import { useRouter } from "next/router";
import styles from "../../styles/BlogDetails.module.css";
import Navbar from "../SideNavbar/SideNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Table, Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSnackbar } from "notistack";
import Image from "next/image";
import dynamic from "next/dynamic";

const BlogDetails = () => {
  const [image, setimage] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [imageData, setimageData] = useState();
  const Editor = dynamic(() => import("./MyEditor"), { ssr: false });
  const [didLoadCount, setDidLoadCount] = useState(0);

  var blog_data_new = ""
  const [formData, setFormData] = useState({
    blog_heading: "",
    blogLink: "",
    BLockId:"",
    blogImage:"",
    blog_data:"",
    blogViews:0

  });
  
  useEffect(() => {
    if (didLoadCount < 1) {
      setDidLoadCount(didLoadCount+1)
      setDidLoadCount(true);
    }
  }, [didLoadCount == 0]);

  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };
  const handelImage = (e) => {
    const reader = new FileReader();

    const fileImage = e.target.files[0];
    reader.readAsDataURL(fileImage);
    reader.onload = () => {
      console.log("reader.result", reader.result)
      setimage(reader.result);
    };

  }
  const submit = async (formData) => {
    
    console.log("postdata",blog_data_new, image);
    return
    if (!validateInput(formData, blog_data_new, image)) return;
    try {
      const reqparams = {
        blogID: formData.blogID,
        blog_data: blog_data_new,
        blog_heading: formData.heading,
        blogLink: formData.link,
      }
      if (!!image) {
        reqparams["img"] = image;
      }
      await axios.post("https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/blog/update", reqparams);
      enqueueSnackbar("Updated Successfully", { variant: "success" });

      router.push("/blogs");
    }
    catch (e) {
      console.log("error message", e.message)
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong", { variant: "error" });
      }
    }


  };


  const validateInput = (data, blog_data, image) => {
    if (!data.heading) {
      enqueueSnackbar("heading is a required field", { variant: "error" });
      return false;
    }
    if (!data.link) {
      enqueueSnackbar("link is a required field", {
        variant: "error",
      });
      return false;
    }
    if (!blog_data) {
      enqueueSnackbar("Blog data is a required field", {
        variant: "error",
      });
      return false;
    }
    if (!image) {
      enqueueSnackbar("Image is a required field", {
        variant: "error",
      });
      return false;
    }


    return true;
  };
  const change = (e) => {
    blog_data_new = e;
  };

  useEffect(() => {
    let blogObj = JSON.parse(localStorage.getItem("blogdetails"));
    console.log("plandata", blogObj)
    //  getBlogNewData(blogObj.blog_data)
    setFormData(blogObj);
  }, [])
  blog_data_new = formData.blog_data
  console.log("blog_data_new>>",blog_data_new)
  return (
    <div className={styles.blogContainer}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.colUser}>
            <span className={styles.userListSpan}>Blog Details</span>
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
      <div className={styles.blogData}>
        <div className={styles.panel1}>
          <Container>
            <Row>

              <div className={styles.udetails}>
                <label className={styles.title}>Blog Heading</label>
                <div className={styles.userInput}>
                  <input
                    className={styles.userName}
                    name="blog_heading"
                    value={formData.blog_heading}
                    onChange={handelInput}
                    placeholder="Enter Blog Heading..."
                  />
                </div>
              </div>
              <div className={styles.udetails}>
                <label className={styles.title}>Blog Link</label>
                <div className={styles.userInput}>
                  <input
                    className={styles.userName}
                    name="blogLink"
                    value={formData.blogLink}
                    onChange={handelInput}
                    placeholder="Enter blog link ..."
                  />
                </div>
              </div>
            </Row>
            <Row>
              <Col sx={6}>
                <div className={styles.udetails}>
                  <label className={styles.title}>Choose Image</label>
                  <div className={styles.userInput}>
                    <input
                      type="file"
                      className={styles.userimage}
                      name="file"
                      onChange={handelImage}
                    />
                  </div>
                </div>
              </Col>
              <Col sx={6}>
                <div className={styles.udetails}>
                  <Image src={formData?.blogImage} alt="image"
                    width={130}
                    height={80} />
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <label className={styles.title}>Add Blog Data</label>
                {/* <CKEditor
                editor={ClassicEditor}
               
                onChange={handelChange}
              /> */}
              {(didLoadCount==1) &&
                <Editor
                  value={formData?.blog_data}
                  onChange={(v) => change(v)}
                />
              }
              </Col>
            </Row>
            <Row className="justify-content-md-center p-3">
              <Col md={{ span: 6, offset: 3 }}>
                <Button
                  variant="primary"
                  style={{ width: "200px" }}
                  onClick={() => submit(formData)}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails