import React from 'react';
import {Chart} from 'react-google-charts';
import {ChartWrapperOptions} from 'react-google-charts/dist/types';

type Props = React.HTMLProps<Document>;

interface State {
  entryDisabled?: boolean;
  data: Array<Array<string | Date | number>>;
}

const dataType = 'Fine dust (10 µm)';

const options: ChartWrapperOptions['options'] = {
  chartArea: {left: 100},
  height: 500,
  title: `${dataType} in the last 24 hours`,
  vAxis: {format: '##,## µg/m³'},
  width: 900,
};

class SDS_P1 extends React.PureComponent<Props, State> {
  state: State = {
    data: [['date', dataType]],
    entryDisabled: true,
  };

  async componentDidMount(): Promise<void> {
    const response = await fetch(`http://localhost:21080/data/sds_p1/?limit=1000`);
    const jsonData = await response.json();
    const mappedData = jsonData.map((entry: {created_at: string; SDS_P1: string}) => [
      new Date(entry.created_at),
      entry.SDS_P1,
    ]);
    const data = this.state.data.concat(mappedData);
    this.setState({
      data,
      entryDisabled: false,
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <h3 className="s-title">{dataType}</h3>
        <Chart
          chartType="LineChart"
          data={this.state.data}
          options={options}
          width="900px"
          height="500px"
          chartLanguage="en-GB"
          legendToggle
        />
        <div style={{textAlign: 'center'}}>
          <label htmlFor="entries">Show</label>
          <input type="number" min="2" max="10000" id="entries" value="300" disabled={this.state.entryDisabled} />
          <label htmlFor="entries">entries</label>
        </div>
      </div>
    );
  }
}

export default SDS_P1;
