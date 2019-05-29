import React, { useEffect, useState } from "react"
import Highcharts from "highcharts/highstock"
import HighchartsReact from "highcharts-react-official"
import { getApiData } from "./ApiService"

const instrument = "EUR-USD"

const defaultChartConfig = {
	series: [
		{
			type: "ohlc",
			name: instrument,
			data: null
		}
	]
}
const Chart = ({ interval }) => {
	const [state, setState] = useState({
		config: defaultChartConfig,
		apiFetchError: false
	})
	useEffect(() => {
		let fetchAborted = false
		async function fetchData() {
			let data
			try {
				data = await getApiData(interval)
			} catch (e) {
				if (!fetchAborted) {
					setState(state => ({ ...state, apiFetchError: true }))
				}
			}
			if (!fetchAborted) {
				console.log("updating state")
				setState(state => ({
					...state,
					config: {
						...state.config,
						title: { text: `EUR-USD ${interval}` },
						series: [{ ...defaultChartConfig.series, data }]
					}
				}))
			}
		}
		fetchData()
		return () => {
			fetchAborted = true
		}
	}, [interval])
  const closePopup = () => {
    setState({...state, apiFetchError: false})
  }
	return (
		<div className="chart-container">
			<HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={state.config} />
			{ state.apiFetchError && (
				<div className="chart-error-popup">
					<h1>Sorry, something went wrong</h1>
          <button onClick={closePopup}>X</button>
				</div>
			)}
		</div>
	)
}

export default Chart
