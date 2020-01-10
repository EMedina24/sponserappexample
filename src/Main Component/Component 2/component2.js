import React  from 'react';
import './bootstrap.min.css';
import './component2.css';



class Forms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      if(this.state.value == null){}
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className='form_card'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }


export default Forms;
















