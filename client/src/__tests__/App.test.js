import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import { shallow, mount } from 'enzyme';
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

//test written for sign up button, and sign up modal
    it("Expects to find button HTML element with className test in the DOM", () => {
        const wrapper = shallow(<Welcome className="Sign-Up" text="test"/>)
        expect(wrapper.find('button.Sign-Up'));
    });


    it('renders text input with label (default type)', () => {
        const wrapper = mount(<Welcome name="email" label="Email" />);
        const label = wrapper.find('label');
        expect(label).toHaveLength(1);
        expect(label.prop('htmlFor')).toEqual('email');
        expect(label.text()).toEqual('Email');
        const input = wrapper.find('input');
        expect(input).toHaveLength(1);
        expect(input.prop('type')).toEqual('text');
        expect(input.prop('name')).toEqual('email');
        expect(input.prop('id')).toEqual('email');
      });




    //test written for login button, and login modal
       it("Expects to find button HTML element with className test in the DOM", () => {
        const wrapper = shallow(<Welcome className="Login" text="test"/>)
        expect(wrapper.find('button.Login'));
    });

      it('renders email input with label given the type', () => {
        const wrapper = mount(<Welcome type="email" name="email" label="Email" />);
        const label = wrapper.find('label');
        expect(label).toHaveLength(1);
        expect(label.prop('htmlFor')).toEqual('email');
        expect(label.text()).toEqual('Email');
        const input = wrapper.find('input');
        expect(input).toHaveLength(1);
        expect(input.prop('type')).toEqual('email');
        expect(input.prop('name')).toEqual('email');
        expect(input.prop('id')).toEqual('email');
      });