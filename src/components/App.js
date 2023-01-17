import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Swap from "./Swap";
import Source from "./Source";
import Destination from "./Destination";
import { Date } from "./Date";
import SearchBus from "./SearchBus";
import Nav from "./Nav";
import { handHeart, user } from "fontawesome";

const App = () => {
  const [message, setMessage] = useState("");
  const [toMessage, setToMessage] = useState("");
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState(data);
  // const [filter, setFilter] = useState(setData2);
  useEffect(() => {
    console.log(filter);
  }, [filter]);
  const handleShow = () => {
    console.log(data, data2);
    setShow(data);
  };

  return (
    <div id="main">
      <Nav />
      <div id="main-duplicate">
        <Source message={message} setMessage={setMessage} />
        {/* <h2>{message}</h2> */}
        <Swap
          source={message}
          destination={toMessage}
          setSource={setMessage}
          setToSource={setToMessage}
        />
        {/* <h2>{message}</h2>
        <h2>{toMessage}</h2> */}
        <Destination toMessage={toMessage} setToMessage={setToMessage} />
        {/* <h2>{toMessage}</h2> */}
        <Date select={select} setSelect={setSelect} />
        {/* <h2>{select}</h2> */}
        <SearchBus
          from={message}
          to={toMessage}
          date={select}
          data={data}
          data2={data2}
          filter={filter}
          setData={setData}
          setData2={setData2}
          setFilter={setFilter}
        />
      </div>
      <div id="image">
        <img src="redbus-logo.png" alt="" />
      </div>
      <div id="details">
        <div id="heading">
          <h1>Book Your Buses With RedBus</h1>
        </div>
        <div id="png">
          <img src="symbole-de-bus-rouge.png" alt="" />
        </div>
      </div>
      <div id="bus-details">
        <div id="sortby">
          <div id="sort-text">
            <h1>SORT BY: </h1>
          </div>
          <div id="details-of-sorting">
            <div id="schedule">
              <h3>Name</h3>
            </div>
            <div id="schedule">
              <h3>Departure</h3>
            </div>
            <div id="schedule">
              <h3>Arrival</h3>
            </div>
            <div id="schedule">
              <h3>Price</h3>
            </div>
          </div>
        </div>

        <div id="bus-layer">
          {filter &&
            filter.map((user, index) => (
              <div id="bus-list" onClick={handleShow} key={index}>
                <div id="bus-list-schedule">
                  <h3>{user.busName}</h3>
                </div>
                <div id="bus-list-schedule">
                  <h3>
                    Departure Time <br /> {user.departureTime}
                  </h3>
                </div>
                <div id="bus-list-schedule">
                  <h3>
                    Arrival Time <br /> {user.arrivalTime}
                  </h3>
                </div>
                <div id="bus-list-schedule">
                  <h3>Bus rating 9/10</h3>
                </div>
                <div id="bus-list-schedule">
                  <h3>Price {user.ticketPrice}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div id="bus-cards">
        {show.map((user2) => (
          <div id="bus-card-list">
            <div id="bus-card-layer">
              <div id="bus-list-schedule">
                <h3>{user2.busName}</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Departure Time <br /> {user2.departureTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Arrival Time <br /> {user2.arrivalTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>Bus rating 9/10</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Price <br /> {user2.ticketPrice}
                </h3>
              </div>
            </div>
            <div id="image">
              <img src="redbus_logo.png" alt="" />
            </div>
            <div id="bus-seat-select">
              <div id="top">
                <div id="mainTop">
                  <div id="top1"></div>
                  <div id="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top1"></div>
                  <div id="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top1"></div>
                  <div id="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top1"></div>
                  <div id="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top1"></div>
                  <div id="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top1"></div>
                  <div id="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top1"></div>
                  <div id="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top1"></div>
                  <div id="top2"></div>
                </div>
              </div>
              <div id="bottom">
                <div id="mainBottom">
                  <div id="bottom1"></div>
                </div>
                <div id="mainBottom">
                  <div id="bottom1"></div>
                </div>
                <div id="mainBottom">
                  <div id="bottom1"></div>
                </div>
                <div id="mainBottom">
                  <div id="bottom1"></div>
                </div>
                <div id="mainBottom">
                  <div id="bottom1"></div>
                </div>
                <div id="mainBottom">
                  <div id="bottom1"></div>
                </div>
                <div id="mainBottom">
                  <div id="bottom1"></div>
                </div>
                <div id="mainBottom">
                  <div id="bottom1"></div>
                </div>
              </div>
            </div>
            <div id="book-ticket">
              <button type="submit">BOOK TICKET</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
