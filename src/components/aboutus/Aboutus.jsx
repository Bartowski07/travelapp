import { Stack, useMediaQuery } from '@mui/material';
import Rating from '@mui/material/Rating';
import "./Aboutus.css";
import Button from '@mui/material/Button';


function Aboutus(){
    const isScreenSmall = useMediaQuery('(max-width: 900px)');

    return(
        <Stack
        className='content'
        direction={isScreenSmall ? 'column' : 'row'}
        spacing={10}
      >
            <div>
                <img style={{borderRadius:"25px", width:"100%"}} className='aboutusImage' src='https://e1.pxfuel.com/desktop-wallpaper/266/652/desktop-wallpaper-travel-life-cartoon-travel.jpg' />
                <div className='review'>
                    <div className='user'>
                    <img width={"75px"} style={{borderRadius:"55%", overflow:"hidden"}} src='https://www.stockinvestor.com/wp-content/uploads/2018/09/Elon-Musk.jpg' />
                    <h3>Melon Dusk<br/><span className='description'>Traveler</span></h3>

                    </div>
                    
                    
                    <p>"Wow! My recent trip to Hawaii was absolutely phenomenal! I can't praise it enough. From the moment I stepped foot on the breathtaking islands, I was captivated by the natural beauty."</p>    
                    
                    <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                </div>
            </div>
            <div className='Aboutustext'>
                <p className='blue'>Best Recommendations</p>
                <h1>The best tourist spots in the World</h1>
                <p>We highly recommend our exceptional tours, carefully curated to provide you with unforgettable experiences. Our selection comprises the absolute finest tourist attractions, boasting top-notch rankings and rave reviews from countless visitors. By choosing our tours, you gain access to exclusive promotions that will leave you amazed. Take advantage of our incredible offers and enjoy discounts of up to a remarkable 70%! Don't miss out on this incredible opportunity to embark on extraordinary adventures while saving big. Book your tour today and prepare to be amazed!

                </p>
                
                <Button style={{backgroundColor:"orange", margin:"0 20px"}} variant="contained">Find Destinations</Button>
                <Button className='btn btn2' variant="outlined">Watch Videos</Button>
            </div>
        </Stack>
    );

}export default Aboutus