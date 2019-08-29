import React from 'react';
import { useResources } from './useResources';

// The useEffect hook essentially combines the componentDidMount and componentDidUpdate lifecycle methods

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return(
    <ul>
      {resources.map(record => <li key={record.id}>{record.title}</li>)}
    </ul>
  );
}

export default ResourceList;