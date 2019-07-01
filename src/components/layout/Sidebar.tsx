import React from 'react';

const Sidebar = () => {
  return (
    <div className="accordion">
      <a className="accordion-header" href="/temperature">
        Temperature
      </a>
      <a className="accordion-header" href="/humidity">
        Humidity
      </a>
      <a className="accordion-header" href="/sds_p1">
        Fine dust 10 µm
      </a>
      <a className="accordion-header" href="/sds_p2">
        Fine dust 2.5 µm
      </a>
      <a className="accordion-header" href="/entries">
        Last 20 entries
      </a>
    </div>
  );
};

export default Sidebar;
