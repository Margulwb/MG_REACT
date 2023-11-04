import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //routes(to switch) routh (ostatni route path='*' i na strone 404) wyświetlanie| component link to 
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
import reportWebVitals from './reportWebVitals';
import { Home } from './components/routes/Home';
import { Blog } from './components/routes/Blog';
import { Photos } from './components/routes/Photos';
import { Profiles } from './components/routes/Profiles';
import { Error404 } from './components/routes/Error404';
import { Todo } from './components/routes/Todo';

const fetchDataFromApi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Errrorrr");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

fetchDataFromApi().then((usersData) => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Photos" element={<Photos />} />
          <Route path="Profile" element={<Profiles users={usersData} />} />
          <Route path="/:idUser/Todo" element={<Todo userId={usersData.userId} id={usersData.id} title={"asd"} completed={true}/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
  reportWebVitals();
});