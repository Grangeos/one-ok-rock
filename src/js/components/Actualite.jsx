import React, { Component } from 'react';
import Live from "../../photo/live.jpg";

class Actualite extends Component {
    render() {
        return (
            <section className="Actualite">
                <div className="boxActualite">
                    <div className="partieImage">
                    </div>
                    <div className="partieTexte">
                        <h2>Live in comming ! </h2>
                        <p>For the moment, One ok Rock are in a Japan Dome Tour, but they gave more live date.</p>
                    </div>
                </div>
            </section>

        );
    }
}

export default Actualite;
