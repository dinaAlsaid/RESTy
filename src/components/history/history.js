import React from 'react';
// import { If, Then } from 'react-if';


function clickHandler(e){
  let x= e.target;
  let method= x.parentElement.firstChild.innerHTML
  let url = x.parentElement.lastChild.innerHTML

  document.getElementById('url').value = url;
  document.getElementById(`${method}`).click()
  console.log(method);
}
function History() {

  let arr
  if(JSON.parse(localStorage.getItem('history'))){
    arr=JSON.parse(localStorage.getItem('history'));
  }else{
    arr=[{method: 'no History'}]
  }
  return (
  <ul>
    {arr.map((query) => <li key={query} onClick={clickHandler}>
      <span>{query.method}</span> 
      <span>{query.url}</span>
      </li>)}
  </ul>
  )

}
export default History;

