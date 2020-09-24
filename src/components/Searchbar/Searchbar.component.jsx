import React, { useState, useContext } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import VideosContext from '../../utils/state/VideosContext';

const Searchbar = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const { setSearchQuery } = useContext(VideosContext);

  const setVideoQuery = () => {
    setSearchQuery(search);
    history.push('/search');
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);
  };

  return (
    <Form inline>
      <FormControl
        onChange={handleSearchChange}
        type="text"
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button onClick={setVideoQuery} variant="outline-info">
        Search
      </Button>
    </Form>
  );
};

export default Searchbar;
