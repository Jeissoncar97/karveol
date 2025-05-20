import React, { useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const customStyles = {

	control: (base, state) => ({
		...base,
		backgroundColor: '#0f0015',
		borderColor: state.isFocused ? '#3B82F6' : '#343e50', // azul o gris
		borderWidth: '1px',
		'&:hover': {
			borderColor: 'none',
		},
		padding: '0.5rem',
		borderRadius: '999px', // rounded-lg
		fontSize: '0.875rem', // text-sm
		boxShadow: 'none',
		cursor: 'text',
	}),
	menu: (base) => ({
		...base,
		borderRadius: '999px',
		marginTop: '0.25rem',
		boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
		zIndex: 10,
		backgroundColor: '#0f0015',
	}),
	option: (base, { isFocused, isSelected }) => ({
		...base,
		backgroundColor: isSelected ? '#1f2937' : isFocused ? '#0f0050' : '#0f0015',
		color: isSelected ? 'none' : '#99a1af',
		padding: '0.5rem 1rem',
		fontSize: '0.875rem',
	}),
	singleValue: (base) => ({
		...base,
		color: 'white',
	}),
	placeholder: (base) => ({
		...base,
		color: '#99a1af',
		cursor: 'pointer',
		fontSize: '1rem',
	}),
	input: (base) => ({
		...base,
		color: '#343e50',
		fontSize: '1rem',
	}),
	indicatorSeparator: (base) => ({
		...base,
		display: 'none',
	}),
	dropdownIndicator: (base) => ({
		...base,
		color: '#99a1af',
		'&:hover': {
			color: '#343e50',
		},
		cursor: 'pointer',
	}),
	indicatorsContainer: (base) => ({
		...base,
	}),
};

const CountrySelector = ({value, onChange}) => {

	const options = useMemo(() => countryList().getData(), []);

	

	return (
		<div className="">
			<label>País</label>
			<Select
				required
				options={options}
				value={value}
				onChange={onChange}
				placeholder="Selecciona un país"
				styles={customStyles}
				
			/>
		</div>
	);
};

export default CountrySelector;
