import { useState } from "react";
import PageItem from "./PageItem";

export default function PageSelectorModal() {
	const pages = Array.from({ length: 30 }, (_, i) => `Page ${i + 1}`);
	const [selected, setSelected] = useState([]);

	const allSelected = selected.length === pages.length;

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
		<div className="modal">
			<h2>Select pages</h2>

			<PageItem
				label="All pages"
				checked={allSelected}
				onChange={toggleAll}
			/>

			<div className="page-list">
				{pages.map((page) => (
					<PageItem
						key={page}
						label={page}
						checked={selected.includes(page)}
						onChange={() => togglePage(page)}
					/>
				))}
			</div>

			<button className="primary-btn">Done</button>
		</div>
	);
}
