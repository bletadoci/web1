//something that returns markup usually -> html
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton /> {//this is how you call a funct i suppose
      }
    </div>
  );
} /*export (accessible in other files/can be exported)
, default (if this file is imported in another file that's not asking for anything, then
give them this function: default)*/

//for classes inside of react tag: className, while you can also call js functions, kurse id is id
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
//i hate my life

//if you call a function from the inside onClick = {function} //do this while click
//if you call it <p>Hello {function()}</p> //do this while loads
<button onClick={(userId) => handleClick(userId)}>Click</button>

import React from 'react';

const Content = ({test}) => {
  return(
    <main>
      <h3>Here goes the content...</h3>
      <h3>{test}</h3>
    </main>
  );
}

//export default Content;

import React from 'react';
import Content from './Content';

function App() {
  return (
    <div className="App">
      {/* Usage 1 */}
      <Content test="This is my first section" />
      
      <hr />
      
      {/* Usage 2 */}
      <Content test="This is my second section with different text" />
    </div>
  );
}

//export default App;

const Conte = (props) => { 
  // props is the box: { test: "Hello" }
  return <h3>{props.test}</h3>; 
}

const Cont = ({test}) => { 
  // We opened the box and took out 'test'
  // We threw the box away.
  return <h3>{test}</h3>; 
}

//import {useState, useEeffect} from 'react';
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0); //count is what can be set to true or false/zero/number/char/anything, setCount changes this

  // This effect runs every time 'count' changes -> so if count becomes 
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

//in the return html part:
{/* 4. Conditional Rendering: Only shows if showAge is true */}
      {showAge && <p>Mosha: {props.mosha}</p>} //basically first one is an if(true) && -> means render this

      const [userData, setUserData] = useState(null); //munet edhe null, jo veq true false