import React from 'react'
import { Vortex } from 'react-loader-spinner'

export default function spinner() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  )
}
