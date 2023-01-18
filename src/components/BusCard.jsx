import React, { useEffect } from "react";

export const BusCard = ({ show }) => {
  //   useEffect(() => {}, [show]);
  return (
    <>
      {show && show.busName ? (
        <div id="bus-cards">
          <div id="bus-card-list">
            <div id="bus-card-layer">
              <div id="bus-list-schedule">
                <h3>{show.busName}</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Departure Time <br /> {show.departureTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Arrival Time <br /> {show.arrivalTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>Bus rating 9/10</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Price <br /> {show.ticketPrice}
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
        </div>
      ) : null}
    </>
  );
};
