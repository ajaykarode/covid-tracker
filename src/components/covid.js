import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
      <div className="head">
        <h1 className="posy">🔴 LIVE</h1>
        <h2 className="posi">COVID-19 TRACKER APP</h2>
      </div>
{/* <div className="container">
<div className="flex">
<div className="cardcss">
        <div className="card bg-primary bg-gradient text-white" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">OUR COUNTRY</h5>
            <h6 className="card-subtitle mb-2 text-muted">INDIA</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
</div>



        <div className="cardcss">
        <div className="card bg-primary bg-gradient text-white" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">OUR COUNTRY</h5>
            <h6 className="card-subtitle mb-2 text-muted">TOTAL RECOVERED</h6>
            <p className="card-text">{data.recovered}</p>
          </div>
        </div>
</div>



        <div className="cardcss">
        <div className="card bg-primary bg-gradient text-white" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">OUR COUNTRY</h5>
            <h6 className="card-subtitle mb-2 text-muted">TOTAL CONFIRMED</h6>
            <p className="card-text">{data.confirmed}</p>
          </div>
        </div>
</div>


        <div className="cardcss">
        <div className="card bg-primary bg-gradient text-white" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">OUR COUNTRY</h5>
            <h6 className="card-subtitle mb-2 text-muted">TOTAL DEATHS</h6>
            <p className="card-text">{data.deaths}</p>
          </div>
        </div>
</div>

        <div className="cardcss">
        <div className="card bg-primary bg-gradient text-white" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">OUR COUNTRY</h5>
            <h6 className="card-subtitle mb-2 text-muted">TOTAL ACTIVE</h6>
            <p className="card-text">{data.active}</p>
          </div>
        </div>
</div>

        <div className="cardcss">
        <div className="card bg-primary bg-gradient text-white" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">OUR COUNTRY</h5>
            <h6 className="card-subtitle mb-2 text-muted">LAST UPDATED</h6>
            <p className="card-text">{data.lastupdatedtime}</p>
          </div>
        </div>
</div>
 </div>
 </div> */}
        {/* <ul>
          <li className="cardcss">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>OUR</span> COUNTRY
                </p>
                <p className="card__total card__small">INDIA</p>
              </div>
            </div>
          </li>

          <li className="cardcss">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span> RECOVERED
                </p>
                <p className="card__total card__small">{data.recovered}</p>
              </div>
            </div>
          </li>

          <li className="cardcss">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span> CONFIRMED
                </p>
                <p className="card__total card__small">{data.confirmed}</p>
              </div>
            </div>
          </li>

          <li className="cardcss">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span> DEATHS
                </p>
                <p className="card__total card__small">{data.deaths}</p>
              </div>
            </div>
          </li>

          <li className="cardcss">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span> ACTIVE
                </p>
                <p className="card__total card__small">{data.active}</p>
              </div>
            </div>
          </li>

          <li className="cardcss">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>LAST</span> UPDATED
                </p>
                <p className="card__total card__small">{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul> */}




        <div className="container">
          <div className="flex">

            <div className="card cl1">
              <h5><strong> OUR COUNTRY</strong></h5>
              <p className="hello si"><strong> INDIA</strong></p>
              {/* <p className="hello2"><span>status</span></p> */}
            </div>


            <div className="card cl2">
              <h5><strong> TOTAL RECOVERED</strong></h5>
              <p className="hello">{data.recovered}</p>
              {/* <p className="hello2"><span></span></p> */}
            </div>


            <div className="card cl3">
              <h5><strong> TOTAL CONFIRMED</strong> </h5>
              <p className="hello">{data.confirmed}</p>
              {/* <p className="hello2"><span>{data.confirmed}</span></p> */}
            </div>



             <div className="card cl4">
              <h5><strong> TOTAL DEATHS</strong></h5>
              <p className="hello">{data.deaths}</p>
              {/* <p className="hello2"><span>{data.deaths}</span></p> */}
            </div>



            <div className="card cl5">
              <h5><strong> TOTAL ACTIVE</strong></h5>
              <p className="hello">{data.active}</p>
              {/* <p className="hello2"><span>{data.active}</span></p> */}
            </div>



            <div className="card cl6">
              <h5><strong> LAST UPDATED</strong></h5>
              <p className="hello sml">{data.lastupdatedtime}</p>
              {/* <p className="hello2"><span>{data.lastupdatedtime}</span></p> */}
            </div>







            
          </div>
        </div>



      </section>
    </>
  );
};

export default Covid;
