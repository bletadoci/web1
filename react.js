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

//for classes inside of react tag: className, while you can also call js functions
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