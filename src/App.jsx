import { useEffect, useState } from "react";
import DayEntry from "./components/DayEntry";

function App() {
	const [data, setData] = useState(null);

	const fetchJSON = async () => {
		const data = await fetch("data.json");
		const jsonData = await data.json();
		console.log(jsonData)
		return jsonData;
	}

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchJSON();
			setData(data);
			return () => setData("")
		}
		fetchData();
	}, []);

	return (
		<>
			<h1>Weather Blanket</h1>
			<div>
				{
					data !== null ?
						data.days.map((day) => (
							<DayEntry temp={day.tempmax} datetime={day.datetime} />
						)) :
						""
				}
			</div>
		</>
	)
}

export default App
