import React from 'react'
import styled from 'styled-components'
const StyledSec2 = styled.section`
  min-height: 100vh;
  background-size: 100% 100%;
    background-image: url("/Images/SS2.png");
 padding: 0 .5rem;
     
    h2{
        font-size: 1.2rem;
        padding: 1rem;
    }

     ul{
        padding-left: 2rem;
        font-weight: bold;
        color: white;
        li{
          font-family: Montserrat;

        }
    }
    h1{
        font-size: 7.5vmin;
        line-height: 5.5rem;
        font-weight: 300;
        margin-top: 4rem;
        padding: 1rem;
        padding-bottom: 0.75rem;
    }
   p{
        font-family:Montserrat;
        max-width: 60%;
        line-height: 1.5rem;
        padding: 0 1rem;
        font-weight: bold;
        color: white;
    }
@media (max-width:478px){
  p{
            max-width: 75%;
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 2rem;
        }
        h1{
            font-size: 2.75rem;
            line-height: 4rem;
        }
}
    @media (min-width:900px){
       &{
        padding: 0 16vmin;
       }
    }
`
const Sec2 = () => {
  return (
    <StyledSec2 id='section2'>
       <h1>
             IDEASPACE
          </h1>
          <p>
            Testing the feasibility of one's ideas increases one's chances of success. Here the participants will pitch their ideas and understand their viability before an esteemed panel of mentors.
          </p>

          <h2>
            PERKS TO PARTICIPATE IN IDEASCAPE
          </h2>

          <ul>
            <li>Pre-Incubation for 6 months</li>
            <li>Registration with IIC Portal</li>
            <li>Mentorship opportunities</li>
            <li>Cash Prizes worth 10K</li>
          </ul>

          <h1>
            Get Funded
          </h1>

          <p>
            The trademark event of every E-Summit'23. This competition invites all start-ups who have bold and revolutionary ideas to make their pitch in front of a panel of angel investors and negotiate to accelerate their business.
          </p>
            
          <h2>
           PERKS TO PARTICIPATE IN GET FUNDED
          </h2>

          <ul>
            <li>Opportunity to present their idea to experienced investors</li>
            <li>Chance to receive valuable feedback from the investors</li>
            <li>Exposure to potential investors and networking opportunities</li>
            <li>Opportunity to win cash prizes and funding opportunities</li>
          </ul>

    </StyledSec2>
  )
}

export default Sec2