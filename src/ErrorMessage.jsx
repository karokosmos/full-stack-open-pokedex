import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">So very sorry, an error occured: {error.toString()}</div>
)

export default ErrorMessage
