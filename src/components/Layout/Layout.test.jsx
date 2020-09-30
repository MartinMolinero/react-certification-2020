import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout.component';

describe('Layout', () => {
  it('renders itself', () => {
    render(<Layout />);
    const main = screen.getByRole('main');
    expect(main.getAttribute('class')).toBe('container');
    expect(main.childElementCount).toBe(0);
  });

  it('renders children of the layout component', () => {
    render(
      <Layout>
        <button type="button">Click me</button>
      </Layout>
    );
    expect(screen.getAllByRole('main').length).toEqual(1);
    expect(screen.getAllByRole('button').length).toEqual(1);
  });
});
