 
import React, { Component } from 'react';
import './Testimonios.css';

import Note from './Nota/Nota';
import NoteForm from './FormaDeNota/FormaDeNota';
import  firebaseApp  from '../../../firebaseApp';
import 'firebase/database';

class Testimonios extends Component {

	constructor() {
		super();
		this.state = {
			notes: [
			//	{noteId: 1, noteContent: 'Note 1'},
			//	{noteId: 2, noteContent: 'Note 2'}
			]
		}
		this.addNote = this.addNote.bind(this);
		this.removeNote = this.removeNote.bind(this);

		// db connection
		this.app = firebaseApp;
		//this.db = this.app.database().ref().child('notes');
	}

	//componentDidMount() {
	//	const { notes } = this.state;
	//	this.db.on('child_added', snap => {
	//		notes.push({
	//			noteId: snap.key,
	//			noteContent: snap.val().noteContent
	//		});
//
	//		this.setState({notes});
	//	});
//
	//	this.db.on('child_removed', snap => {
	//		for(let i = 0; i < notes.length; i++) {
	//			if(notes[i].noteId === snap.key) {
	//				notes.splice(i , 1);
	//			}
	//		}
	//		console.log(notes);
	//		this.setState({notes});
	//	});
//
	//}

	addNote(note) {
		/*
		let { notes } = this.state;
		notes.push({
			noteId: notes.length + 1,
			noteContent: note
		});
		this.setState({
			notes
		});
		*/
		//this.db.push().set({noteContent: note});
	}	

	removeNote(noteId) {
		this.db.child(noteId).remove();
	}

	render() {
		return (
			<div className="notesContainer">
			
				<div className="notesHeader">
					<h1>Testimonios</h1>
				</div>

				<div className="notesBody">
					{
						this.state.notes.map(note => {
							return (
								<Note 
									noteContent={note.noteContent} 
									noteId={note.noteId}
									key={note.noteId}
									removeNote={this.removeNote}
								/>)
						})
					}
					
				</div>
				
				<div className="notesFooter">
					<NoteForm addNote={this.addNote}/>
				</div>
			</div>
		);
	}
}

export default Testimonios; 