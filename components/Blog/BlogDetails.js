import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogDetails.module.css";
import Navbar from "../SideNavbar/SideNavbar";
import { useState, useEffect,useRef } from "react";
import axios from "axios";
import { Container, Row, Col, Table, Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSnackbar } from "notistack";
import Image from "next/image";
import dynamic from "next/dynamic";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
import UpperNavbar from "../UpperNavbar/UpperNavbar";

const BlogDetails = () => {


  const router = useRouter();
  const [image, setimage] = useState("");
  const [imageData, setimageData] = useState();
  const { enqueueSnackbar } = useSnackbar();
  //const Editor = dynamic(() => import("./MyEditor"));
  const [didLoadCount, setDidLoadCount] = useState(0);

  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  var blog_data_new = "";
  const [formData, setFormData] = useState({
    blog_heading: "",
    blogLink: "",
    BLockId: "",
    blogImage: "",
    blog_data: "",
    blogViews: 0,
  });

  // useEffect(() => {
  //   if (didLoadCount < 1) {
  //     setDidLoadCount(didLoadCount+1)
  //     setDidLoadCount(true);
  //   }
  // }, [didLoadCount == 0]);

  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };
  const handelImage = (e) => {
    const reader = new FileReader();
    setimageData(URL.createObjectURL(e.target.files[0]));
    const fileImage = e.target.files[0];

    reader.readAsDataURL(fileImage);
    reader.onload = () => {
      setimage(reader.result);
    };
  };
  const submit = async (formData) => {
    if (!validateInput(formData, blog_data_new)) return;
    try {
      const reqparams = {
        blogID: formData.blogID,
        blog_data: blog_data_new,
        blog_heading: formData.blog_heading,
        blogLink: formData.blogLink,
      };
      if (!!image) {
        reqparams["img"] = image;
      }
      await axios.post(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/blog/update",
        reqparams
      );
      enqueueSnackbar("Updated Successfully", { variant: "success" });

      router.push("/blogs");
    } catch (e) {
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong", { variant: "error" });
      }
    }
  };

  const validateInput = (data, blog_data) => {
    if (!data.blog_heading) {
      enqueueSnackbar("heading is a required field", { variant: "error" });
      return false;
    }
    if (!data.blogLink) {
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
    return true;
  };

  const change = (e) => {
    blog_data_new = e;
  };
  useEffect(() => {
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])

  useEffect(() => {
      let blogObj = JSON.parse(localStorage.getItem("blogdetails"));
      if(blogObj!==null) setFormData(blogObj);
  }, []);
  blog_data_new = formData.blog_data;

  return editorLoaded && (
    
    <div className={styles.blogContainer}>
      <Navbar />
      <UpperNavbar Navbarheading="Blog Details" />
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
                  {!imageData ? (
                    <Image
                      src={formData?.blogImage}
                      alt="image"
                      width={130}
                      height={80}
                    />
                  ) : (
                    <Image
                      src={imageData}
                      alt="image"
                      width={130}
                      height={80}
                    />
                  )}
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <label className={styles.title}>Add Blog Data</label>
               
                      <CKEditor
                        editor={ClassicEditor}
                        data={formData?.blog_data}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          change(data);
                        }}
                      />
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
  );
};

export default BlogDetails;
