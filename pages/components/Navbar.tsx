import Home from "../Home";

function Navbar() {
    return (
        <div>
            <div className='flex flex-row justify-between p-4 border-b-1 border-b-gray-200' >
                <a href='/'>
                    <div className='flex flex-row items-center gap-2 ps-20'>
                        <img
                            src='favicon.ico'
                            className='h-8 w-8'
                        />
                        <h1 >
                            /book@ai-artist.io
                        </h1>
                    </div>
                </a>
                <div className='flex flex-row gap-10 items-center' >
                    <a href='/Pricing'
                    >
                        Our Pricing
                    </a>
                    <a href='/Treatment'
                    >
                        Treatment
                    </a>
                    <a href='/SignUp'
                    >
                        Signup
                    </a>
                    <a
                        href='/ArtistLogin'
                        className="bg-black text-white py-2 px-5 rounded-full"
                    >
                        Artist Login
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
