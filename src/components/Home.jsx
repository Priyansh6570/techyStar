import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
    <div className="home" id='home'>
        <main>
            <h1>TechyStar.</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="graphics" />
        <div className="">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aspernatur blanditiis saepe quasi sit deleniti obcaecati voluptates nostrum incidunt est delectus sunt minima optio deserunt totam facere, quam quis asperiores.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div className="">
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure aperiam, nostrum commodi repellendus, officiis consectetur hic dignissimos vel et explicabo architecto reprehenderit saepe ipsa. Itaque repellat, perferendis totam laboriosam illo error necessitatibus sequi fuga deserunt aspernatur, rerum praesentium hic aliquam quod facere? Eaque magni magnam ullam distinctio! Ut nostrum quas id, sapiente iusto autem veritatis minima quidem eveniet vero commodi repellat maiores accusamus aut recusandae debitis perspiciatis sunt 
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div className="">
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay : "0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{animationDelay : "0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay : "0.7s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay : "1s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home