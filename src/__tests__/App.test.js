import { render, screen , fireEvent} from '@testing-library/react';
import App from '../App.js';

test('renders results object', () => {
  render(<App />);
  let resObjContent = screen.getByText(/Headers/g);
  expect(resObjContent).toBeInTheDocument();
  resObjContent = screen.getByText(/Response/g);
  expect(resObjContent).toBeInTheDocument();
  resObjContent = screen.getByText(/count/g);
  expect(resObjContent).toBeInTheDocument();

});

test('fetches data from api and renders it on page',()=>{
  render(<App/>);
  const inputField = screen.getByTestId('inputField');
  const submitForm = screen.getByTestId('submitForm');

  inputField.textContent='https://swapi.dev/api/people/';
  fireEvent.submit(submitForm);
  expect(screen.getByTestId('output').textContent).toBeDefined();
})