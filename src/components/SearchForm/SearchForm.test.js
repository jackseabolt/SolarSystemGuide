import React from 'react'; 
import { SearchForm } from './SearchForm';  
import { shallow } from 'enzyme'; 

describe('<SearchForm />', ()=> {
    it('Renders wihout crashing', () => {
        shallow(<SearchForm />)
    })
}); 