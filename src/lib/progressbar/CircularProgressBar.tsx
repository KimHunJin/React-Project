import * as React from 'react'

class Props {
    sqSize: number = 200;
    strokeWidth: number = 25;
    percentage: number = 10;
}


export class CircularProgressBar extends React.Component<Props> {

    constructor(props) {
        super(props)
    }

    render() {
        const sqSize = this.props.sqSize;
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
        const dashArray = radius * Math.PI * 2;
        const dashoffset = dashArray - dashArray * this.props.percentage / 100;

        return (
            <svg
                width={sqSize}
                height={sqSize}
                viewBox={viewBox}>
                <circle
                    className={"circle-background"}
                    cx={sqSize / 2}
                    cy={sqSize / 2}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`}/>
                <circle
                    className={'circle-progress'}
                    cx={sqSize / 2}
                    cy={sqSize / 2}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`}
                    transform={`rotate(-90 ${sqSize / 2} / 2}${sqSize / 2})`} style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashoffset
                }}/>
            </svg>
        )
    }
}