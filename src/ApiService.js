const apiURL = "https://www.fxempire.com/api/v1/en/markets/eur-usd/chart"

export const Intervals = {
	MIN_1: "MIN_1",
	MIN_5: "MIN_5",
	HOUR_1: "HOUR_1",
	WEEK_1: "WEEK_1"
}

export const getApiData = async interval => {
	try {
		const res = await fetch(`${apiURL}?time=${interval}`)
    const data = await res.json()
    console.log(data)
    const sorted =  data.sort((a,b) => a.date - b.date).map(item => [item.date, item.open, item.high, item.low, item.close])
    return sorted
	} catch (e) {
		throw new Error("api fetch error")
	}
}
