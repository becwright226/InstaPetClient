import Carousel from 'flat-carousel';


const images = [
    { src: "https://images.pexels.com/photos/8498838/pexels-photo-8498838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
];

const MyCarousel = (props) => {
    
        return (   
 <div>
    <Carousel>
        {images.map((image, index) => (
            <div
                key={index}
                className="demo-item"
                style={{ backgroundImage: 'url(' + image.src + ')' }}
            />
        ))}
    </Carousel>
    </div>
)
};

export default MyCarousel;