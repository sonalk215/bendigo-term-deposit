import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('render the component', () => {
    const { container } = render(<App />);
    expect(container.getElementsByTagName("form").length).toBe(1);
    expect(container.getElementsByTagName("label").length).toBe(4);

  })
})

