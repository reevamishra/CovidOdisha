import React, {useState, useEffect} from 'react';
import {formatNumber} from '../utils/common-functions';

function Level(props) {
  const [data, setData] = useState(props.data);
  const [confirmed, setConfirmed] = useState(0);
  const [active, setActive] = useState(0);
  const [recoveries, setRecoveries] = useState(0);
  const [deaths, setDeaths] = useState(0);
  //const [deltas, setDeltas] = useState(0);
  const [setDeltas] = useState(0);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    const parseData = () => {
      let confirmed = 0;
      let active = 0;
      let recoveries = 0;
      let deaths = 0;
      let deltas = {};
      data.forEach((state, index) => {
        if (index !== 0 && state.state === "Odisha") {
          confirmed += parseInt(state.confirmed);
          active += parseInt(state.active);
          recoveries += parseInt(state.recovered);
          deaths += parseInt(state.deaths);
        } else {
          deltas = {
            confirmed: parseInt(state.deltaconfirmed),
            deaths: parseInt(state.deltadeaths),
            recovered: parseInt(state.deltarecovered),
          };
        }
      });
      setConfirmed(confirmed);
      setActive(active);
      setRecoveries(recoveries);
      setDeaths(deaths);
      setDeltas(deltas);
    };
    parseData();
  }, [data]);

  return (
    <div className="Level">
      <div
        className="level-item is-cherry fadeInUp"
        style={{animationDelay: '1s'}}
      >
        <h5>Confirmed</h5>
        {/* <h4>
          [
          {deltas
            ? deltas.confirmed > 0
              ? '+' + formatNumber(deltas.confirmed)
              : '+0'
            : ''}
          ]
        </h4> */}
        <h1>{formatNumber(confirmed)} </h1>
      </div>

      <div
        className="level-item is-blue fadeInUp"
        style={{animationDelay: '1.1s'}}
      >
        <h5 className="heading">Active</h5>
        {/* <h4>&nbsp;</h4> */}
        {/* <h4>[{props.deltas ? props.deltas.confirmeddelta-(props.deltas.recovereddelta+props.deltas.deceaseddelta) >=0 ? '+'+(props.deltas.confirmeddelta-(props.deltas.recovereddelta+props.deltas.deceaseddelta)).toString() : '+0' : ''}]</h4>*/}
        <h1 className="title has-text-info">{formatNumber(active)}</h1>
      </div>

      <div
        className="level-item is-green fadeInUp"
        style={{animationDelay: '1.2s'}}
      >
        <h5 className="heading">Recovered</h5>
        {/* <h4>
          [
          {deltas
            ? deltas.recovered > 0
              ? '+' + formatNumber(deltas.recovered)
              : '+0'
            : ''}
          ] */}
        {/* </h4> */}
        <h1 className="title has-text-success">{formatNumber(recoveries)} </h1>
      </div>

      <div
        className="level-item is-gray fadeInUp"
        style={{animationDelay: '1.3s'}}
      >
        <h5 className="heading">Deceased</h5>
        {/* <h4>
          [
          {deltas
            ? deltas.deaths > 0
              ? '+' + formatNumber(deltas.deaths)
              : '+0'
            : ''}
          ]
        </h4> */}
        <h1 className="title has-text-grey">{formatNumber(deaths)}</h1>
      </div>
    </div>
  );
}

export default Level;
