import React from 'react';
import {shallow} from 'enzyme';
import App from '../js/components/App';

describe('App Component', function () {
  let app;

  beforeEach(() => {
    app = shallow(<App partyPenguin="test"/>);
  });

  test('App component should render', () => {
    expect(app).toHaveClassName('app');
  });
});