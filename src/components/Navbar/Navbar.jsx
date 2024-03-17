import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div>
            <div className="navbar lg:w-10/12 lg:mx-auto mt-14 mx-3 justify-between">
                <div className="flex-1">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="lg:text-5xl text-2xl font-bold">Tests OF <span className="text-orange-400">Home</span></a>
                </div>
                <div className="mr-40 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-2 ">
                    <div className="form-control relative">
                        <input type="text" placeholder="    Search" className="input input-bordered rounded-full w-24 md:w-auto" />
                        <CiSearch className="absolute text-xl bottom-3 left-3" />
                    </div>
                    <div>
                        <div className="">
                            <div className="w-10 rounded-full bg-[#0BE58A]">
                                <h1 className="p-2 text-2xl"><CgProfile /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;