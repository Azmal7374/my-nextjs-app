import Link from "next/link";

export const metashoes = {
  title: "Home Page",
  description: "This is the homepage",
};

const HomePage = async () => {
  // console.log("Hello World")

  // const res = await fetch("http://localhost:5000/shoes",{
  //   cache:"no-cache"
  // });

  const res = await fetch("http://localhost:5000/shoes",{
    next: {
      revalidate: 30,
    }
  });

  throw new Error("Error Form Home page");

  const shoes = await res.json();
  return (
    <div className='text-center my-5'>
      <h1 className="text-4xl text-center mt-4">Welcome to nextjs HomePage dfdf</h1>

      <div className="flex gap-4 justify-between p-5">
        {shoes.slice(0,3).map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
            {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
              <button className="btn btn-outline btn-primary">Buy Now</button>
              <button className="btn btn-outline btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/all-shoes">
            <button className="btn btn-outline btn-primary ">See More</button>
            </Link>
    </div>
  );
};

export default HomePage;
