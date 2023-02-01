import styles from "../../styles/BlogList.module.css";
import Navbar from "../SideNavbar/SideNavbar";
import { useSnackbar } from "notistack";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "@mui/system";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/fontawesome-free-solid'
import { useRouter } from "next/router";

const BlogList = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [bloglistData, setBlogListData] = useState([]);
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const performAPICall = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/blog/List"
      );
      console.log("response data", response.data.blogList);
      setBlogListData(response.data.blogList);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    performAPICall();
  }, []);

  const StoreBlog=(data)=>{
localStorage.setItem("blogdetails", JSON.stringify(data));
router.push("/blog_details");
  }
  const blogDelete = async(blogid)=>{
    if (confirm('Are you sure to delete this Blog ?')) {
      try{
          await axios.post(
              "https://oo5ux1iqnb.execute-api.us-east-1.amazonaws.com/blog/delete",
              {
                blogID:blogid
              }
            );
            setBlogListData(bloglistData.filter((p)=>p.blogID !==blogid));
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

  return (
    <div className={styles.blogContainer}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.colUser}>
            <span className={styles.userListSpan}>Blog List</span>
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
              {/* <input
                type="text"
                className={styles.formControl}
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              /> */}
            </Col>

            <Col className={styles.addUserCol}>
              <Link href="/addblog">
                <button className="btn btn-outline-primary btn-md">
                  Add Blog
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
              <th className={styles.th}>Blog ID</th>
              <th className={styles.th}>Blog Views</th>
              <th className={styles.th}>Blog Image</th>
              <th className={styles.th}>Blog Heading</th>
              <th className={styles.th}>Blog Data</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {bloglistData.map((data, index_1) => (
              <tr key={index_1}>
                <td className={styles.td}>{data.blogID}</td>
                <td className={styles.td}>{data.blogViews}</td>
                <td className={styles.td}>
                  <Image
                    src={data.blogImage}
                    alt="image"
                    width={100}
                    height={80}
                  />
                </td>
                <td className={styles.tdWord}>
                  <span>{data.blog_heading}</span>
                </td>
                <td className={styles.tdWord}>
                  <span>{data.blog_data}</span>
                </td>
                <td className={styles.td}>
                <span  className={styles.appGroIcon}>
                    <FontAwesomeIcon icon={faTrash} className={styles.appGroIconDelete} onClick={()=>{blogDelete(data.blogID)}} />
                    <FontAwesomeIcon icon={faEdit} className={styles.appGroIconedit}  onClick={()=>StoreBlog(data)} />
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
          <h4>Loading Blog List...</h4>
        </Box>
      )}
    </div>
  );
};

export default BlogList;
