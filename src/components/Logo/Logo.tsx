import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import chef from '../../assets/img/churro-swap2.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={chef} width="200" alt='logo' style={{ marginTop: 0 }} />
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
  @media (max-width: 508px) {
    width: 150px;
  }
`

export default Logo
