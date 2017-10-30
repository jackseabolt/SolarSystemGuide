import React from 'react'; 
import { shallow } from 'enzyme';
import { ResultsSection } from './ResultsSection'; 

describe('<ResultsSection />', () => {
    it('Renders without crashing', () => {
        shallow(<ResultsSection planets={[]}/>); 
    }); 
}); 