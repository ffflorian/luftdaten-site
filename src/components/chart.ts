export const getData = (endpoint: string, limit = 10000) => {
  return fetch(`/data/${endpoint}/?limit=${limit}`).then(response => response.json());
};

export const buildOptions = (title: string, format: string) => {
  return {
    allowAsync: true,
    chartArea: {left: 100},
    height: 500,
    title,
    vAxis: {format},
    width: 900,
  };
};

// export const buildDataTable = (vAxisName: string, entries: Array<[string, string]>) => {
//   const dataTable = new google.visualization.DataTable();
//   dataTable.addColumn('date', 'Time');
//   dataTable.addColumn('number', vAxisName);
//   dataTable.addRows(entries);

//   return dataTable;
// }
