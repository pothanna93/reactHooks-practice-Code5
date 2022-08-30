import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`
export const Heading = styled.h1`
  font-size: 36px;
  font-family: 'Bree Serif';
  color: #4c63b6;
`
export const NotesEnterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 5px 0px;
  border-radius: 8px;
`
export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const InputEl = styled.input`
  height: 36px;
  margin-bottom: 20px;
  color: #1e293b;
  border: none;
  outline: none;
`
export const TextArea = styled.textarea`
  color: #1e293b;
  border: none;
  outline: none;
`
export const ButtonEl = styled.button`
  width: 60px;
  height: 36px;
  align-self: flex-end;
  background-color: #4c63b6;
  padding: 8px;
  border: none;
  outline: none;
  color: #ffffff;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 6px;
`
export const NotesContainer = styled.ul`
  margin-top: 12px;
  padding-left: 0px;
  list-style-type: none;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
`
export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 80vh;
`
export const NoImg = styled.img`
  width: 160px;
  height: 160px;
`
export const NoHeading = styled.h1`
  font-size: 26px;
  font-family: 'Roboto';
  color: #1e293b;
  margin-top: 20px;
`
export const NoPara = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #1e293b;
`
