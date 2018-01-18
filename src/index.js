import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import paceCalc from './paceCalc';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hh: '00',
      mm: '40',
      ss: '00',
      distance: 10
    };

    this.handleChangeTimeHH = this.handleChangeTimeHH.bind(this);
    this.handleChangeTimeMM = this.handleChangeTimeMM.bind(this);
    this.handleChangeTimeSS = this.handleChangeTimeSS.bind(this);
    this.handleChangeDistance = this.handleChangeDistance.bind(this);
  }
  handleChangeTimeHH(event) {
    this.setState({ hh: event.target.value });
  }
  handleChangeTimeMM(event) {
    this.setState({ mm: event.target.value });
  }
  handleChangeTimeSS(event) {
    this.setState({ ss: event.target.value });
  }
  handleChangeDistance(event) {
    this.setState({ distance: event.target.value });
  }
  render() {
    return (
      <div className="container" style={styles}>
        <div className="row">
          <Hello />
          <h2>Start editing to see some magic happen</h2>
          <form className="form-inline">
            <div className="col-9">
              <div className="form-row">
                <div className="col-4">
                  <input className="form-control" 
                    placeholder="Hours" type="number" min="0" max="1000" 
                    value={this.state.hh}
                    onChange={this.handleChangeTimeHH} />
                </div>
                <div className="col-4">
                  <input className="form-control"
                    placeholder="Minutes" type="number" min="0" max="59"
                    value={this.state.mm}
                    onChange={this.handleChangeTimeMM} />
                </div>
                <div className="col-4">
                  <input className="form-control"
                    placeholder="Seconds" type="number" min="0" max="59" 
                    value={this.state.ss}
                    onChange={this.handleChangeTimeSS} />
                </div>

                <div className="col-12">
                  <input className="form-control"
                    placeholder="Distance" type="number"
                    value={this.state.distance}
                    onChange={this.handleChangeDistance} />
                </div>
              </div>
            </div>
            <div className="col-3">
              <p>{paceCalc(this.state.hh + ':' + this.state.mm + ':' + this.state.ss, this.state.distance)} min/km</p>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

render(<App />, document.getElementById('root'));
