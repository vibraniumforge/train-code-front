import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { Train } from "./Train.js";

export const TrainList = () => {
  const { trains } = useContext(GlobalContext);

  console.log(trains);
  return (
    <div className="result">
      <h4>Trains</h4>
      <table>
        <thead>
          <tr>
            <th>Railroad</th>
            <th>Symbol</th>
            <th>Description</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Frequency</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {trains && trains.length > 0
              ? trains.map((train) => {
                  return <Train train={train} key={train.id} />;
                })
              : null}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
