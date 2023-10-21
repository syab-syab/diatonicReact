import React from 'react';
import { Header } from './Header';
import 'normalize.css/normalize.css';
import './App.css';

function App() {
  const originChords: Array<string> = ["Ⅰ△7", "Ⅱm7", "Ⅲm7", "Ⅳ△7", "Ⅴ7", "Ⅵm7", "Ⅶm7(♭5)"]

  return (
    <div className="App">
      <Header />
      <main className="container">
      <div className="key-select">
        <select id="choose-key" className="choose-key">
          <option>キーを選択</option>
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
      </div>
      <div id="display-space" className="display-space">
        <div className="container-cell">
          {
            originChords.map(c => {
              return (
                <div className="cell-block">{c}</div>
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
