import { useEffect, useRef } from "react";

export default function PageItem({
	id,
	label,
	checked,
	indeterminate = false,
	onChange,
}) {
	const checkboxRef = useRef(null);

	useEffect(() => {
		if (checkboxRef.current) {
			checkboxRef.current.indeterminate = indeterminate;
		}
	}, [indeterminate]);

	return (
		<div className="page-item">
			<label htmlFor={id} className="page-label">
				{label}
			</label>
			<input
				ref={checkboxRef}
				id={id}
				type="checkbox"
				checked={checked}
				onChange={onChange}
				aria-checked={
					indeterminate ? "mixed" : checked
				}
			/>
		</div>
	);
}
