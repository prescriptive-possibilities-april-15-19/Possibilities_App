import React from 'react'

//import styling for footer
import styled from 'styled-components'

let Container = styled.footer`
  text-align: center;
  font-size: 2rem;
  color: white;
  border: 1px solid #B1EDE8;
  background-color: #B1EDE8;
`

export const Footer = () => {
  return (
    <Container>
      <p>
      © 2019 Prescription Possibilities, Inc. All rights reserved.
      </p>
    </Container>
  )
}