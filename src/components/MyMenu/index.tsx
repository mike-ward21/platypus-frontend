import React from 'react'
import styled from 'styled-components'
import { Heading } from '@pantherswap-libs/uikit'
import ConnectWalletMenuButton from 'components/ConnectWalletMenuButton'
import TutorialButton from 'components/TutorialButton'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/community_market_wordmark.svg'
// import * as CSS from 'csstype';

const TopBar = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  display: inline-block;
`
const HeadingArea = styled.div`
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
`
const ConnectButtonArea = styled.div`
  float: right;
  margin: 0;
  position: absolute;
  right: 20px;  
  top: 30%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`
const TutorialButtonArea = styled.div`
  margin: 0;
  position: absolute;
  left:20px;
  top: 30%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`
const MyMenu: React.FC = () => {
  const history = useHistory();
  
  const handleClick = () => {
    history.push("/");
  }

  return (
    <TopBar>
      <TutorialButtonArea>
      <TutorialButton />
      </TutorialButtonArea>
      <HeadingArea>
        {/* <Heading size="lg" style={{cursor: 'pointer'}} onClick={handleClick}>Platypus</Heading> */}
        <img src={logo} style={{width: '300px'}} alt="React Logo" />
      </HeadingArea>      
      <ConnectButtonArea>       
        <ConnectWalletMenuButton/>
      </ConnectButtonArea>      
    </TopBar>
  )
}


export default MyMenu
