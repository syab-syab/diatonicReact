import React from 'react'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const KeySelect = (props: Props) => {
  return (
    <>
      <select className="choose-key" value={props.value} onChange={props.onChange}>
        <option value="3">C</option>
        <option value="4">D♭</option>
        <option value="5">D</option>
        <option value="6">E♭</option>
        <option value="7">E</option>
        <option value="8">F</option>
        <option value="9">F#</option>
        <option value="10">G</option>
        <option value="11">A♭</option>
        <option value="0">A</option>
        <option value="1">B♭</option>
        <option value="2">B</option>
      </select>
    </>
  )
}

export default KeySelect