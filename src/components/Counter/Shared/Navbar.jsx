import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link href="/about">About</Link></li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
              <ul className="p-2">
                <li><Link href="/dashboard/admin">Submenu 1</Link></li>
                <li><Link href="/dashboard/user">Submenu 2</Link></li>
              </ul>
            </li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/about">About</Link></li>
          <li>
            <details>
            <summary>  <Link href="/dashboard">Dashboard</Link></summary>
            <ul className="p-2">
              <li><Link href="/dashboard/admin">Admin</Link></li>
              <li><Link href="/dashboard/user">User</Link></li>
            </ul>
            </details>
          </li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/button" className="btn">Button</Link>
      </div>
    </div>
  );
};

export default Navbar;
