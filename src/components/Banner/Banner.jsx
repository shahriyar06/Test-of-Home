
const Banner = () => {
    return (
        <div className="lg:w-10/12 lg:mx-auto mt-14 mx-3">
            <div className="hero min-h-screen rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/MP7Xqhq/studio-portrait-cook-man-with-fresh-vegetables-table.jpg)'}}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-4/6">
                        <h1 className="text-6xl font-bold text-[#FFFFFF]">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="my-8 text-[#FFFFFF]"> A culinary treasure trove brimming with diverse recipes, expert tutorials, cooking hacks, community forums, and everything you need to master the art of cooking.</p>
                        <button className="btn rounded-full bg-[#0BE58A] border-[#0BE58A] text-xl mr-7 text-black">Explore Now</button>
                        <button className="btn rounded-full bg-transparent text-[#FFFFFF] text-xl">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;