import { useState } from "react";
import PageItem from "./PageItem";

export default function PageSelectorModal({ totalPages = 1 }) {
	const pages = Array.from(
		{ length: totalPages },
		(_, i) => `Page ${i + 1}`
	);

	const [selected, setSelected] = useState([]);

	const allSelected = selected.length === pages.length;
	const someSelected =
		selected.length > 0 && !allSelected;

	const toggleAll = () => {
		setSelected(allSelected ? [] : pages);
	};

	const togglePage = (page) => {
		setSelected((prev) =>
			prev.includes(page)
				? prev.filter((p) => p !== page)
				: [...prev, page]
		);
	};

	return (
		<section
			className="modal"
			role="dialog"
			aria-labelledby="page-selector-title"
			aria-modal="true"
		>
			<h2 id="page-selector-title">Select pages</h2>

			{/* All Pages (Indeterminate supported) */}
			<PageItem
				id="select-all"
				label="All pages"
				checked={allSelected}
				indeterminate={someSelected}
				onChange={toggleAll}
			/>

			<div
				className="page-list"
				role="group"
				aria-label="Page selection list"
			>
				{pages.map((page, index) => (
					<PageItem
						key={page}
						id={`page-${index}`}
						label={page}
						checked={selected.includes(page)}
						onChange={() => togglePage(page)}
					/>
				))}
			</div>

			<button
				className="primary-btn"
				aria-label="Confirm selected pages"
			>
				Done
			</button>
		</section>
	);
}
