import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata"

export default class extends Component {
    render () {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="Contact | Personal Blog"
                    metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
                />
                <Header />
                <div className="contact-container">
                    <div className="contact-section">
                        <h1>Contact</h1>
                        <p>Hi, I’m Walter, a beginner web developer based out of Calgary, Alberta. I write about modern JavaScript and build coding courses that show people how to build real world applications.</p>
                        <p>If you have any comments, ideas, critiques, or you just want to say hi, don’t hesitate to send me an email at waltlutsyk@gmail.com!</p>
                    </div>
                    <div className="contact-section">
                        <h2>Around the Web</h2>
                        <ul>
                            <li><strong>Email</strong>: waltlutsyk@gmail.com</li>
                            <li><strong>GitHub</strong>: <a href="https://github.com/coder-rocket-fuel">Coder Rocket Fuel</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}