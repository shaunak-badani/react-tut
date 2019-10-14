import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Shaunak, { Shaunak2 } from './components/shaunak';

import Student from './components/students';
import Post_data from './containers/post_data';


// class Shaunak extends Component {
//   render() {
//     return(
//       <div>
//         This is {this.props.name} Component.
//       </div>
//     )
//   }
// }

// const aux = props => props.children ;


// const Shaunak = (props) => {
//   return(
//     <Fragment>
//     <div>
//       This is {props.name} Component.
//     </div>
//     <div>
//       sfasdfasdfasdafdsfasd
//     </div>
//     </Fragment>
//   )
// }


class App extends Component {
  constructor() {
    super();
    this.state = {
      "name" : "Shaunak",
      "age" : 20,
      "details" : {
        "college" : "IIIT",
        "branch" : "CND"
      },
      students: [
        {
          "name" : "Shaunak",
          age: 20,
        },
        {
          "name" : "Ahish",
          age: 19,
        },
        {
          "name" : "Pranav",
          age: 19,
        },
        {
          "name" : "Priyanshu",
          age: 19,
        },
        {
          "name" : "Archit",
          age: 19,
        }
      ]
    };
  };

  // changeState = (prevState) => {
  //   return {
  //     "age" : prevState.age + 1
  //   }
  // }

  // always declare functions in this manner 

  changeAge= () => {
    // X
    // this.setState({ "age" : this.state.age + 1 });
    // let age = this.state.age;
    // this.setState({ "age" : age + 1});

    this.setState(prevState => {
      return {
        "age" : prevState.age + 1
      }
    });
    // 1st way

  }

  // changeName() {
  //   this.setState({ "name" : "Ahish" })
  // }

  changeCollege = () => {
    // this.state.details.college ="MIT";

    let details = {...this.state.details};
    details.college = "MIT";
    this.setState({ "details" : details});

    // let college = this.state.details.college;
    // this.setState({ "details" : {""} })
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h2>Hello {this.state.name}</h2>
          <h4>I am {this.state.age}</h4>
          <h5>I am in {this.state.details.college}</h5>
          <button onClick={this.changeCollege.bind(this)}>Change name</button> */}
          {/* <Shaunak name="shaunak" age={30}>
            <div>
              tikna
            </div> */}
          {/* </Shaunak> */}
          {/* <div>
            falana
          </div> */}
          {/* <Shaunak2 /> */}
          {/* {this.state.students.map(student => <Student name={student.name} age={student.age} />)} */}
          {/* <Student name={this.state.students[0].name} age={this.state.students[0].age}/> */}
          <Post_data />
        </div>
      </div>
    );
  }
}

export default App;
