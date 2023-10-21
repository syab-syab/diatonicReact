import React, { useState } from 'react';
import { Header } from './Header';
import 'normalize.css/normalize.css';
import './App.css';

function App() {

  // 選択されているキー
  const [key, setKey] = useState<string>("3")

  // #
  let $keyIndexSharp: Array<string> = ['A', 'A#', 'B','C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',]
  // ♭
  let $keyIndexFlat: Array<string> = ['A', 'B♭', 'B','C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭',]



  // 選択されたキーが最初になるよう並び替える関数
  const rearrangeKey = (arr: Array<string>, index: string): Array<string> =>  {
    let arrKey = arr.concat();
    let splicesKey = arrKey.splice(0, parseInt(index));
    let concatsKey = arrKey.concat(splicesKey);
    let rearrangeArr = [];
    rearrangeArr.push(concatsKey[0] + "△7");
    rearrangeArr.push(concatsKey[2] + "m7");
    rearrangeArr.push(concatsKey[4] + "m7");
    rearrangeArr.push(concatsKey[5] + "△7");
    rearrangeArr.push(concatsKey[7] + "7");
    rearrangeArr.push(concatsKey[9] + "m7");
    rearrangeArr.push(concatsKey[11] + "m7(♭5)");
    return rearrangeArr;
  }

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

   // const originChords: Array<string> = ["Ⅰ△7", "Ⅱm7", "Ⅲm7", "Ⅳ△7", "Ⅴ7", "Ⅵm7", "Ⅶm7(♭5)"]

  const originChords: Array<string> = decideDiatonic(key)

  const changeKey = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setKey(e.target.value)
  }

  return (
    <div className="App">
      <Header />
      {key}
      <main className="container">
      <div className="key-select">
        <label htmlFor="choose-key">キー選択</label>
        <select id='choose-key' className="choose-key" value={key} onChange={changeKey}>
          <option value="0">A</option>
          <option value="1">B♭</option>
          <option value="2">B</option>
          <option value="3">C</option>
          <option value="4">D♭</option>
          <option value="5">D</option>
          <option value="6">E♭</option>
          <option value="7">E</option>
          <option value="8">F</option>
          <option value="9">F#</option>
          <option value="10">G</option>
          <option value="11">A♭</option>
        </select>
      </div>
      <div id="display-space" className="display-space">
        <div className="container-cell">
          {
            originChords.map(c => {
              return (
                <div key={c} className="cell-block">{c}</div>
              )
            })
          }
        </div>
        <div className="container-cell">
          <div className="cell-block cell-heading">Ⅰ△7</div>
          <div className="cell-block cell-heading">Ⅱm7</div>
          <div className="cell-block cell-heading">Ⅲm7</div>
          <div className="cell-block cell-heading">Ⅳ△7</div>
          <div className="cell-block cell-heading">Ⅴ7</div>
          <div className="cell-block cell-heading">Ⅵm7</div>
          <div className="cell-block cell-heading">Ⅶm7(♭5)</div>
        </div>
        
      </div>
    </main>
    <footer className="footer">
      {/* <div className="twitter-share-btn">
        <a href="http://twitter.com/share?url=https://syab-syab.github.io/diatonicChord/&text=ダイアトニックコードのカンペ" target="_blank">
          <i className="fa-brands fa-twitter"></i><span>Twitter</span>
        </a>
      </div> */}
      <span className="copy">
        © ダイアトニックコードのカンペ
      </span>
    </footer>
    </div>
  );
}

export default App;
