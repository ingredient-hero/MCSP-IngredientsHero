import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';
import App from '../App';
import Welcome from '../web_pages/welcome.jsx';
jest.mock('react-dom');



afterEach(cleanup);


it('CheckboxWithLabel changes the text after click', async () => {
    const { getByText } = render(<App/>,);

    const dolphin = await waitForElement(() => getByText(/dolphin/i),)

    expect(dolphin).toBeTruthy();
});



//test written for sign up button, not actual sign up modal
    it('should handle the click event', () => {
        window.alert = jest.fn();
        const output = shallow(
          <Welcome title='mockTitle' url='mockUrl' />
        );
        output.simulate('click');
        expect(window.alert).toHaveBeenCalledWith('did you create a Modal for signing up?');
       });

       //test written for login button, not actual login modal
    it('should handle the click event', () => {
        window.alert = jest.fn();
        const output = shallow(
        <Welcome title='mockTitle' url='mockUrl' />
        );
        output.simulate('click');
        expect(window.alert).toHaveBeenCalledWith('did you create a Modal for logging in?');
    });