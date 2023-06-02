import React from 'react'
import styled from 'styled-components'
const StyledFooter = styled.footer`
display: flex;
flex-direction: column;
gap: 1.5rem;
    background-color: #161616;
    padding: 6vmin 8vmax;
    img{
        width: 2.8rem;
    }
    section:nth-child(1){
        width: fit-content;
        gap: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    section:nth-child(2){
        font: bold 1rem Montserrat;
    }
    section:nth-child(3){
      font-size:.9rem;
        svg{
            color: #bb6262;
            margin: -.2rem .5rem;
            font-size: 1.25rem;
        }
        ul,a{
            color: white;
            font-family: Montserrat;
            font-weight: 800;
            list-style-type: none;
            li{
                font-family:Montserrat;
color: white;
            }
        }
        ul{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
`
const Footer = () => {
  return (
    <StyledFooter>
        <section>

            <img src="/Images/logo.png" alt="" />
            <img src="/Images/Logo2.png" alt="" />
        </section>


            <section>
                23, Nehru Park Road, Vallabh Nagar,<br/>
                Indore, Madgya Pradesh, 452003<br/>
                India
            </section>

            <section>
               <ul>
               <li class="css-0">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" focusable="false" class="chakra-icon css-142rztf __fx-devtools-hide-shortcut__" role="presentation" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                         d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                        </path>
                        <polyline 
                            points="22,6 12,13 2,6">
                        </polyline>
                        </svg>
                            ecellsgsits@gmail.com
                            </li>
                            <li class="css-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" focusable="false" class="chakra-icon css-142rztf" role="presentation" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                                    </path>
                                    </svg>
                                    <a  href="https://wa.me/+918103064649">+91 8103064649</a>
                                    </li>
                                    <li class="css-0">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" focusable="false" class="chakra-icon css-142rztf" role="presentation" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                        </svg>
                <a  href="https://wa.me/+918989422330">+91 8989422330</a></li>
               </ul>
            </section>
    </StyledFooter>
  )
}

export default Footer