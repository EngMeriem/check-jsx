import './App.css';
import './style.css'
import myImageInSrc from './imageInSrc.webp'

function App() {
  return (
    <div className='App-header'>

      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Meriem AYED</h1>
        <br/>
        <img src={myImageInSrc} alt="Image in SRC folder" style={{ width: "400px", heigth: "225px" }}/>
        <br/>
        <img src="/imageInPublic.webp" alt="image in public folder" style={{ width: "400px", heigth: "225px" }}/>
      </div>

      <video width="320" height="240" controls>
        <source src="/myVideo.mp4" type="video/mp4" />
      </video>

    </div>
  );
}

export default App;
