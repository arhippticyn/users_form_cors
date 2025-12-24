import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../redux/selectors';
import { GetFiles } from '../redux/operation';
import File from './File';


const Files = () => {
    const dispatch = useDispatch()
    const files = useSelector(getFiles)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        dispatch(GetFiles())
        form.reset()
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <button type="submit">Fetch Files</button>
        </form>

        {files.map(file => {
            return <File file={file} />
        })}
    </div>
  )
}

export default Files;