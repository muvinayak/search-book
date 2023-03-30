import { useParams, useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const bookInfo = useLoaderData();
    const {isbn} = useParams();
    const bookDetails = bookInfo["ISBN:"+isbn];
    console.log(bookDetails);

    return (
        <div>
            {!bookDetails && <div>No data found for provided ISBN: {isbn}</div>}
            {bookDetails && <div>
                <h1>Book Details for ISBN: {isbn}</h1>
                <div>Title: {bookDetails.title}</div>
                <div>Subtitle: {bookDetails.subtitle}</div>
                <div>Url: {bookDetails.url}</div>
                <div>Authors: {bookDetails.authors.map(author => author.name).toString()}</div>
            </div> }
        </div>
    );
}

export const BookDetailsLoader = async ({params}) => {
    const isbn = params.isbn;
    return fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
}
 
export default BookDetails;