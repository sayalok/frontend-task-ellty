import { useEffect, useRef } from "react";

export default function PageItem({
	id,
	label,
	checked,
	indeterminate = false,
	divider = false,
	onChange,
}) {
	const checkboxRef = useRef(null);

	useEffect(() => {
		if (checkboxRef.current) {
			checkboxRef.current.indeterminate = indeterminate;
		}
	}, [indeterminate]);

	return (
		<div className={`page-item ${divider ? "page-item--divider" : ""}`}>
			<label htmlFor={id} className="page-label">
				{label}
			</label>
			<div className="custom-checkbox-wrapper">
				<input
					ref={checkboxRef}
					type="checkbox"
					id={id}
					checked={checked}
					onChange={onChange}
					aria-checked={indeterminate ? "mixed" : checked}
				/>
				<span className="custom-checkbox"></span>
			</div>
		</div>
	);
}
