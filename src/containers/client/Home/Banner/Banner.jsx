import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.scss'
export default class Banner extends Component {
    render() {
        return (
            <div>
                <Carousel autoPlay infiniteLoop emulateTouch>
                    <div>
                        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design-1180x664.jpg" />
                    </div>
                    <div>
                        <img src="https://cdn.dribbble.com/users/2474148/screenshots/6909295/thimnail.png" />
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/originals/9e/42/e0/9e42e09a0fb02a3e4a969ce224255ca6.jpg" />
                    </div>
                </Carousel>
            </div>
        )
    }
}
