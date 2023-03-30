import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import SearchBook, {saveBook} from './SearchBook';
import History, {historyLoader} from './History';
import Layout from './Layout';
import BookDetails, { BookDetailsLoader } from './BookDetails';
import Home from './Home';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path = "/searchBook" element={<SearchBook />} action={saveBook}/>
        <Route path = "/history" element={<History/>}  loader={historyLoader}/>
        <Route path = "/bookDetails/:isbn" loader={BookDetailsLoader} element={<BookDetails/>}/>
    </Route>
    
  ))
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
