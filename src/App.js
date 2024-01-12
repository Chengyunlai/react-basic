import logo from './logo.svg';
import './App.css';
const students = [
  {id:1,name:'chengyunlai'},
  {id:2,name:'zhangsan'},
  {id:3,name:'xiaoli'},
]

function Button(){
  return(
    <button>Click</button>
  )
}

const flag = false

const user_role = 'vip'

function is_vip(){
  if (user_role  === 'vip')
    return <p>hi is vip</p>
  else
    return <p>hi is normal</p>
}

function handleClick(){
  console.log(1)
}

function App() {
  return (
    <div className="App">
      { flag && "hello"}
      { flag ? "true":"false"}
      <ul>
        {students.map(item =><item key={item.id}>{item.name}<Button></Button></item>)}
      </ul>
      {is_vip()}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
