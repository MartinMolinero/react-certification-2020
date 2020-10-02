import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Searchbar from './Searchbar.component';
import { VideosProvider } from '../../providers/Videos/videosProvider';

describe('Searchbar', () => {
  it('renders the searchbar component', () => {
    render(<Searchbar />);
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('class')).toBe('form-control');
    expect(input.id).toBe('query-input');
    const button = screen.getByRole('button');
    expect(button.getAttribute('class')).toBe('btn btn-outline-info');
    expect(button.id).toBe('search-button');
  });

  it('writes on the searchbar', async () => {
    render(<Searchbar />);
    const input = screen.getByPlaceholderText('Search');
    await userEvent.type(input, 'hi');
    expect(input.value).toBe('hi');
  });

  it('simulates search click', async () => {
    const searchbar = render(
      <BrowserRouter>
        <VideosProvider>
          <Searchbar />
        </VideosProvider>
      </BrowserRouter>
    );
    const btn = screen.getByRole('button');
    userEvent.click(btn, { button: 0 });
    searchbar.rerender();
    expect(screen.queryAllByRole('button')).toEqual([])
  });
});
