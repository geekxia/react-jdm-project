import React from 'react'

import routes from '@/routes'
import { NavLink } from 'react-router-dom'
import './style.scss'

export default class Navs extends React.Component {
  render() {
    return (
      <div className='app-navs'>
        {
          routes.map((ele,idx)=>{
            return(
              <div key={ele.id}>
                 <NavLink activeClassName='on' exact to={ele.path}>{ele.text}</NavLink>
              </div>
            )
          })
        }
      </div>
    )
  }
}
