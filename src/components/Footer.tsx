import React from 'react'

type Props = {
  class: string
}

const Footer = (props: Props) => {
  return (
    <>
    <footer className={props.class}>
      <span className="copy">
        © ダイアトニックコードのカンペ
      </span>
    </footer>
    </>
  )
}

export default Footer