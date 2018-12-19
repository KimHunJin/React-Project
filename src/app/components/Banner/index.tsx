import * as React from 'react'


export class Banner extends React.Component {
    render(): React.ReactNode {
        console.log('banner render');
        return (
            <div>
                <div>
                    <h1>React...</h1>
                    <p>React is Web Front Javascript Library</p>
                </div>
            </div>
        )
    }
}