import React from 'react'; 
import { connect } from 'react-redux'; 
import './SearchForm.css'; 

export class SearchForm extends React.Component {

    handleFormSubmit(e) {
        e.preventDefault(); 
        let userInput = this.input.value; 
        console.log(userInput)

    }

    render() {

        return (
            <section role="region">
                <form onSubmit={e => this.handleFormSubmit(e)}>
                    <input placeholder="Enter planet name" className="input" ref={input => this.input = input }/>
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