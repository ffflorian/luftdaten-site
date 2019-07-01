import React from 'react';

const Entries = () => {
  return (
    <div>
      <h3 className="s-title">Last 20 entries</h3>
      <div id="chart_sds_p1" style={{width: '900px', height: '500px'}}></div>
      <div style={{textAlign: 'center'}}>
        <label htmlFor="entries">Show</label>
        <input type="number" min="2" max="10000" id="entries" value="300" disabled />
        <label htmlFor="entries">entries</label>
      </div>
    </div>
  );
};

export default Entries;
