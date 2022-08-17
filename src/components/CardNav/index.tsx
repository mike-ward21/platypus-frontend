import { ButtonMenu, ButtonMenuItem, CogIcon, IconButton, useModal } from '@pantherswap-libs/uikit'
import SettingsModal from 'components/PageHeader/SettingsModal'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'


const StyledNav = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;  
`

const Nav = ({ activeIndex = 1 }: { activeIndex?: number }) => {
  const [onPresentSettings] = useModal(<SettingsModal />)

  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} size="sm" variant="subtle">
        <ButtonMenuItem id="swap-nav-link" onClick={()=>{window.location.href = "http://www.w3schools.com"}} >
          Main    
        </ButtonMenuItem>
      
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          Swap
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          Pool
        </ButtonMenuItem>
        <ButtonMenuItem id="staking-nav-link" to="/veptp" as={Link}>
          VePTP
        </ButtonMenuItem>
      </ButtonMenu>
      {/* <div style={{display: 'inline-block', position: 'relative', top: '5px'}}>
        <IconButton size='sm' className="ml-3" variant="primary" onClick={onPresentSettings} title="Settings">
          <CogIcon />
        </IconButton>
      </div> */}
    </StyledNav>
  )
}

export default Nav
