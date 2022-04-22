import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Newstv() {
  
  const defaultDelay = 1000;

  const [startedCount, setStartedCount] = useState(0);
  const [finishedCount, setFinishedCount] = useState(0);
  const [pokemon, setPokemon] = useState("");
  const [delay, setDelay] = useState(defaultDelay);

  usePolling(async () => {
    setStartedCount((count) => count + 1);
    var controller = new AbortController();
    var signal = controller.signal;

    await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${startedCount}`,
      { signal }
    )
      .then((res) => res.json())
      .then((result) => {
        setPokemon(result.results[0].name);
        console.log(`Pokemon ${startedCount} : ${result.results[0].name}`);
      })
      .catch(function (e) {
        console.log("API error: " + e.message);
      });
    setFinishedCount((count) => count + 1);
  }, delay);

  const onStart = () => {
    setDelay(defaultDelay);
  };

  const onStop = () => {
    setDelay(null);
  };

  const onReset = async () => {
    setStartedCount(0);
    setFinishedCount(0);
  };
  function usePolling(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      let running = false;
      let savedTimeout = null;
  
      const tick = async () => {
        if (running) {
          await savedCallback.current();
        }
  
        if (running) {
          savedTimeout = setTimeout(tick, delay);
        }
      };
  
      const stop = () => {
        running = false;
        const timeout = savedTimeout;
  
        if (timeout !== null) {
          clearTimeout(timeout);
        }
      };
  
      if (delay !== null) {
        running = true;
        savedTimeout = setTimeout(tick, delay);
        return stop;
      }
    }, [delay]);
  }







  return (
    <div className='container'>
      <div className='d-flex'>
        <aside className='bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2'>
          Leftbar
        </aside>

        <div className='newschannel'>
            <div class='ratio ratio-16x9'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6WqS-WvleV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='footernews'>
                    <h5>BJP: {startedCount}%</h5>
                    <h5>TMS: {finishedCount}%</h5>
                    <h5>API Response</h5>
                    <div className="pokemonCard">
                      All Result {startedCount} : {pokemon}
                    </div>
                    <button className="startBtn" disabled={delay == null} onClick={onStop}>
                      Stop
                    </button>
                    <button className="stopBtn" disabled={delay != null} onClick={onStart}>
                      Start
                    </button>
                    <button className="resetBtn" disabled={delay != null} onClick={onReset}>
                      Reset
                    </button>
            </div>
        </div>

        

        </div>
    </div>
  )
}
export default Newstv;

