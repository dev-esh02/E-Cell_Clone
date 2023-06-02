import React, { useState } from 'react'
import styled from 'styled-components'
const StyledSec3 = styled.section`
  background-size: 100% 100%;
    background-image: url("/Images/SS2.png");
 padding: 15vmax 2vmax;
  img{
    width: 100%;
    margin: 0 auto;
    margin-bottom: -5px;
  }
  section{
    min-height: 100vh;
    background-color: white;
    color: black;
    border-radius: 10px;
    p{
      font: 800 1.75vmin Montserrat ;
    }

    & > p:nth-child(1){
      font-weight: bold;
      font-family: Esoris;
      font-size: 6vmin;
      text-align: center;
      padding: 2rem;
    }
 form > button{
  bottom: 2.75vmax;
  left: 50%;
  translate: -50% 0%;
        background-color: #dd6b20;
        border-radius: .6rem;
        border: 0;
        color: white;
        padding: .6rem 1.2rem;
        font-weight: bold;
        font-size: 1.25rem;
    }
    form > button:hover{
      background-image: linear-gradient(rgba(0,0,0,0.13), rgba(0,0,0,0.13));
    }
    form{
      display: grid;
      position: relative;
      row-gap: 2rem;
      column-gap: 5rem;
      padding: 1rem 20vmin;
      padding-bottom: 10vmax !important;
      grid-template-columns: auto auto;
      font-family: Montserrat;
    }

   input[type="text"], select{
    background-color: white;
    font-family: Montserrat;
    font-size: 1rem;
    margin-top: 8px;
    width: 100%;
    border: 2px solid #ededed;
    border-radius: 5px;
    padding: .6rem;
    &:focus{
      outline:0;
      border: 2px solid skyblue;
    }
   }

 
  }
  @media (max-width:768px){
   
     form{
      display: grid;
       grid-template-columns: auto !important;
       justify-content: center !important;
       padding: .5rem 10vmin !important;
     }
   }
   
  @media (min-width:990px){
       &{
        padding: 1vmin 8vmax;
       }
   }
`
const Sec3 = () => {
  const [data, setData] = useState({});
  const handleChange = (e)=>{
       let name  = e.target.name;
       let value = e.target.value;
       setData({...data, [name]:value});
  }

  const handleSubmit = ()=>{
    fetch('https://ecellbackend.onrender.com/register',{
      headers:{
        'Content-Type':'application/json'
      },
      method:"POST",
      body:JSON.stringify(data)
    }).then((res)=>{
      return res.json()
    }).then((res)=>{
      alert(res.message)
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
     <StyledSec3 id='section3'>
      <img src="/Images/formbg.png" alt="" />
       <section>
          <p>
            REGISTRATION FORM
          </p>
       <form onSubmit={(e)=>{e.preventDefault()}} method='POST'>
        <label htmlFor="name">
          <p className='star'>Name of Your Startup</p>
          <input required type="text" onChange={handleChange}  name='name' />
        </label>
        <label htmlFor="name">
          <p className='star'>Founder's Name</p>
          <input required type="text" onChange={handleChange} name='founder' />
        </label>
        <label htmlFor="name">
          <p className='star'>Email Address</p>
          <input required type="text" onChange={handleChange} name='email'  />
        </label>
        <label htmlFor="name">
          <p className='star'>Contact Number</p>
          <input  required type="text" onChange={handleChange} name='mobile' />
        </label>
        <label htmlFor="name">
          <p className='star'>Which city is your startup based in?</p>
          <input required type="text" onChange={handleChange} name='city' />
        </label>
        <label htmlFor="name">
          <p className='star'>Mention your Startup website.(Mention NA, if not applicable)</p>
          <input required type="text" onChange={handleChange} name='website' />
        </label>
        <label htmlFor="name">
          <p className='star'>What is your Target Customer and Market Size?</p>
          <input required type="text" onChange={handleChange} name='size' />
        </label>
        <label htmlFor="name">
          <p className='star'>What is your Primary Revenue Stream?</p>
          <input required type="text" onChange={handleChange} name='revenue_stream' />
        </label>

        <label htmlFor="name">
          <p className='star'>Mention any two close competitors of your Startup</p>
          <input required type="text" onChange={handleChange} name='competitors' />
        </label>

        <label htmlFor="name">
          <p className='star'>Can you provide a brief description about your Startup, Productand the need/gap being addressed</p>
          <input required type="text" onChange={handleChange} name='description' />
        </label>

             <label htmlFor="name">
          <p className='star'>What are some challenges you are facing in your Startup?</p>
          <input required type="text" onChange={handleChange} name='challenges' />
        </label>


             <label htmlFor="name">
          <p className='star'>At what stage are you in your Startup Journey?</p>
           <select onChange={handleChange} required name="stage" id="">
          <option value="Ideation">Ideation</option>
          <option value="MVP Ready (POC / Evaluation underway - not paid)">MVP Ready (POC / Evaluation underway - not paid)</option>
          <option value="">Customer Pilots Underways (Paid POC)</option>
          <option value="">Early Revenue (First set of Paid Customers on-board)</option>
          <option value="">Early Scale (GTM and target market validated, now looking to scale)</option>
          <option value="">Scaling (Proven GTM, now going for National or Global)</option>
        </select>
        </label>
             <label htmlFor="name">
          <p className='star'>Which event do you wnat to register for?</p>
           <select onChange={handleChange} required name="event" id="">
          <option value="">Ideascape</option>
          <option value="">Get Funded</option>
        </select>
        </label>
             <label htmlFor="name">
          <p className='star'>What domainis your Startup in?</p>
           <select onChange={handleChange} required name="domain" id="">
          <option value="">Healthcare/Pharma/Lifesciences</option>
          <option value="">Finance/Insurance/Fintech</option>
          <option value="">Manufacturing/Industrial</option>
          <option value="">Retail/Sales and Marketing</option>
          <option value="">Deep technology (Domain neutral)/A.I.</option>
          <option value="">Agriculture/FoodTech</option>
          <option value="">FMCG</option>
          <option value="">EduTEch</option>
          <option value="">Drone</option>
          <option value="">AR/VR</option>
          <option value="">IOT</option>
          <option value="">Others</option>
        </select>
        </label>

       

        <label htmlFor="name">
          <p className=''>If other category, mention here in brief</p>
          <input type="text" onChange={handleChange} id='name' name='other' />
        </label>
     <button onClick={handleSubmit} className='registerButton' style={{position:'absolute', }} type="submit">Register</button>
      </form>
       </section>
     </StyledSec3>
  )
}

export default Sec3