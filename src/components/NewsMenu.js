import "../style/menu.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsMenu = ({ data, onClick, id }) => {

    const selectedGames = [
        'gta-5',
        'wukong',
        'rdr-2',
        'flight-simulator',
        'asphalt-8',
        'farming-simulator-22',
        'dota-2',
        'outlast',
        'hogwarts-legacy'
    ]



    const filterGames = data.filter((games) => selectedGames.includes(games.id))

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
<div className="w-3/4 m-auto">
    <Slider {...settings} className="">
        {filterGames.map((x) => (
            <div className="x-card h-[350px] text-white rounded-xl relative" id={x.id} onClick={() => onClick(x.id)}>
                <div className="flex justify-center align-center">
                    <img src={x.img} alt="" className="w-full h-[350px]" />
                </div>
                <div className="x-card-harga absolute bottom-2 right-2 bg-opacity-50 px-1 py-1 rounded 
                    hover:bg-opacity-80 hover:bg-gray-800 transition-all duration-300">
                    <span className="text-white text-lg 
                        hover:text-white">
                        Rp {x.harga}
                    </span>
                </div>
            </div>
        ))}
    </Slider>
</div>

    )
}

export default NewsMenu