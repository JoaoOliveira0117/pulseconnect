const error = (err) => {
  const errors = Array.isArray(err.errors) && err.errors.map(( { msg } ) => msg)
  return {
    errors: {
      msg: errors || [err.message] || [err]
    }
  }
}

export default error