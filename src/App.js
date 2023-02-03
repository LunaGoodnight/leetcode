import logo from './logo.svg';
import './App.css';




const accList = [
  {
    title: "Practice",
    childList: [
      {
        title: "Practice Ref",
        path: "/practice-ref",
        // page: PracticeRef,
      },
    ],
  },
  {
    title: "Simple Function",
    childList: [


      { title: "sea", path: "/" },
      { title: "pool", path: "/" },
    ],
  },
];


function App() {

  //#1 -- For loop in Javascript.
  const fish = ['dory', 'bruce', 'marlin', 'nemo'];
  const nemo = ['nemo'];
  const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
  const large = new Array(10).fill('nemo');

  const findNemo2 = (fish) => {
    let t0 = performance.now();
    for (let i = 0; i < fish.length; i++) {
      if (fish[i] === 'nemo') {
        console.log('Found NEMO!');
      }
    }
    let t1 = performance.now();
    console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
  }



  return (
    <div className="App">
      <header className="App-header">
        {findNemo2(large)}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
