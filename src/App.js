import logo from './logo.svg';
import './App.css';
import Resume from './Resume';
import MyComponent from './MyComponent';

  // Sample resume data
  const resumeData={
    skills:['HTML', 'CSS', 'JAVASCRIPT'],

    education:[{
      institution:'kannur university',
      degree:'Msc Computer Science',
      year:'2019'
    },
  {
    institution:'kannur university',
    degree:'Bsc Computer Science',
    year:`2015`
  }],

  experience:[
    {
      company:'brototpe',
      role:'MERN stack developer',
      years:'3years'
    }
  ]
}
function App(){

const handleOnPlay=(msg)=>{
console.log(msg);
}

 return (
<div className="App">
<Resume resumeData={resumeData}/>

<MyComponent onPlay={handleOnPlay} message='Accessing message from onPlay function'/>
</div>
 )
  
  }

export default App;