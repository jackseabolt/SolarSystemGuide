import React from 'react'; 
import { connect } from 'react-redux'; 
import { getPlanets } from '../../actions'; 
import Planet from '../Planet/Planet'; 


export class ResultsSection extends React.Component {

    render() {

        const planetList = this.props.planets.map(planet => (
            <Planet {...planet} />
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