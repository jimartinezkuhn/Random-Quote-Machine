import "./App.css";
import { useState, useEffect } from 'react';

function App() {
  
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [color, setColor] = useState("#111");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);

    }
    fetchData();
  }, [])

  const proxima_cita = () => {
    const colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    let randColorIndex = Math.floor(Math.random() * colors.length);
    let randIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randIndex]);
    setColor(colors[randColorIndex]);
  }


  return (
    <div className="App" style={{ backgroundColor: color, minHeight: "100vh", color: color }}>
      <div id="quote-box" className="caja-citas">
        <div className="cita">
          <p id="text">{randomQuote.text}</p>
        </div>
        <div className="autor">
          <p id="author">{randomQuote.author}</p>
      </div>
        <div className="botones">
          <a data-toggle="tooltip" title="¡Tweetea esta cita!" 
          href={"https://twitter.com/intent/tweet?&text=" + encodeURIComponent('"' + randomQuote.text + '" ' + randomQuote.author)} 
          id="tweet-quote" target="rel=noreferrer"><i class="fa-brands fa-twitter" style={{ color: color }}></i>
          
          </a>
          <button className="boton-proxima-cita" id="new-quote" style={{ backgroundColor: color }}
           onClick={proxima_cita}
          >Próxima Cita</button>
        </div>
      </div>
    </div>

  );
}

export default App;
