import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import App from '../App';
import Welcome from '../web_pages/welcome.jsx';
jest.mock('react-dom');



afterEach(cleanup);

describe('Loading HomePage', () => {
    it('renders without crashing', () => {
       shallow(<Welcome />);
     });
 });

//test written for sign up button, not actual sign up modal

    it("Expects to find button HTML element with className test in the DOM", () => {
        const wrapper = shallow(<Welcome className="Sign-Up" text="test"/>)
        expect(wrapper.find('button.Sign-Up')).toHaveLength(1);
    });
       //test written for login button, not actual login modal
       it("Expects to find button HTML element with className test in the DOM", () => {
        const wrapper = shallow(<Welcome className="Login" text="test"/>)
        expect(wrapper.find('button.Login')).toHaveLength(1);
    });