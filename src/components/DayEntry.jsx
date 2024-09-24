const colorsGabi = [
	"#c2c8b3", // 
	"#718c8c", // 
	"#065557", // 
	"#995a2a", // 
	"#18394b", // 
	"#643a34", // 
	"#3e000c",
	"#231610", // 
];

const cToF = (tempC) => (Number(tempC) * (9.0 / 5.0)) + 32.0

const setBackgroundColor = (tempArg) => {
	const tempArgF = cToF(tempArg)
	if (tempArgF >= 75.0) return colorsGabi[7]
	if (tempArgF >= 71.0) return colorsGabi[6]
	if (tempArgF >= 66.0) return colorsGabi[5]
	if (tempArgF >= 61.0) return colorsGabi[4]
	if (tempArgF >= 56.0) return colorsGabi[3]
	if (tempArgF >= 50.0) return colorsGabi[2]
	if (tempArgF >= 40.0) return colorsGabi[1]
	return colorsGabi[0]

}

const DayEntry = ({ datetime, temp }) => {
	return (
		<div
			key={datetime}
			style={{ backgroundColor: setBackgroundColor(temp) }}>
			{`${datetime} ${cToF(temp).toPrecision(3)}`}
		</div>
	);
}

export default DayEntry;