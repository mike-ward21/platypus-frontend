import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, ConnectorId, useWalletModal } from '@pantherswap-libs/uikit'
import { injected, walletconnect } from 'connectors'
import styled from 'styled-components'
// import * as CSS from 'csstype';

const TutorialButton: React.FC<ButtonProps> = props => {

  const buttonStyle = {
    width: '150px',
  }

const EllipsisButtonText = styled.div`
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 150px;
`
  

  return (
    <div>
        <Button variant="primary" style={buttonStyle} size="sm" {...props}>
          <EllipsisButtonText>Tutorial</EllipsisButtonText>
        </Button>  
    </div>
  )
}

export default TutorialButton
