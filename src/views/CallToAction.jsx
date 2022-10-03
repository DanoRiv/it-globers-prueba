import React from 'react'
import Instagram from '../components/Instagram'
import SubForm from '../components/SubForm'
import style from './css/CallToAction.module.css'

function CallToAction() {
  return (
    <div className={style.actionContainer}>
      <Instagram/>
      <SubForm/>
    </div>
  )
}

export default CallToAction