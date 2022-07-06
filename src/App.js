import Image from './Data/starynight.jpg';
import Kandy from './Data/kandinsky.jpg'
import waterlilly from './Data/waterlilly.jpg'
import Teacher from './Data/Teacher.jpg'
import './App.css';
import { Body } from './Components/Design';
import ReactStars from 'react-rating-stars-component'
import Display from './Components/Design';



function App() {
  return (
    <div>
      <img src={Image} alt="night" className='absolute left-[730px] top-40 w-[255px] h-96 rounded-l-xl'/>
      <img src={Kandy} alt="sky" className='absolute left-[990px] top-40 w-[285px] h-48'/>
      <img src= {waterlilly} alt="lilly" className='absolute left-[990px] top-[353px] w-[285px] h-48'/>
      <img src= {Teacher} alt="tutor" className='absolute rounded-full w-10 h-10 top-72 left-16'/> 
    <Body/>
    <Display/>

    
     
        <div className='absolute top-[360px] left-[70px]' >
           <ReactStars activeColor= "yellow" color="yellow"
               size={40}
               rating={5}
            />

            
        </div>
     
      <div className='absolute top-[320px] left-[70px]'>
           <ReactStars activeColor= "yellow" color="yellow"
               size={40}
               rating={5}
            />

                
      </div>

  
    
    </div>
  );
}

export default App;
