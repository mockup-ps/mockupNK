import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fireAuth } from "../fireApi";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CButton,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }
  const logOut = () => fireAuth.signOut().then(function() {
    console.log("sukses logout")
  }).catch(function(error) {
    console.log(error)
  });

  return (
    <CHeader style={{backgroundColor: "#02275d"}} withSubheader>
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
      </CHeaderNav>

      <CHeaderNav className="px-3">
      {/* <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/>
        <TheHeaderDropdown/> */}
        <CButton onClick={logOut.bind(this)} size="sm" color="danger">Logout</CButton>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <div>
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes}
        />
        </div>
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
