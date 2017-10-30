import React from 'react'; 
import { shallow } from 'enzyme'; 
import Planet from './Planet'; 

describe('<Planet />', () => {
    it('renders without crashing', () => {
        shallow(<Planet />); 
    }); 
}); 