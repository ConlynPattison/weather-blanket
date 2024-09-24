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
	];

	const colorsGabi = [
		"#c2c8b3", // 
		"#718c8c", // 
		"#065557", // 
		"#995a2a", // 
		"#18394b", // 
		"#643a34", // 
		"#231610", // 
	];

	const fetchJSON = async () => {
		const data = await fetch("data.json");
		const jsonData = await data.json();
		console.log(jsonData)
		return jsonData;
	}

	const cToF = (tempC) => (Number(tempC) * (9.0 / 5.0)) + 32.0

	const setBackgroundColor = (tempArg) => {
		const tempArgF = cToF(tempArg)
		if (tempArgF >= 71.0) return colorsGabi[6]
		if (tempArgF >= 66.0) return colorsGabi[5]
		if (tempArgF >= 61.0) return colorsGabi[4]
		if (tempArgF >= 56.0) return colorsGabi[3]
		if (tempArgF >= 50.0) return colorsGabi[2]
		if (tempArgF >= 40.0) return colorsGabi[1]
		return colorsGabi[0]

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
							return <div key={day.datetime} style={{ backgroundColor: setBackgroundColor(day.tempmax) }}>{`${day.datetime} ${cToF(day.tempmax).toPrecision(3)}`}</div>
						}) :
						""
				}
			</div>
		</>
	)
}

export default App
