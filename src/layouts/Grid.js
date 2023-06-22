import './Grid.css';

export const Grid = ({ bgColor, gap, children }) => {
	console.log(bgColor, gap, 'bgColor, gap');
	const style = {
		...(bgColor ? { '--background-color': bgColor } : {}),
		...(gap ? { '--gap': gap } : {}),
	};
	return (
		<div className="Grid" style={style}>
			{children}
		</div>
	);
};
