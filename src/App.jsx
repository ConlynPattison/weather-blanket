import { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState(null);
	const colors = [
		"#0000FF",  // Blue
		"#004DFF",
		"#0099FF",
		"#00E5FF",  // Blue-Green transition happens faster
		"#00FFCC",
		"#00FF99",
		"#00FF66",
		"#00FF33",  // Green
		"#33FF00",
		"#66FF00",
		"#99FF00",
		"#CCFF00",  // Green-Yellow transition happens sooner
		"#FFFF00",  // Yellow
		"#FFCC00",
		"#FF9900",
		"#FF6600",  // Yellow-Red transition
		"#FF3300",
		"#FF1A00",
		"#FF0D00",
		"#FF0000"   // Red
	]

	const fetchJSON = async () => {
		const data = await fetch("data.json");
		const jsonData = await data.json();
		console.log(jsonData)
		return jsonData;
	}

	const setBackgroundColor = (tempArg) => {
		const tempArgF = (Number(tempArg) * (9.0 / 5.0)) + 32.0
		const index = Math.floor((tempArgF - 20.0) / 5.0)
		return colors[index]
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
						data.days.map((day) => {
							return <div key={day.datetime} style={{ backgroundColor: setBackgroundColor(day.tempmax) }}>{`${day.datetime} ${day.tempmax}`}</div>
						}) :
						""
				}
			</div>
		</>
	)
}

export default App
