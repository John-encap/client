import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import React from "react";
// import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
// import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import {fetchData} from '../../AuthServer' ;
import {useDispatch,useSelector} from 'react-redux'
import Modal from "react-bootstrap/Modal";
import {useParams} from "react-router-dom"


function FutureTeams() {
  const {id,name}=useParams();
  console.log(id)
  
  const [responseData, setResponseData] = useState([]);
  const [responseDatap, setResponseDatap] = useState([]);
  const [responseDataFuture, setResponseDataFuture] = useState([]);
  const [responseDataUnmarked, setResponseDataUnmarked] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = "player/coach/getTeam";
  const Deleteurl = "player/coach/addTeamMatchesDet";
  const urlADD = "player/coach/addTeamToMatch";
  const future = "player/coach/future";
  const Unmarked = "player/coach/Unmarked";
  const update = "player/coach/update";
  async function getData(url, Team = "") {
    const reqData = {
      match_id: id,
      team:Team
    };
    const authRequest = {
      method: "post",
      url: url,
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        if(url==="player/coach/getTeam"){setResponseData(response.data);}
        else if(url==="player/coach/addTeamMatchesDet"){setResponseDatap(response.data);}
        else if(url==="player/coach/future"){setResponseDataFuture(response.data);}
        else if(url==="player/coach/Unmarked"){setResponseDataUnmarked(response.data);}
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getData(url);
    getData(Deleteurl);
    
  }, []);
  const dataupcomming = responseData.data;
  const dataupcommingp = responseDatap.data;
  const dataFuture=responseDataFuture.data
  const dataUnmarked=responseDataUnmarked.data
  console.log(dataupcomming);
  console.log(dataupcommingp);
  console.log(dataFuture);
  console.log(dataUnmarked);

  function selectedTeam(e){
    e.preventDefault()
    console.log(e.target.value)
    getData(urlADD,e.target.value);
    alert("Successfully added team to match")
    window.history.back()
  }

  const [display, setdisplay] = useState("none");
  const [display2, setdisplay2] = useState("block");
  function clickEdit(e){
     e.preventDefault()
     setdisplay("block")
     setdisplay2("none")
  }
  function clickCancel(e){
     e.preventDefault()
     window.history.back()
  }
  function clickSave(e){
     e.preventDefault()
     console.log(e.target[0].value)
     getData(update, e.target[0].value)
     handleShow()
    //  alert("Team has been changed successfully")
    //  window.history.back()
  }

  function reload(){
    window.location.reload()
  }
    
 
  return (
    <>
      <div className="page-container-1">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="body-container-1">
        <div className="navbar-container">
          <Navbar></Navbar>
        </div>
        <div className="body-container-2" >
          <div className="page-container-gray" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div className="l-back-r-title">
              <h1>Future Matches</h1>
            </div>

            <div className="SessionDetails-content">
              <div style={{width:"100%" , display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                <div className="o-u-t">
                  <div className="top-ic">Match ID :</div>
                  <div className="an-s-wer">M-{dataupcommingp?dataupcommingp[0].match_id:""}</div>
                </div>
                <div className="o-u-t">
                  <div className="top-ic">Format :</div>
                  <div className="an-s-wer">{dataupcommingp?dataupcommingp[0].match_format:""}</div>
                </div>
                <div className="o-u-t">
                  <div className="top-ic">Opposite Team :</div>
                  <div className="an-s-wer">{dataupcommingp?dataupcommingp[0].op_team_name:""}</div>
                </div>
                <div className="o-u-t">
                  <div className="top-ic">Date :</div>
                  <div className="an-s-wer">{dataupcommingp?dataupcommingp[0].date:""}</div>
                </div>
                <div className="o-u-t">
                  <div className="top-ic">Ground :</div>
                  <div className="an-s-wer">{dataupcommingp?dataupcommingp[0].ground:""}</div>
                </div>
                <div className="o-u-t">
                  <div className="top-ic">Team :</div>
                  <div className="an-s-wer">{dataupcommingp?dataupcommingp[0].name:""}</div>
                </div>
                <form className="o-u" onSubmit={clickSave}>
                  {/* <div className="top-i" style={{display:display}}>Team :</div> */}
                  <select  className="an-s-w" style={{display:display}}>
                    {dataupcomming?dataupcomming?.map((item,i)=> <>
                      <option  value={item.team_id}>{item.name}</option>
                    </>):""}
                  </select>
                  <div className="b-t-n" style={{width:"100%",display:"flex",justifyContent:"right"}}><button className="btn btn-secondary" onClick={clickEdit} style={{display:display2 ,marginLeft:"80%"}}>Edit</button><button type="submit" className="btn btn-success" style={{display:display,marginRight:"20px"}}>Save</button><button onClick={clickCancel} className="btn btn-secondary" style={{display:display}}>Cancel</button></div>
                </form>

              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
    <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    centered
  >
    <Modal.Header
      // closeButton
      // style={{ backgroundColor: "white", border: "none" }}
    >
      <Modal.Title>  </Modal.Title>
    </Modal.Header>
    <Modal.Body
      style={{
        backgroundColor: "white",
        height: "fit-content",
        padding: "0",
      }}
    >
      
        <p
          style={{
            color: "#626d80",
            textAlign: "center",
            fontSize: "large",
            backgroundColor: "white",
            margin: "0",
          }}
        >
          {"Team has been changed successfully"}
          {/* {edate} */}
        </p>
    
        
          

      {/* <h1>Render Count: {count.current}</h1> */}
    </Modal.Body>
    <Modal.Footer style={{ border: "none" }}>
        <button type="button" class="btn btn-success" onClick={()=>reload()}>
          OK
        </button>
    </Modal.Footer>
    </Modal>
    </>
  );
}

export default FutureTeams;