import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const Searchbar = () => {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  );
};

export default Searchbar;
