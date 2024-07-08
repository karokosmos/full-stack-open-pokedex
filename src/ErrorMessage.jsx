import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">Sorry, an error occured: {error.toString()}</div>
)

export default ErrorMessage
