import React from 'react'; 
import { connect } from 'react-redux'; 
import { findPlanet } from './actions'; 
import './SearchForm.css'; 

export class SearchForm extends React.Component {

    handleFormSubmit(e) {
        e.preventDefault(); 
        let userInput = this.input.value; 
        this.props.dispatch(findPlanet(userInput))
        console.log(userInput)

    }

    render() {

        return (
            <section role="region">
                <form onSubmit={e => this.handleFormSubmit(e)}>
                    <select ref={input => this.input = input }>
                        <option value="Mercury">Mercury</option>
                        <option value="Venus">Venus</option>
                        <option value="Earth">Earth</option>
                        <option value="Mars">Mars</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturn">Saturn</option>
                        <option value="Uranus">Uranus</option>
                        <option value="Neptune">Neptune</option>
                    </select>
                    <button className="button">Search</button>
                </form>
            </section>
        ); 
    }
}

export const mapStateToProps = state => ({
    planets: state.planets
}); 

export default connect(mapStateToProps)(SearchForm); 