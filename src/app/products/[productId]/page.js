
const DynamicPage = ({params, searchParams}) => {
    console.log(searchParams)
    return (
        <div>
            <h1 className="text-center text-4xl mt-40">Dynamic Product page {params.productId}</h1>
        </div>
    );
};

export default DynamicPage;