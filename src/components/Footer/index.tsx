import React from 'react'
import styled from 'styled-components'
import { Button } from '@pantherswap-libs/uikit'
// import * as CSS from 'csstype';

const BottomBar = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom:0;
  z-index:999;
`
const Bar = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.colors.text};
  align-items:center;
  justify-content:space-between;
`
const TextArea = styled.div`
  color: ${({ theme }) => theme.colors.background};
  margin-left:20px
`
const buttonstyle = {
    paddingLeft: "100px",
    paddingRight: "100px",
    marginRight:"60px"

}

const Footer: React.FC = () => {


  return (
    <BottomBar>
        <Bar>
      <TextArea>
          COMMUNITY MARKET IS PART OF A NEXT GENERATION ECOSYSTEM OF DEFI PRODUCTS
      </TextArea>
      <Button style={buttonstyle} variant="tertiary" >VIEW PRODUCTS</Button>
      </Bar>      
    </BottomBar>
  )
}


export default Footer
