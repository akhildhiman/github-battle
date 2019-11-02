import React from "react"
import { Link } from "react-router-dom"
import "./home.css"

function Home() {
    return (
        <div className="home-page">
            <h1>Github Battle: Battle your friends... and stuff</h1>
            <Link to="/Battle" as="button" className="btn" style={{ textDecoration: "none" }}>Submit</Link>
        </div>
    )
}




export default Home