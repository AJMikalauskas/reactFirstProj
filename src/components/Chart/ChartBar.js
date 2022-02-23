import './ChartBar.css';

const ChartBar = (props) => {
    // const months = [
    //     "January", "February", 
    //     "March", "April", "May", 
    //     "June", "July", "August",
    //     "September", "October", 
    //     "November", "December"
    // ];

    // let label = months[props.label];
    // let cutoffMonth =  label.substring(0,3);


    //     let showChartData;
    //     let showChartLabel;
    // for(let currentMonth = 0; currentMonth < months.length; currentMonth++)
    // {
    //     let label1 = months[currentMonth];
    //     let symbolMonth = label1.substring(0,3);
    //     if(props.label === months[currentMonth])
    //     {
    //         let abbrevPropLabel =  props.label.substring(0,3);
    //         showChartData = <div className='chart-bar__fill' style={{height: Math.round(props.value/props.maxValue * 100)}}></div>;
    //         showChartLabel = <div className='chart-bar__label'>{abbrevPropLabel}</div>;
    //     }
    //     else if(props.label !== months[currentMonth]){
    //         showChartData = <div className='chart-bar__fill'></div>;
    //         showChartLabel = <div className='chart-bar__label'>{symbolMonth}</div>;
    //     }
    // }
    //let label = months[props.label];
    //console.log(label);
    //console.log(props.value);
    //if(props.value === )
    let height = '0%';
    if(props.maxValue > 0) {
    height = props.value/props.maxValue * 100 + '%';
    console.log(height);
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height: height }}></div>
                {/* {props.label === null && <div><div className='chart-bar__fill'></div><div className='chart-bar__label'>{}</div></div>}
                {props.label !== null && <div className='chart-bar__fill' style={{height: props.value/props.maxValue * 100}}></div>} */}
            </div>
            {/* <div className='chart-bar__label'>{}</div> */}
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default ChartBar;