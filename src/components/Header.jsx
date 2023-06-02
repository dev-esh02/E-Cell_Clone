import React from 'react'
import styled from 'styled-components'
import logo from '/Images/logo.png'
import ecelllogo from '/Images/Logo2.png'

const StyledHeader = styled.header`
padding: 18px;
display: flex;
font-size: 18px;
align-items: center;
justify-content: space-between;
    img{
        width: 2.5rem;
    }

    ul{
       list-style-type: none;
       display: flex;
       align-items: center;
       gap: .5rem;
    }
    a{
        color: white;
    }
    @media (max-width:478px){

    }
`
const Header = () => {
  return (
    <StyledHeader>
        <a href="#">
            <img src={logo} alt="logo" />
        </a>
        
        <nav>
            <ul>
                <li><a href="">EVENTS</a></li>
                <li><a href="">SPONSERS</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">
                    <img src={ecelllogo} alt="" /></a></li>
            </ul>
        </nav>
    </StyledHeader>
  )
}

export default Header