import "./covid.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Covid() {
  const [maindata, setmaindata] = useState({});
  useEffect(() => {
    axios
      .get("https://data.covid19india.org/data.json")
      .then((result) => {
        setmaindata(result.data.statewise[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let timeslap = (maindata.lastupdatedtime);
  // console.log(timeslap.split(" ")[0]);
  return (
    <div className="covidcontainer">
      <div className="mattirealcontainer">
        <div className="mainheading"><h1>COVID-19 CORONAVIRUS TRACKER</h1></div>
        <div className="cardscontainor">
          <div className="cards">
            <div className="card one">
              <div className="carheading">
                OUR <span>COUNTRY</span>
              </div>
              <div className="cardvalue">INDIA</div>
            </div>

            <div className="card two">
              <div className="carheading">
                TOTAL <span>RECOVERED</span>
              </div>
              <div className="cardvalue">{maindata.recovered}</div>
            </div>

            <div className="card three">
              <div className="carheading">
                TOTAL <span>CONFIRMED</span>
              </div>
              <div className="cardvalue">{maindata.confirmed}</div>
            </div>
          </div>
          <div className="cards">
          <div className="card four">
              <div className="carheading">
                TOTAL <span>DEATH</span>
              </div>
              <div className="cardvalue">{maindata.deaths}</div>
            </div>

            <div className="card five">
              <div className="carheading">
                TOTAL<span>ACTIVE</span>
              </div>
              <div className="cardvalue">{maindata.active}</div>
            </div>

            <div className="card six">
              <div className="carheading">
                LAST<span>UPDATED</span>
              </div>
              <div className="cardvalue">{timeslap}</div>
            </div>
          </div>
        </div>
      </div>
      <span className="auther"><a href="https://github.com/pk2173" target="blank">Made By Praveen</a></span>
    </div>
  );
}
