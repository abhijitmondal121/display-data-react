
import './App.css';
import { useState } from 'react';

function App() {
const [inputarr,setInputarr]=useState([])
const [inputdata,SetInputdata]=useState({
  name:"",
  email:"",
  website:"",
  

})


function changehandle(e){
    SetInputdata({...inputdata,[e.target.name]:e.target.value})
}

let {name,email,website}=inputdata;
function changeandle(){
  setInputarr([...inputarr,{name,email,website}])
  console.log(inputarr)
  console.log(inputdata)
  SetInputdata({name:"", email:"",website:""})
}

  return (
    <div className="App">


<nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<center>
<h1 className='c my-5'>Student Enrollment Form</h1>
</center>
<div className='container my-5'>


<div className='row my-5'>


<div className='col-md-6'>


  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' name='name' value={inputdata.name} placeholder='Name' onChange={changehandle}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' name='email' value={inputdata.email} placeholder='email' onChange={changehandle}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Website</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' name='website' value={inputdata.website} placeholder='website' onChange={changehandle}/>
  </div>
    <button type="submit" className="btn btn-primary" onClick={changeandle}>Submit</button>
      </div>  


      <div className='col-md-6'>  
      <div className='row my-3'>
      <div className='col-md-2'></div>
      <div className='col-md-10'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">*</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
        {
              inputarr.map(
                (info,ind)=>{
                  return(
          <tr key={ind}>
            <th scope="row">*</th>
            <td>{info.name}</td>
            <td>{info.email}</td>
            <td>{info.website}</td>
          </tr>
          )
          }
      )
      }
    </tbody>
    </table>
    </div>
    </div>    
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
