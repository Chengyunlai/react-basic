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

function App() {
  return (
    <div className="App">
      {"hello"}
      <ul>
        {students.map(item =><item key={item.id}>{item.name}<Button></Button></item>)}
      </ul>
    </div>
  );
}

export default App;
