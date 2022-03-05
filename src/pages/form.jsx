import React from 'react'

function Form(props) {
  // const classes = useStyles();
  const { children, onSubmit } = props
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form
