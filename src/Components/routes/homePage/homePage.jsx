import './homePage.scss'
import bg from '../../../assets/bg.png'
import Searchbar from '../../Searchbar/Searchbar'

function HomePage(){
    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1 className='title'>Find Real Estate 
                        & Get Your DREAM Place
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur
                         adipisicing elit. Veniam, voluptates 
                         accusamus consequuntur fuga eaque tenetur 
                         eveniet dolores sit unde 
                         excepturi aperiam nemo vero quo corporis 
                        explicabo velit inventore beatae libero!
                    </p>
                    <Searchbar />
                    <div className='boxes'>
                        <div className='box'>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className='box'>
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className='box'>
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgContainer'>
                <img src={bg} alt='' />
            </div>

        </div>
    )
}

export default HomePage