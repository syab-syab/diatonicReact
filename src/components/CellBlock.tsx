import React from 'react'

type Props = {
  class: string
  diatonic: Array<string>
}

const CellBlock = (props: Props) => {
  return (
    <>
      {
        props.diatonic.map(c => {
          return (
            <div className={props.class}>{c}</div>
          )
        })
      }
    </>
  )
}

export default CellBlock