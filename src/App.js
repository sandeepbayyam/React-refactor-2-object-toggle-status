import React from "react";
import "./style.css";
import Student from "./Student"
class App extends React.Component{
  constructor(){
    super();
    this.state={
      newStudent:'',
      students:[
        {
          fullname:'praveen',
          status:true
        },
        {
          fullname:'rahul',
          status:false
        },
        {
          fullname:'sandeep',
          status:true
        },
        {
          fullname:'kiran',
          status:true
        },
        {
          fullname:'lakshman',
          status:false
        },
        {
          fullname:'bindhu',
          status:true
        },
      ]
    }
  }
  handleinput=(e)=>{
    this.setState({newStudent:e.target.value});
  }
  add=()=>{
    this.setState({students:[...this.state.students,{
      fullname:this.state.newStudent,status:false
    }]})
  }
  toggleStatus =(index)=>{
    var temp = [...this.state.students];
    temp[index].status = !temp[index].status;
   this.setState({students:[...temp]});
  }
  render(){
    return (
      <div>
        <input type="text" onKeyUp={this.handleinput}/>
        <button onClick={this.add}>Add Student</button>
       <ul>
         {
           this.state.students.map((s,index)=>{
             return(<Student 
              s={s}
              index={index} 
              toggleStatus={this.toggleStatus}
             ></Student>)
           })
         }
       </ul>
      </div>
    );
  }
}
export default App;
