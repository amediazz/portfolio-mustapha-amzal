import {useEffect,useState} from 'react'

function BackToTopButton() {
   const [setBackToTopButton]=useState(false);

   useEffect(()=>{
        window.addEventListener("scroll",()=>{

          if(window.scrolly > 100){
            setBackToTopButton(true);
          }
          else{
            setBackToTopButton(false);
          }
        })
   },[setBackToTopButton])

   const scrollUp = ()=>{
    window.scrollTo({
      top:0,
      behavier:"smooth" 
    })
   }
  return (
    <>
    {BackToTopButton &&(
      <button style={
        {
          
          position:"fixed",
          bottom:"30px",
          right:"30px",
          width:"30px",
          height:"30px",
          fontSize:"30px"
        }
      }
      onClick={scrollUp}
      >^</button>
    )}
    
  </>
  )
}
export default BackToTopButton
