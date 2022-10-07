import {useState, useEffect} from 'react'
import * as d3 from 'd3'
import axios from 'axios'


const ScatterPlot = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`https://gist.githubusercontent.com/vivek2606/81207e5bbdcb0abd8a4105cbb4e90920/raw/weather-data.json`)
            setData(res.data)   
        }
        fetchData()
    },[])

    const width = d3.min([
        window.innerHeight * 0.9,
        window.innerWidth * 0.9
    ])

    const dimensions = {
        width: width,
        height: width,
        margin : {
            top: 15,
            right: 15,
            bottom: 50,
            left: 50
        }
    }

    dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom
    dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right

    if (!data) {
        return (
            <p>Loading ....</p>
        )
    }
    
}
export default ScatterPlot