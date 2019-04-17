import React from 'react'

//import styling for footer
import styled from 'styled-components'

let Container = styled.footer`
  text-align: center;
  font-size: 1rem;
  color: #0B5351;
  border: 1px solid #092327;
  background-color: #092327;
  font-family: Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif;
`

const Footer = () => {
  return (
    <Container>
      <p>
      © 2019 Prescription Possibilities, Inc. All rights reserved.
      </p>
    </Container>
  )
}

export default Footer