import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products=[
    {name:'photoshop', price:'$90.99'},
    {name:'illestoter', price:'$50.30'},
    {name:'psdphoto', price:'$40.10'},
]
const naoyks =['pavel','mahbub','hasan','rony','hero','mahbubhasan']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Product Name={Product[0]}></Product>
        <ul>
          {naoyks.map(nayk => <li>{nayk}</li>)}
          {products.map(pro => <Product>{pro}</Product>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>   
        <State></State>    
        <Users></Users> 
      </header>
    </div>
  );
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return(
    <div style={productStyle}>
      <h3>{props.Name}</h3>
      <p>{props.Price}</p>
      <button>Buy now</button>
    </div>
  )
}
function State() {
  const [count,setCount] = useState(0);
  function incrice() {
     const newCount = count + 1;
     setCount(newCount);
  }
  function decrise() {
    const delCount = count -1;
    setCount(delCount)
  }
  return(
    <div>
        <h1>Counter :{count}</h1>
        <button onClick={incrice}>add</button>
        <button onClick={decrise}>del</button>
    </div>
    
  )
}
function Users(){
  const [user , setUser]=useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => setUser(data))
  },[])
  return(
    <div>
      <h1>User Count : </h1>
      <ul>
        {user.map(datai => <li>{datai.title}</li>)}
      </ul>
    </div>

  )
}



export default App;
