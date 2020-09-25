import React, { useState, useContext } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import VideosContext from '../../utils/state/VideosContext';
import './Searchbar.css';

const Searchbar = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const { setSearchQuery } = useContext(VideosContext);

  const setVideoQuery = (e) => {
    e.preventDefault();
    if (!search) return;
    setSearchQuery(search);
    history.push('/search');
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);
  };

  return (
    <Form onSubmit={setVideoQuery} style={{width: '90%', display: 'inline'}}>
      <FormControl
        id={'query-input'}
        onChange={handleSearchChange}
        placeholder="Search"
      />
      <Button id={'search-button'} onClick={setVideoQuery}>
        Search
      </Button>
    </Form>
  );
};

export default Searchbar;
