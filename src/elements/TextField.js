import '../elements/TextField.css';
import React from 'react';
import { Btn } from '../elements/Btn.js';
import { TextField } from '@mui/material';

const SearchField = () => {
	return (
		<div>
			<form class="text-field">
				<label for="name">Name</label>
				<input type="text" id="name" name="name" />
				<Btn>Button</Btn>
			</form>
		</div>
	);
};

export default SearchField;
