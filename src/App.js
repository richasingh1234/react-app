import React,{  Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    console.log("inside handleGetJson");

    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(res => {
        if (res && res.data) {
          console.log("hii");
          console.log(res.data);
          this.setState({
            users: [...this.state.users,...res.data]
          })
        }
      });
  }

  renderUsers()
  {
    console.log(this.state.users.length);
    if(this.state.users.length<=0)
    {
      return <div>...loading</div>;
    }else{
      return this.state.users.map((val,key)=>
      {
        return <div key={key}>{val.name} | {val.age}</div>
      }
      )
    }
  }

  render() {
    return (
      <div className='App'>
        {this.renderUsers()}
      </div>
      );
  }
}

export default App;
