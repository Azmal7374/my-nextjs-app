"use client"
const ErrorPage = ({error, reset}) => {
    // console.log(error)
    return (
        <div>
            <h1 className="text-center text-4xl text-red-500">Something went wrong</h1>
            <h1 className="text-center text-4xl text-red-500 mt-5">{error.message}</h1>
            <button onClick={()=>reset()}>Try again</button>
        </div>
    );
};

export default ErrorPage;