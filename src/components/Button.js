import React from 'react'

function Button(props) {
  return (
    <div><Button  variant="primary" className={props.clasname} >
    {props.value}
  </Button></div>
  )
}

export default Button