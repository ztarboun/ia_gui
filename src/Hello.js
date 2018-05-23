import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlecompo = this.handlecompo.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Veuillez atendre ES cherche : ' + this.state.value);
    event.preventDefault();
  }
  handlecompo(event) {
    this.setState({ value: this.state.value + event.target.value });
  }

  render() {
    return (

      
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handlecompo} type="checkbox" name="compo" value="test"></input>
        <input onChange={this.handlecompo} type="checkbox" name="compo" value="doc"></input>
        <input onChange={this.handlecompo} type="checkbox" name="compo" value="requirements"></input>
        <label>
          Saisir votre query : 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="search" />
      </form>
    );
  }
}

export default App;
