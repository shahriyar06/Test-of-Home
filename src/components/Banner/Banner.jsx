
const Banner = () => {
    return (
        <div className="lg:w-10/12 lg:mx-auto mt-14 mx-3">
            <div className="hero min-h-screen rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/MP7Xqhq/studio-portrait-cook-man-with-fresh-vegetables-table.jpg)'}}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:w-4/6 w-5/6">
                        <h1 className="lg:text-6xl text-3xl font-bold text-[#FFFFFF]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="my-8 text-[#FFFFFF]"> A culinary treasure trove brimming with diverse recipes, expert tutorials, cooking hacks, community forums, and everything you need to master the art of cooking.</p>
                        <button className="btn rounded-full bg-[#0BE58A] border-[#0BE58A] lg:text-xl text-black lg:mr-7 mr-3">Explore Now</button>
                        <button className="btn rounded-full bg-transparent text-[#FFFFFF] lg:text-xl">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;