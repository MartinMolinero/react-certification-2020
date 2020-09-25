import React, { useState, useContext } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import VideosContext from '../../utils/state/VideosContext';

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
    <Form onSubmit={setVideoQuery}>
      <FormControl
        style={{ width: '60%' }}
        onChange={handleSearchChange}
        placeholder="Search"
      />
      <Button style={{ display: 'inline' }} onClick={setVideoQuery}>
        Search
      </Button>
    </Form>
  );
};

export default Searchbar;
