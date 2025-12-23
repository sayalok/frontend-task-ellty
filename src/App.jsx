import PageSelectorModal from "./components/PageSelectorModal";

export default function App() {
	return (
		<>
			<main className="container">
				<PageSelectorModal totalPages={9} />
			</main>

		</>
	);
}
