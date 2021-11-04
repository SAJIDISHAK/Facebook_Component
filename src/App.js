import './App.css';
import React, { useState } from "react";
import CardItem from './components/Card';
import Navbar from './components/App_bar';
import SirInzamam from "./Images/Sir_Inzamam_Profile.jpg";
import Burger from "./Images/burger.jpg";
import Saqib from "./Images/saqib.jpeg";
import Shop from "./Images/victory.jpeg";
import Sufiyan from "./Images/sufiyan.jpg";
import Express from "./Images/express.jpg";
import Ishaq from "./Images/ishaq.jpeg";
import Tour from "./Images/tour.jpeg";
import Sajid from "./Images/sajid.jpeg";
import Villa from "./Images/villa.jpeg";
import Shafiq from "./Images/shafiq.jpeg";
import Babies from "./Images/babies.jpeg";
import Haroon from "./Images/haroon.jpeg";
import HiRoof from "./Images/hiroof.jpg";
import Zain from "./Images/zain.jpeg";
import FisalMasjid from "./Images/fisalmasjid.jpeg";

function App() {
  const [theme, setTheme] = useState(true);
  const themeChanger = () => {
    setTheme(!theme);
  }
  return (<>
    <div>
      <Navbar />
    </div>
    <div style={{
      display: "flex",
      backgroundColor: theme ? 'white' : 'black',
      justifyContent: "center",
      marginTop: "40px",
      justifyContent: "space-around",
      flexWrap: "wrap",
      margin: "10px"
    }}>
      {/* <button onClick={themeChanger}>Theme Changer</button> */}
      <CardItem profile={SirInzamam} title="Inzamam Malik" date="04 Oct 2021" postimage={Burger} dis="Very Delicious Burger Thanks for treat @Fahim_Uz_Zaman" />
      <CardItem profile={Saqib} title="Saqib Ishaq" date="26 Mar 2021" postimage={Shop} dis="I've redesigned my shop, so tell me guys how it is?" />
      <CardItem profile={Sufiyan} title="Inno Sufiyan" date="28 Sep 2021" postimage={Express} dis="Yuhuu: I purchase new express 70CC bike" />
      <CardItem profile={Ishaq} title="Ishaq Sharif" date="28 Aug 2019" postimage={Tour} dis="Me & my my friend visited river of Chanab, After a long time & it was great place." />
      <CardItem profile={Sajid} title="Sajid Ishaq" date="01 Sep 2021" postimage={Villa} dis="Lovely Weather in Bahria Town Karachi" />
      <CardItem profile={Shafiq} title="Shafiq Ahmed" date="14 Aug 2021" postimage={Babies} dis="May Allah Almighty keep you happy, my dear daughters. Happy Independence Day" />
      <CardItem profile={Haroon} title="Rana Haroon" date="10 Oct 2021" postimage={HiRoof} dis="By the grace of Allah Almighty, I took the Hi-Roof" />
      <CardItem profile={Zain} title="Zain Ul Abideen" date="24 Aug 2021" postimage={FisalMasjid} dis="I visited Faisal Masjid. This the very biggest masjid of Pakistan." />
    </div>
  </>
  )
}

export default App;