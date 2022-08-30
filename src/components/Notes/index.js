import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  NotesEnterDiv,
  FormElement,
  InputEl,
  TextArea,
  ButtonEl,
  NotesContainer,
  NoNotesContainer,
  NoImg,
  NoHeading,
  NoPara,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNotes = event => {
    setNotes(event.target.value)
  }

  const addNotesClick = event => {
    event.preventDefault()

    const newNotes = {
      id: uuidv4(),
      title,
      note,
    }
    setTitle('')
    setNotes('')

    setNotesList(prevState => [...prevState, newNotes])
  }
  const renderNoNotes = () => (
    <NoNotesContainer>
      <NoImg
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoHeading>No Notes Yet</NoHeading>
      <NoPara>Notes you add will appear here</NoPara>
    </NoNotesContainer>
  )
  const lengthOfNotes = notesList.length > 0
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <NotesEnterDiv>
        <FormElement onSubmit={addNotesClick}>
          <InputEl
            type="text"
            value={title}
            onChange={onChangeTitle}
            placeholder="Title"
          />
          <TextArea
            rows="8"
            value={note}
            onChange={onChangeNotes}
            placeholder="Take a Note..."
          />
          <ButtonEl type="submit">Add</ButtonEl>
        </FormElement>
      </NotesEnterDiv>
      <NotesContainer>
        {lengthOfNotes
          ? notesList.map(eachItem => (
              <NoteItem key={eachItem.id} eachNotes={eachItem} />
            ))
          : renderNoNotes()}
      </NotesContainer>
    </MainContainer>
  )
}
export default Notes
