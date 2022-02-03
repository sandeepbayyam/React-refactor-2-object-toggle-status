import React from 'react';
class Student extends React.Component {  
  render() {
    var {fullname,status} = this.props.s;
    return (
      <li  className={status ? 'green' : 'red'} onClick={()=>{
        this.props.toggleStatus(this.props.index)}}
       >
        {fullname}
      </li>
    );
  }
}
export default Student;
