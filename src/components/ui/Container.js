import React from 'react'

function Container({ children,carusel }) {
  return (
    <div className={`${carusel?"md:px-2.5":"px-2.5"} max-w-385 mx-auto h-full`}>{children}</div>
  )
}

export default Container