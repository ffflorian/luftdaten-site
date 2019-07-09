import React from 'react';
import {Chart} from 'react-google-charts';
import {ChartWrapperOptions} from 'react-google-charts/dist/types';

type Props = React.HTMLProps<Document>;

interface State {
  entryDisabled?: boolean;
  data: Array<Array<string | Date | number>>;
}

const options: ChartWrapperOptions['options'] = {
  chartArea: {left: 100},
  height: 500,
  title: 'Temperature in the last 24 hours',
  vAxis: {format: '## °C'},
  width: 900,
};

class Temperature extends React.PureComponent<Props, State> {
  state: State = {
    data: [['date', 'temperature']],
    entryDisabled: true,
  };

  componentDidMount(): Promise<void> {
    return fetch(`http://localhost:21080/data/temperature/?limit=1000`)
      .then(response => response.json())
      .then(jsonData => {
        const mappedData = jsonData.map((entry: {created_at: string; temperature: string}) => {
          const {created_at, temperature} = entry;
          return [new Date(created_at), temperature];
        });
        const data = this.state.data.concat(mappedData);
        this.setState({
          data,
          entryDisabled: false,
        });
      });
  }

  render(): JSX.Element {
    console.log('this.state.entryDisabled', this.state.entryDisabled);
    return (
      <div>
        <h3 className="s-title">Temperature</h3>
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

export default Temperature;
