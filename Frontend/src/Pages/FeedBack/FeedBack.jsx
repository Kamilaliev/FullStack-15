import React from 'react'
import { FaStar } from "react-icons/fa6";
import "./FeedBack.css"

function FeedBack() {
  return (
    <div className="feedbacks">
        <div className="feed-back">
            <img src="https://rivon-demo.myshopify.com/cdn/shop/files/avator-test-2.png?v=1733907245&width=120" alt="" />
            <h5>Smart Home Assistant</h5>
            <ul>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
            </ul>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Dolor ea praesentium itaque modi rerum, doloribus similique illo cupiditate  <br />est pariatur amet delectus porro. Voluptatem quaerat delectus impedit adipisci possimus!</p>
            <p>Michale.L</p>
            <span>London, UK</span>
        </div>
        <div className="feed-back">
            <img src="https://rivon-demo.myshopify.com/cdn/shop/files/avator-test-4.png?v=1733907264&width=120" alt="" />
            <h5>Smart Home Assistant</h5>
            <ul>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
                <li><FaStar /></li>
            </ul>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Dolor ea praesentium itaque modi rerum, doloribus similique illo cupiditate  <br />est pariatur amet delectus porro. Voluptatem quaerat delectus impedit adipisci possimus!</p>
            <p>Michale.L</p>
            <span>London, UK</span>
        </div>
    </div>
  )
}

export default FeedBack