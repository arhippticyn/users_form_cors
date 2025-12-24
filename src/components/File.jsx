import React from 'react';

const File = ({file}) => {
  return (
    <li>
        <img src={`http://127.0.0.1:8000/files/${file.file}`} alt="" />
        <p>{file.file}</p>
        <p>Owner: {file.owner_id}</p>
        <p>Id: {file.id}</p>
    </li>
  )
}

export default File;