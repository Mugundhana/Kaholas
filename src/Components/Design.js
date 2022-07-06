import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Data from '../Records.json'


    function Dispaly(){
       Data.map(
            (values)=>{
                return(
                    <div>
                        {values.title}
                        {values.coursetype}
                        {values.content}
                        {values.schedule}
                        {values.class_reviews}
                        {values.class_reviews_stars}
                        {values.completed_learners}
                        {values.teacher_name}
                        {values.teacher_reviews}
                        {values.teacher_reviews_stars}
                        {values.starynight}
                        {values.Kandyinsky}
                        {values.waterlilly}
                        {values.image_teacher}
                    </div>
                )
            }
        )
    
    }

        
    


            

    export function Body(){

         return(
    
             <div>
                            <div className=" absolute w-full">
                                <p className=" absolute text-3xl font-bold font-sans left-16 w-full text-4xl">Summer Art Camp! 5 Days of Artists And Painting Monet<br></br>
                               Van Gogh, Matisse, & More
                                </p>
                            </div>

                            <div className=''>
                             <p className='absolute top-[78px] left-16 font-base font-sans text-gray-400'>Multi-Day Course</p>
                               <FontAwesomeIcon icon={faCircleQuestion} className="absolute left-[204px] top-[82px]"/>
                            </div>
                                  
                            <div className="absolute top-[150px] left-16" >
                                <p className="text-xl font-semibold">
                                In this 5 day class we will explore artists Monet, Matisse, Van<br></br>
                                Gogh, among others and then recreate paintings using crayon<br></br>
                                and watercolor.Students will have fun learning about the artists <br></br>
                                 & creating their ow art inspired by their work.
                                </p>
                            </div>

                            <div>
                                <span className='text-violet-900 absolute top-[295px] left-28 font-extrabold '>Kimberly R Moseler</span>
                            </div>

                            <div className='absolute top-[340px] left-[250px] text-gray-400'>
                                 <span className=''>467 total reviews for this teacher</span>
                             </div>
            
                            <div className='absolute top-[380px] left-[250px] text-gray-400'>
                                 <span>5 reviews for this class</span>
                            </div>
            
                            <div className='absolute top-[415px] font-medium left-20'>
                                 <span>Completed by 21 learners</span>
                            </div>

                            <div className='absolute top-[470px] left-16'>
                              <button className= 'rounded-full border-solid border text-lg w-56 h-10 text-white bg-fuchsia-800'>See Class Schedule  </button>
                            </div>
            
                            <div className='absolute left-[50px]'>
                                 <FontAwesomeIcon icon={faHeart} className=" absolute stroke-1 top-[472px]  h-6 left-[300px] text-fuchsia-900"/>
                                 <span className='absolute top-[470px] left-[340px] font-semibold text-xl text-fuchsia-900 ' >Save</span>
                            </div>

                            <div className=' absolute left-[50px]'>
                                <FontAwesomeIcon icon={faShare} className='absolute left-[420px] top-[475px] h-6  text-fuchsia-900' />
                                <span className='absolute top-[472px] left-[450px] font-semibold text-xl text-fuchsia-900'>Share</span>
                                
                            </div>
            


            </div>
            
            
            
        )

    }
        export default Dispaly









  
