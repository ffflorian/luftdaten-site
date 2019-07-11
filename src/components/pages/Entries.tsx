import React from 'react';

type Props = React.HTMLProps<Document>;

interface State {
  data: Array<string | Date | number>;
}

class Humidity extends React.PureComponent<Props, State> {
  state: State = {
    data: [],
  };

  async componentDidMount(): Promise<void> {
    const response = await fetch(`http://localhost:21080/data/latest/?limit=20`);
    const jsonData = await response.json();
    const data = this.state.data.concat(jsonData);
    this.setState({
      data,
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <h3 className="s-title">Last 20 entries</h3>
        <table className="table table-striped table-scroll table-hover" id="entries">
          <thead>
            <tr></tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default Humidity;
