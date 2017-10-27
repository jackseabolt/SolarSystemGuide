import React from 'react'; 
import { connect } from 'react-redux'; 
import { getPlanets } from './actions'; 
import './ResultsSection.css'; 

export class ResultsSection extends React.Component {

    render() {

        const planetList = this.props.planets.map(planet => (
            <div key={planet._id} className="planet-article">
                <img src={planet.thumbnail} className="planet-image" alt="Planet Image" />
                <h2>{planet.name}</h2>
                <p>{planet.description}</p>
                <p><strong>Composition:</strong><i> {planet.composition}</i></p>
            </div>
        ));  

        return (
            <section role="region">
                { planetList }
            </section>
        )
    }
}

const mapStateToProps = state => ({
    planets: state.planets
})

export default connect(mapStateToProps)(ResultsSection); 