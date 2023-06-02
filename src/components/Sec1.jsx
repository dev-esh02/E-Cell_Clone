import React from 'react'
import styled from 'styled-components'
import Header from './Header'
const StyledS1 = styled.section`
min-height: 100vh;
padding: 0 .5rem;
background-size: 100% 100%;
background-repeat: no-repeat;
background-position: right;
    background-image: url("/Images/Background.png");
    a{
            padding: .45rem;
         width: 100%;
         height: 100%;
           color: white;
        }
    h1{
        font-size: 8.5vmin;
        line-height: 5.5rem;
        font-weight: 300;
        margin-top: 4rem;
        padding: 1rem;
    }
    p{
        font-size: 1rem;
        font-family:Montserrat;
        max-width: 40vmax;
        line-height: 1.5rem;
        padding: 1rem;
        font-weight: bold;
        color: white;
    }

    button:nth-child(1){
        background-color: #dd6b20;
        border-radius: .6rem;
        border: 0;
        color: white;
        font-weight: bold;
        font-size: 1rem;
    }
    button:nth-child(1):hover{
        background-image: linear-gradient(rgba(0,0,0,0.13), rgba(0,0,0,0.13));
    }

    div{
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        padding: 1rem;
    }
    button:nth-child(2){
      
        background-color: transparent;
        border-radius: .6rem;
        border: 0;
        color: white;
        
        font-weight: bold;
        font-size: 1rem;
      
    }
    button:nth-child(1){
        background-color: #dd6b20;
        border-radius: .6rem;
        border: 0;
        color: white;
        padding: .8rem 1rem;
        font-weight: bold;
        font-size: 1rem;
    }
    button:nth-child(2):hover{
        background-color: rgba(200,200,200,0.2);
    }


    @media (max-width:478px){
        &{
            padding: .5rem;
        }
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
        div{
            flex-direction: column;
        }
        button{
            font-size: 1.5rem !important;
            width: fit-content;
            padding: 1rem !important;
        }
    }
    @media (min-width:900px){
        padding: 0 16vmin;
    }
    @media (max-width:990px){
        &{
            background-size: 175vmin 65%;
        }
    }
`
const Sec1 = () => {
    
  return (
    <StyledS1>
        <Header></Header>

        <h1>
        Startup <br/> Registration
        </h1>

        <p>
        E-Summit'23 is a convention of budding entrepreneurs, innovators, and investors which includes competitions, workshops, panel discussions, and speaker sessions from some eminent names in the corporate world for supporting, promoting, and informing about entrepreneurship and startups.
        </p>

        <div>
            <button>
                <a href="#section3">
                Register Now
                </a>
            </button>
            <button >
              <a href="#section2">
                 
              Learn more &nbsp;
                <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg></span>
                
              </a>
            </button>
        </div>
    </StyledS1>
  )
}

export default Sec1