import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const data = "When \\(a \\ne 0\\), there exists two solutions for\\(ax^2 + bx + c = 0\\) as \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]";
  
  const [latex, setLatex] = useState("");
  
  // rerender dom every time new hydrated math input state is given
  useEffect(()=>{
    if(typeof window?.MathJax !== "undefined"){
      window.MathJax.typesetClear()
      window.MathJax.typeset()
    }
  }, [latex]);

  return (
    <>
      <h1>Hello math</h1>
      <div>
      <p>Some mathjax rendered content</p>

      <p>
        {data}
      </p>
      </div>

      <div>
        Enter some latex

        <input onChange={(e)=> {
        setLatex(e.target.value) }}/>
      
      <h2>The rendered math from input</h2>
      <p>{latex}</p>
      </div>
    </>
  )
}

export default App
