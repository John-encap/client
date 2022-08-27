import "./App.css";
import React ,{useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./component/header/Header";
// import Login from "./component/Login/Login";
import FogotPassForm from "./component/Login/Login Forms/FogotPassForm";
import ResetPassForm from "./component/Login/Login Forms/ResetPassForm";
import LoginForm from "./component/Login/Login Forms/LoginForm";
import Navbar from "./component/NavigationBar/Navbar";
import Tables from "./component/Table/Table";
import Home from "./pages/Home";
import Button from 'react-bootstrap/Button';
import Players from "./pages/Manager/js/Players";
import CricketRanking from "./pages/Manager/js/CricketRanking";
import Session from "./pages/Manager/js/Session";
import Membership from "./pages/Manager/js/Membership";
import SampleForm from "./component/Form/SampleForm";
import FormData from "./component/Form/ResetSubmit";
import PlayerRanking from "./pages/player/js/playerRanking"/* */
import Progress from "./pages/player/js/Progress"
import PrivateProgress from "./pages/player/js/PrivateProgress"
import Matches from "./pages/player/js/Matches";
import MatchDetails from "./pages/player/js/MatchDetails";
import PSessionDetails from "./pages/player/js/PSessionDetails";
import CSessionDetails from "./pages/player/js/CSessionDetails";
import EventDetails from "./pages/player/js/EventDetails";
import IntroTable from "./component/IntroTable/IntroTable";
import Calander from "./component/Calander/Calander";
import PracticeSessions from "./pages/Coach/js/PracticeSessions";
import Appoinments from "./pages/Coach/js/Appoinments";
import ViewAppoinments from "./pages/Coach/js/ViewAppoinments";
import Test from "./component/Table/test";
import PlayerRegistration from "./pages/Manager/js/PlayerRegistration";
import EditPlayerDetails from "./pages/Manager/js/EditPlayerDetails";
import AddCouncellingSession from "./pages/Manager/js/AddCouncellingSession";
import EditCouncellingSession from "./pages/Manager/js/EditCouncellingSession";
import AddEvent from "./pages/Manager/js/AddEvent";
import EditEvent from "./pages/Manager/js/EditEvent";
import Achivement from "./pages/Manager/js/Achivement";
import SampleCard from "./component/Card/SampleCard";
import AddAchivement from "./pages/Manager/js/AddAchivement";
import MatchDetail from "./pages/Manager/js/MatchDetail";
import Players1 from "./pages/Coach/js/Players";
import PlayerDetails from "./pages/Coach/js/PlayerDetails";
import AddMatch from "./pages/Manager/js/AddMatch";
import Matches_1 from "./pages/Coach/js/Matches_1";
import Matches_2 from "./pages/Coach/js/Matches_2";
import Macthes_3 from "./pages/Coach/js/Matches_3";

import Psession from "./pages/player/js/Psessions";
import PEvents from "./pages/player/js/PEvents";
import PlayerRankingList from "./pages/player/js/PlayerRankingList";
import Payments from "./pages/player/js/Payments";

import PlayerPerformance from "./pages/Coach/js/PlayerPerformance";
import Matches_4 from "./pages/Coach/js/Matches_4";
import MatchesTeams from "./component/MatchesTeams/MatchesTeams";
import SearchTable from "./component/Search/SearchTable";
import CalanderDetails from "./pages/Coach/js/CalanderDetails";
import AddPracticeSession from "./pages/Coach/js/AddPracticeSession";
import CheckBox from "./component/CheckBox/CheckBox";
import MarkPlayerProgress from "./pages/Coach/js/MarkPlayerProgress";
import AddMultipleSelections from "./component/AddMultipleSelections/AddMultipleSelections";

import AddTournamentMatch from "./pages/Manager/js/AddTournamentMatch";

import AddTournamentDetail from "./pages/Manager/js/AddTournamentDetail";
import Membershipfee from "./pages/naya_admin/js/Membershipfee";
import Employees from "./pages/naya_admin/js/Employees";
import AddEmployee from "./pages/naya_admin/js/AddEmployee";
import ViewPracticeSessions from "./pages/Coach/js/ViewPracticeSessions";
import BloomFieldCricketRanking from "./pages/Coach/js/BloomFieldCricketRanking";



import APlayerRanking from "./pages/admin/js/APlayerRanking";
import EditEmployee from "./pages/naya_admin/js/EditEmployee";
import UserView from "./component/UserView/UserView";
import UpdateDeleteUser from "./pages/naya_admin/js/UpdateDeleteUser";
import Achivements from "./pages/naya_admin/js/Achivements";
import Accounts from "./pages/naya_admin/js/Accounts";
import PlayerDetail from "./pages/naya_admin/js/PlayerDetail";
import AnnualMembership from "./pages/naya_admin/js/AnnualMembership";
import Feedback from "./pages/naya_admin/js/Feedback";
import Ranking from "./pages/naya_admin/js/Ranking";
import PlayerRankings from "./pages/naya_admin/js/PlayerRankings";
import Profile from "./pages/Profile/Profile";
// import AProgress from "./pages/admin/js/AProgress"
// import APrivateProgress from "./pages/admin/js/APrivateProgress"


import LoginN from "./pages/login/js/LoginN";

import EditPracticeSessions from "./pages/Coach/js/EditPracticeSessions";
import EditRowDetailsWithButton from "./component/EditRowDetailsWithButton/EditRowDetailsWithButton";
import PlayerDetails_1 from "./pages/Coach/js/PlayerDetails_1";
import PlayerProgress_1 from "./pages/Coach/js/PlayerProgress_1";
import PlayerFeedback from "./pages/Coach/js/PlayerFeedback";

import FileUpload from "./component/Form/FileUpload";
import Achivementss from "./pages/player/js/Achivements"










const List = [
  {id:1, name: "John Doe" , Age: 27},
  {id:1, name: "John Doe" , Age: 27},
  {id:1, name: "John Doe" , Age: <Button variant="secondary">View</Button>},
]

const colNames = ['id','Name','Age']



function App() {

 let sidebar 


  const [login, setLogin] = useState("");
  console.log(login.role)
  // if(login.role=="manager"){
  //   sidebar=SidebarData
  //   // console.log(sidebar)
  //   localStorage.setItem('sidebar',sidebar)
  //   window.location.assign("/manager/Players")
  // }
  // else if(login.role=="Player"){
  //   sidebar=SidebarDataPlayer
  //   console.log(sidebar)
  // }
  // else if(login.role=="coach"){
  //   sidebar=SidebarDataPlayer
  //   console.log(sidebar)
  // }
  // else if(login.role=="Admin"){
  //   sidebar=SidebarDataAdmin
  //   console.log(sidebar)
  // }
  return (
    <div className="App">
      <BrowserRouter>
        {/* <FogotPassForm /> */}
        {/* <ResetPassForm /> */}
        <Routes>
          <Route path="/ResetPassword" element={<ResetPassForm />} />
          <Route path="/FogotPassword" element={<FogotPassForm/>} />
          <Route path="/" element={<LoginN/>} />
          <Route path="/client" element={<Home/>} />
          <Route path="/Navbar" element={<Navbar user={sidebar}/>} />
          <Route path="/Table" element={<Tables list={List} colNames={colNames} />} />
          <Route path="/manager/Players" element={<Players />} />
          <Route path="/manager/FormData" element={<FormData />} />
          <Route path="/manager/CricketRanking"  element={<CricketRanking/>}/>
          <Route path="/manager/Session"  element={<Session/>}/>
          <Route path="/manager/Membership"  element={<Membership/>}/>
          <Route path="/manager/SampleForm" element={<SampleForm />} />
          <Route path="/player/playerRanking" element={<PlayerRanking />} />
          <Route path="/player/Progress" element={<Progress />} />
          <Route path="/player/PrivateProgress" element={<PrivateProgress />} />
          <Route path="/player/Matches" element={<Matches />} />
          <Route path="/player/MatchDetails" element={<MatchDetails />} />
          <Route path="/player/PSessionDetails" element={<PSessionDetails />} />
          <Route path="/player/CSessionDetails" element={<CSessionDetails />} />
          <Route path="/player/EventDetails" element={<EventDetails />} />
          <Route path="/player/EventDetails" element={<EventDetails />} />
          <Route path="/player/Achivements" element={<Achivementss />} />
          {/* <Route path="/admin/AProgress" element={<AProgress />} /> */}
          {/* <Route path="/admin/APrivateProgress" element={<APrivateProgress />} /> */}

          <Route path="/test" element={<Test />} />
          <Route path="/manager/PlayerRegistration" element={<PlayerRegistration />} />
          <Route path="/manager/EditPlayerDetails" element={<EditPlayerDetails />} />/
          <Route path="/manager/AddCouncellingSession" element={<AddCouncellingSession />} />
          <Route path="/manager/EditCouncellingSession" element={<EditCouncellingSession />} />
          <Route path="/manager/AddEvent" element={<AddEvent />} />
          <Route path="/manager/EditEvent" element={<EditEvent />} />
          <Route path="/manager/Achivement" element = {<Achivement/>} />
          <Route path="/card" element = {<SampleCard/>} />
          <Route path="/manager/AddAchivement" element={<AddAchivement/>}  />
          <Route path="/player/I" element={<IntroTable />} />
          <Route path="/C" element={<Calander />} />
          <Route path="/couch/PSessions" element={<PracticeSessions />} />
          <Route path="/manager/MatchDetail" element={<MatchDetail />} />
          <Route path="/manager/AddMatch" element={<AddMatch />} />
          <Route path="/manager/AddTournamentMatch" element={<AddTournamentMatch />} />
          <Route path="/couch/A" element={<Appoinments />} />
          <Route path="/couch/Ap" element={<ViewAppoinments/>} />
          <Route path="/couch/Players1" element={<Players1 />} />
          <Route path="/couch/PlayerD" element={<PlayerDetails />} />

          <Route path="/couch/M1" element={<Matches_1 />} />
          <Route path="/couch/M2" element={<Matches_2 />} />
          <Route path="/couch/M3" element={<Macthes_3 />} />
          <Route path="/couch/PF" element={<PlayerPerformance />} />
          <Route path="/couch/M4" element={<Matches_4 />} />
          <Route path="/couch/M" element={<MatchesTeams />} />
          <Route path="/couch/CD" element={<CalanderDetails />} />
          {/* <Route path="/SF" element={<SampleForm />} /> */}
          <Route path="/couch/APS" element={<AddPracticeSession />} />
          <Route path="/couch/CB" element={<CheckBox />} />
          <Route path="/couch/MPP" element={<MarkPlayerProgress />} />
          <Route path="/couch/MC" element={<AddMultipleSelections />} />
          <Route path="/couch/EPS" element={<EditPracticeSessions />} />
          <Route path="/couch/VPS" element={<ViewPracticeSessions />} />
          <Route path="/couch/BCR" element={<BloomFieldCricketRanking />} />
          <Route path="/couch/PD1" element={<PlayerDetails_1 />} />
          <Route path="/couch/PPr1" element={<PlayerProgress_1 />} />
          <Route path="/couch/PFeedback" element={<PlayerFeedback />} />









          <Route path="/player/Psession" element={<Psession />} />
          <Route path="/player/PEvents" element={<PEvents />} />
          <Route path="/player/PlayerRankingList" element={<PlayerRankingList />} />
          <Route path="/player/Payments" element={<Payments />} />

    
          
          

          <Route path="/couch/m_1" element={<Matches_1 />} />
          <Route path="/manager/AddTournamentDetail" element={<AddTournamentDetail />} />
          <Route path="/admin/Membershipfee" element={<Membershipfee/>}  />
          <Route path="/admin/Employees" element={<Employees/>}  />
          <Route path="/admin/AddEmployee" element={<AddEmployee/>}  />
          <Route path="/admin/EditEmployee" element={<EditEmployee />}  />
          <Route path="/admin/UserView" element={< UpdateDeleteUser/>} />
          <Route path="/admin/Achivements" element={< Achivements />} />
          <Route path="/admin/Accounts" element={< Accounts />} />
          <Route path="/admin/PlayerDetail" element={<PlayerDetail />} />



          <Route path="/admin/AnnualMembership" element={<AnnualMembership />} />
          <Route path="/admin/Feedback" element={<Feedback />} />


          <Route path="/admin/Raking" element={<Ranking />} />
          <Route path="/admin/PlayerRankings" element={<PlayerRankings />} />
          <Route path="/manager/profile" element={<Profile />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/couch/profile" element={<Profile />} />
          <Route path="/player/profile" element={<Profile />} />



          <Route path="/file" element={<FileUpload />}  />


        </Routes>
      </BrowserRouter>
    </div>
    
  );

  

}

export default App;
