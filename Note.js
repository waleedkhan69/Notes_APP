import fs from "fs"
import chalk from "chalk"



const notesLoad = () => {
 try {
  const dataBuffer = fs.readFileSync("notes.json")
  return JSON.parse(dataBuffer.toString())
 } catch (error) {
  return []
 }
}


const saveNote = (note) => {
 const Datajson = JSON.stringify(note)
 fs.writeFileSync("note.json", Datajson)
}


const addnote = (title, body) => {
 const notes = notesLoad()
 const duplicate = notes.find((note) => note.title === title)
 if (!duplicate) {
  notes.push({ title, body })
  saveNote(notes)
  console.log(chalk.green.inverse("note add!"));
 } else {
  console.log(chalk.red.inverse("add node"));
 }
}

const removenote = (title) => {
 const notes = notesLoad()
 const newnote = notes.filter((note) => note.title !== title)

 if (notes.length > newnote.length) {
  saveNote(newnote)
  console.log(chalk.green.inverse("note remove succssfully"));
 } else {
  console.log(chalk.red.inverse("note not remove"));
 }
}
const ListAllNote = () => {
 const notes = notesLoad()
 console.log(chalk.blue.inverse("yor note"));
 notes.forEach((note) => {
  console.log(note.title);
 })
}

const readNote = (title) => {
 const notes = notesLoad()

 const Rnote = notes.find((note) => note.title === title)

 if (Rnote) {
  console.log(Rnote.title);
  console.log(Rnote.body);
 } else {
  console.log(chalk.red.inverse("folder not found"));

 }
}

export { addnote, readNote, removenote, ListAllNote }