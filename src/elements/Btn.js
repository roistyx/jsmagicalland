import { Button } from '@mui/material';
import './Btn.css';
export const Btn = ({ children }) => {
	return (
		<button className="Btn">
			<span>{children}</span>{' '}
		</button>
		// <Button variant="contained" color="primary">
		// 	{' '}
		// 	<span>{children}</span>{' '}
		// </Button>
	);
};
