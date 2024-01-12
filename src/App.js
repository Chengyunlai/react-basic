import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
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

var user_role = 'vip'

function is_vip(){
  if (user_role  === 'vip')
    return <p>hi is vip</p>
  else
    return <p>hi is normal</p>
}


function handleClick(flag,e){
  console.log(flag,e)
  // 无效，改变不了函数的判断
  user_role = 'not vip'
}

function App() {
  const [state_vip,modify_state_vip] = useState('vip')

  function data_view(){
    if (state_vip  === 'vip')
      return <p>wow is vip</p>
    else
      return <p>no is normal</p>
  }

  function change_data(){
    if (state_vip  === 'vip')
      modify_state_vip('not vip')
    else
      modify_state_vip('vip')
  }

  return (
    <div className="App">
      { flag && "hello"}
      { flag ? "true":"false"}
      <ul>
        {students.map(item =><item key={item.id}>{item.name}<Button></Button></item>)}
      </ul>
      {is_vip()}
      <button onClick={(e)=>{handleClick(flag,e)}}>Click</button>
      {data_view()}
      <button onClick={change_data}>点击我改变值</button>
    </div>
  );
}

export default App;
