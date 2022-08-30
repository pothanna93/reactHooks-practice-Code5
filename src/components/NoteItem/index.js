import {ListItem, Title, Notes} from './styledComponents'

const NoteItem = props => {
  const {eachNotes} = props
  const {title, note} = eachNotes

  return (
    <ListItem>
      <Title>{title}</Title>
      <Notes>{note}</Notes>
    </ListItem>
  )
}

export default NoteItem
