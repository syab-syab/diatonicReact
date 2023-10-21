import React, { useState } from 'react';
import { Header } from './components/Header';
import Footer from './components/Footer';
import CellBlock from './components/CellBlock';
import KeySelect from './components/KeySelect';
import rearrangeKey from './functions/rearrangeKey';
// import 'normalize.css/normalize.css';
import './App.css';

function App() {

  const localKey = (): string => {
    const tmp = localStorage.getItem("local-diatonic-key")
    if (!tmp) {
      return "3"
    } else {
      return tmp
    }
  }

  // 選択されているキー
  const [key, setKey] = useState<string>(localKey)

  // #
  let $keyIndexSharp: Array<string> = ['A', 'A#', 'B','C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',]
  // ♭
  let $keyIndexFlat: Array<string> = ['A', 'B♭', 'B','C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭',]

  // キーが#
  const  majorSort = () => {
    let mjDia = rearrangeKey($keyIndexSharp, key)
    return mjDia
  }

  // キーが♭
  const minorSort = () => {
    let mnDia = rearrangeKey($keyIndexFlat, key)
    return mnDia
  }

  // フラットはキーが F, B♭, E♭, A♭, D♭
  // value が 8, 1, 6, 11, 4
  const decideDiatonic = (value: string): Array<string> => {
    switch (value) {
      case "8":
      case "1":
      case "6":
      case "11":
      case "4":
        return minorSort()
      default:
        return majorSort()
    }
  }

   const indexChords: Array<string> = ["Ⅰ△7", "Ⅱm7", "Ⅲm7", "Ⅳ△7", "Ⅴ7", "Ⅵm7", "Ⅶm7(♭5)"]

  const diatonicChords: Array<string> = decideDiatonic(key)

  const changeKey = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    localStorage.setItem("local-diatonic-key", e.target.value)
    setKey(e.target.value)
  }

  return (
    <div className="App">
      <Header />
      <main className="container">
        <div className="key-select">
          <KeySelect value={key} onChange={changeKey} />
        </div>
        <div id="display-space" className="display-space">
          <div className="container-cell">
            {/* クラス名は cell-block */}
            <CellBlock class='cell-block' diatonic={diatonicChords} />
          </div>
          <div className="container-cell">
            {/* クラス名は cell-block cell-heading */}
            <CellBlock class='cell-block cell-heading' diatonic={indexChords} />
          </div>
        </div>
      </main>
      <Footer class="footer"/>
    </div>
  );
}

export default App;
