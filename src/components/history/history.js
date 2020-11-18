import React from 'react';
import { Link } from 'react-router-dom';

function clickHandler(e) {
  let x = e.target;
  let method = x.parentElement.firstChild.innerHTML
  let url = x.parentElement.lastChild.innerHTML

  document.getElementById('url').value = url;
  document.getElementById(`${method}`).click()
  console.log(method);
}
function History() {

  let arr
  if (JSON.parse(localStorage.getItem('history'))) {
    arr = JSON.parse(localStorage.getItem('history'));
  } else {
    arr = [{ method: 'no History' }]
  }
  return (
    <Link
      to={{ pathname: '/', user: { name: 'test', page: 'test1' } }}
    >
      <ul>
        {arr.map((query) => <li key={query} >
          <span>{query.method}</span>
          <span>{query.url}</span>
        </li>)}
      </ul>
          {/* Go To Details */}
    </Link>
  )

}
export default History;

