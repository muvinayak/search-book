import { Form , redirect} from "react-router-dom";

export async function saveBook({request}) {
    let formData = await request.formData();
    let isbn = Object.fromEntries(formData).isbn;
    const postData = {isbn: isbn};
    await fetch('http://localhost:8000/BooksSearched/', {
        method: 'POST',
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(postData)
    }).then(response => response.json());
    return redirect(`/BookDetails/${isbn}`);
}

const SearchBook = () => {
    const formStyle = {
        padding: "20px",
        marginTop: "60px"
    };
    return (
            <div style={formStyle}>
                <div className="mx-auto col-10 col-md-8 col-lg-6">
                    <Form className="row g-3 align-items-center" method="POST">
                        <div className="col-auto">
                            <label className="form-label">Enter the ISBN:</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" name="isbn"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit">Find the book</button>
                        </div>
                    </Form>
                </div>
            </div>
    );
}
 
export default SearchBook;