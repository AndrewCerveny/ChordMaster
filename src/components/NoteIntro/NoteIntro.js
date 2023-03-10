import React from "react";
import './NoteIntro.css'; 
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const NoteIntro = ({name, key}) => {
  let nameSort;
  const baseNote = name.split('')
  const baseNoteSharp = name.split('')[1]

  if(baseNoteSharp === '#') {
    nameSort = `${baseNote[0]}sharp`
  }else{
    nameSort = `${baseNote[0]}`
  }

  return(
     <section className="note-intro-display"  >
      <Link className='link'to={`/Root/${nameSort}`}>
        <h2>{name}</h2>
      </Link>
    </section>
  )
  
}
export default NoteIntro;

NoteIntro.propTypes = {
  name:PropTypes.string.isRequired,
  key: PropTypes.number.isRequired
}
