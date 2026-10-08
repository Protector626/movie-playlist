import Dorry from './assets/Dorry.jpg'; 
import Lord from './assets/Lord.jpg'; 
import Harry from './assets/Harry.jpg'; 
import './style.css';

function App() {
  return (
    <section>
      <h1 id='title'>Schedule</h1>
      <p id='question'>What's on Today?</p>


      <article>
      <div className="movie">
        <h1>Finding Dorry</h1>
        <img src={Dorry} />
        <p>A Movie about finding a Blue fish</p>
        <small>Showing at 1:00 PM</small>
      </div>
      <div className="movie">
        <h1>Lord of the Rings</h1>
        <img src={Lord} />
        <p>A Movie about a magical ring and the journey to destroy it</p>
        <small>Showing at 3:00 PM</small>
      </div>
      <div className="movie">
        <h1>Harry Potter</h1>
        <img src={Harry} />
        <p>A Movie about a young wizard and his adventures at Hogwarts</p>
        <small>Showing at 5:00 PM</small>
      </div>
      </article>


      <h1 id='squareBlocks'>Square Blocks</h1>
      <article>
      <div className="movieName">
        <h1>Finding Dorry</h1>
        <p>A Movie about finding a Blue fish</p>
        <small>Showing at 1:00 PM</small>
      </div>
      <div className="movieName">
        <h1>Lord of the Rings</h1>
        <p>A Movie about a magical ring and the journey to destroy it</p>
        <small>Showing at 3:00 PM</small>
      </div>
      <div className="movieName">
        <h1>Harry Potter</h1>
        <p>A Movie about a young wizard and his adventures at Hogwarts</p>
        <small>Showing at 5:00 PM</small>
      </div>
      </article>








    </section>
  )
}

export default App
