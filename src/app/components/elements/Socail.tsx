import React from 'react'
import { SnsStype } from 'app/components/modules/footer/contact/Contact';

const Socail:React.FC<SnsStype> = (sns):React.ReactElement =>  {
  return (
    <img alt='' src={sns.name} />
  )
}

export default Socail
