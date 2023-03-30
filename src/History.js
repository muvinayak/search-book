import { Link, useLoaderData } from "react-router-dom";

const History = () => {
    const BooksSearched = useLoaderData();
    return ( 
        <div className="card mx-auto col-10 col-md-8 col-lg-6" style={{width: "18rem", marginTop: "30px"}}>
            <div className="card-header">
                Previously Searched ISBN:
            </div>
            <ul className="list-group list-group-flush">
                {BooksSearched && BooksSearched.map((bookSearched) => {
                    return <li className="list-group-item" key={bookSearched.id}>{bookSearched.isbn}</li>
                })}
            </ul>          
        </div>
     );
}
 
export default History;

export function historyLoader() {
    return fetch('http://localhost:8000/BooksSearched/');
}