import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{err?.data}</h3>
            <h3>{err?.status}</h3>
            <h3>{err?.statusText}</h3>
            <h4>Here we are using useRouteError to shows the exact information about the error</h4>
        </div>
    )
}

export default Error;