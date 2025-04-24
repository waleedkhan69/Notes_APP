import yargs from "yargs";
import { ListAllNote, readNote, addnote, removenote, } from "./Note.js";
import { hideBin } from "yargs/helpers";
const cli = yargs(hideBin(process.argv)).version("1.1.0");
import * as notes from "./Note.js"


cli.command({
 command: "add",
 describe: "add New Notes",
 builder: {
  title: {
   describe: "Note litle",
   demandOption: true,
   type: String
  },
  body: {
   describe: "NOte Body",
   demandOption: true,
   type: String
  }
 },

 handler(avrg) {
  notes.addnote(avrg.title, avrg.body)
 }
})


cli.command({
 command: "Remove",
 describe: "Remove Note",
 builder: {
  title: {
   describe: "Note Title",
   demandOption: true,
   type: String
  }
 },
 handler(avrg) {
  notes.removenote(avrg.title)
 }
})

cli.command({
 command: "list",
 describ: "List your notes",
 handler() {
  notes.ListAllNote()
 }
})

cli.command({
 command: "Read",
 describ: "Read Notes",
 builder: {
  title: {
   demandOption: true,
   describe: "Note Title",
   type: String
  }
 },
 handler(avrg) {
  notes.readNote(avrg.title)
 }
})

cli.parse()