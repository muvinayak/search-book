import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const routerError = useRouteError();
    return (
        <div>
            <div>
                <h1>Something went wrong while processing your request.</h1>
                <p>{routerError.data}</p>
            </div>
        </div>
    );
}
 
export default ErrorPage;