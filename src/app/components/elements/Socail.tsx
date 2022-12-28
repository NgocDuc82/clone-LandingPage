import React from 'react'
import { SnsStype } from 'app/components/modules/Footer';

const Socail:React.FC<SnsStype> = (sns):React.ReactElement =>  {
  return (
    <img alt='' src={sns.name} />
  )
}

export default Socail
