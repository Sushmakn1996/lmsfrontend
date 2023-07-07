import { Col, Container, Row, Table } from "react-bootstrap";
import "./App.css";
import Image from "./components/Image";
import Login from "./components/Login";
import logo from "../src/blur.png";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import SideNavBar from "./components/SideNavBar";
import MyTable from "./components/MyTable";
import Mentorlistnav from "./components/Mentorlistnav";

function App() {
  return (
    <div>
      {/* <div
        className="image"
        style={{
          position: "fixed",
          height: "900px",
          width: "1400px",
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          style={{
            border: "0px",
            width: "750px",
            borderRadius: "1px",
            marginLeft: "20%",
            marginRight: "30px",
            position: "fixed",
            top: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0000002B",
          }}
        >
          <Row>
            <Col sm={8}>
              <Image />
            </Col>
            <Col sm={4}>
              {" "}
              <h2
                 style={{
                  color: "#FFAA17",
                }}
              >
                LOGIN
              </h2>
              <Login />
            </Col>
          </Row>
        </Container>
      </div> */}
      <Home/>
      <br></br>
      <div ></div>   
      <div className="row" style={{
        display:"flex"
      }}>
        <div className="col-1" style={{
          paddingLeft:"10px"
        }}>
        <SideNavBar/>
        </div>
        <div className="col-11">
          <span><Home/>Mentos List</span>
          <br></br>
          <div style={{
            position:"relative",
          }}><Mentorlistnav />
          <MyTable/></div>
          <br></br>
        
        </div>
        </div>    </div>
    
  );
}

export default App;
