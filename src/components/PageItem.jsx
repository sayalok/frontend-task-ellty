export default function PageItem({ label, checked, onChange }) {
	return (
		<div className="page-item">
			<span>{label}</span>
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
			/>
		</div>
	);
}
