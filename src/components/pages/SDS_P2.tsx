import React from 'react';

const SDSP2 = () => {
  return (
    <div>
      <h3 className="s-title">Fine dust (2.5 µm)</h3>
      <div id="chart_sds_p2" style={{width: '900px', height: '500px'}}></div>
      <div style={{textAlign: 'center'}}>
        <label htmlFor="entries">Show</label>
        <input type="number" min="2" max="10000" id="entries" value="300" disabled />
        <label htmlFor="entries">entries</label>
      </div>
    </div>
  );
};

export default SDSP2;
