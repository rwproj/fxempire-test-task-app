import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "./App.css"
import "react-tabs/style/react-tabs.css"
import Chart from "./Chart"
import { Intervals } from "./ApiService"

export default () => {
	return (
		<Tabs className="tabpanel">
			<TabList>
				<Tab>Min 1</Tab>
				<Tab>Min 5</Tab>
				<Tab>Hour 1</Tab>
				<Tab>Week 1</Tab>
			</TabList>
			<TabPanel>
				<Chart interval={Intervals.MIN_1} />
			</TabPanel>
			<TabPanel>
				<Chart interval={Intervals.MIN_5} />
			</TabPanel>
			<TabPanel>
				<Chart interval={Intervals.HOUR_1} />
			</TabPanel>
			<TabPanel>
				<Chart interval={Intervals.WEEK_1} />
			</TabPanel>
		</Tabs>
	)
}
