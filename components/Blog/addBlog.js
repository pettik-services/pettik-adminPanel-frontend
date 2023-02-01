import styles from "../../styles/AddBlog.module.css";
import Navbar from "../SideNavbar/SideNavbar";
import { CKEditor } from "ckeditor4-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Table, Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import Image from "next/image";

const AddBlog = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [blog_data, getBlogData] = useState("");
  const[image,setimage]=useState("");
  const[imageData,setimageData]=useState();
  const [formData, setFormData] = useState({
    heading: "",
    link: "",
  });

  const change = (e) => {
    getBlogData(e.editor.getData());
  };

  
  const handelInput = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((prevValue) => ({ ...prevValue, [key]: value }));
  };
const handelImage =(e)=>{
  const reader = new FileReader();
  setimageData(URL.createObjectURL(e.target.files[0]));
  const fileImage = e.target.files[0];
  reader.readAsDataURL(fileImage);
  reader.onload = () => {
    setimage(reader.result);
};

}
const submit = async(formData,blog_data, image) => {
  if (!validateInput(formData,blog_data, image)) return;
  try{
    console.log("postdata", blog_data,formData.heading,formData.link,image);
      await axios.post(
          "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/blog/add",
          {
           blog_data:blog_data,
            blog_heading: formData.heading,
            img: image,
            blogLink: formData.link,
          }
        );
        enqueueSnackbar("Updated Successfully", { variant: "success" });
       
        router.push("/blogs");
  }
  catch(e){
      console.log("error message",e.message)
      if (e.response && e.response.status === 400) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Somthing went wrong", { variant: "error" });
      }
  }
  
 
  setFormData({
    heading: "",
    link: "",
  });
  getBlogData("");
  setimage("");
};


const validateInput = (data,blog_data, image) => {
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

  return (
    <div className={styles.blogContainer}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.colUser}>
            <span className={styles.userListSpan}>Add Blog</span>
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
                      name="heading"
                      value={formData.heading}
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
                      name="link"
                      value={formData.link}
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
             <Image src={imageData} alt="image"
                    width={130}
                    height={80} />
                </div>
             </Col>
            </Row>
            <Row className="mt-3">
              <Col>
              <label className={styles.title}>Add Blog Data</label>
                <CKEditor
                  initData={blog_data}
                  onChange={(e) => {
                    change(e);
                  }}
                />
              </Col>
            </Row>
            <Row className="justify-content-md-center p-3">
              <Col md={{ span: 6, offset: 3 }}>
                <Button
                  variant="primary"
                  style={{ width: "200px" }}
                  onClick={() => submit(formData, blog_data,image)}
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

export default AddBlog;
