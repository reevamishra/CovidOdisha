import React, {useState, useEffect} from 'react';
import {formatNumber} from '../utils/common-functions';
import { useTranslation } from 'react-i18next';

function Level(props) {
  const [data, setData] = useState(props.data);
  const [confirmed, setConfirmed] = useState(0);
  const [active, setActive] = useState(0);
  const [recoveries, setRecoveries] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [deltas, setDeltas] = useState(0);

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
  const { t } = useTranslation();
  return (
    <div className="Level">
      <div
        className="level-item is-cherry fadeInUp"
        style={{animationDelay: '1s'}}
      >
        <h5>{t('Confirmed')}</h5>
        {/* <h4>
          [
          {deltas
            ? deltas.confirmed > 0
              ? '+' + formatNumber(deltas.confirmed)
              : '+0'
            : ''}
          ]
        </h4> */}
        <h1>{t(formatNumber(confirmed)[0])+t(formatNumber(confirmed)[1])+t(formatNumber(confirmed)[2])
        +t(formatNumber(confirmed)[3])+t(formatNumber(confirmed)[4])+t(formatNumber(confirmed)[5])
        +t(formatNumber(confirmed)[6])+t(formatNumber(confirmed)[7])+t(formatNumber(confirmed)[8])} </h1>
      </div>

      <div
        className="level-item is-blue fadeInUp"
        style={{animationDelay: '1.1s'}}
      >
        <h5 className="heading">{t('Active')}</h5>
        {/* <h4>&nbsp;</h4> */}
        {/* <h4>[{props.deltas ? props.deltas.confirmeddelta-(props.deltas.recovereddelta+props.deltas.deceaseddelta) >=0 ? '+'+(props.deltas.confirmeddelta-(props.deltas.recovereddelta+props.deltas.deceaseddelta)).toString() : '+0' : ''}]</h4>*/}
        <h1 className="title has-text-info">{t(formatNumber(active)[0])+t(formatNumber(active)[1])+t(formatNumber(active)[2])}</h1>
      </div>

      <div
        className="level-item is-green fadeInUp"
        style={{animationDelay: '1.2s'}}
      >
        <h5 className="heading">{t('Recovered')}</h5>
        {/* <h4>
          [
          {deltas
            ? deltas.recovered > 0
              ? '+' + formatNumber(deltas.recovered)
              : '+0'
            : ''}
          ] */}
        {/* </h4> */}
        <h1 className="title has-text-success">{t(formatNumber(recoveries)[0])+t(formatNumber(recoveries)[1])+t(formatNumber(recoveries)[2])} </h1>
      </div>

      <div
        className="level-item is-gray fadeInUp"
        style={{animationDelay: '1.3s'}}
      >
        <h5 className="heading">{t('Deceased')}</h5>
        {/* <h4>
          [
          {deltas
            ? deltas.deaths > 0
              ? '+' + formatNumber(deltas.deaths)
              : '+0'
            : ''}
          ]
        </h4> */}
        <h1 className="title has-text-grey">{t(formatNumber(deaths)[0])+t(formatNumber(deaths)[1])+t(formatNumber(deaths)[2])}</h1>
      </div>
    </div>
  );
}

export default Level;
