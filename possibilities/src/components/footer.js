import React from 'react'

//import styling for footer
import styled from 'styled-components'

let Container = styled.footer`
  text-align: center;
  font-size: 2rem;
  color: #0B5351;
  border: 1px solid #092327;
  background-color: #092327;
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