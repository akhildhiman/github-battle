import React, { Component } from "react"

class Battle extends Component {
    state = {
        input: ""
    }

    render() {
        return (
            <div className="battle-section">
                <div>
                    <h2>Player One</h2>
                    <input type="text" placeholder="github username" />
                    <button type="submit">Submit</button>
                </div>

                <div>
                    <h2>Player Two</h2>
                    <input type="text" placeholder="github username" />
                    <button type="submit">Submit</button>
                </div>
            </div>
        )
    }
}



export default Battle