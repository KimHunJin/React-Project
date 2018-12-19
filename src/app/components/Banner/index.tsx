import * as React from 'react';
import './practice.less';

export class Banner extends React.Component {
    render(): React.ReactNode {
        console.log('banner render');
        return (
            <div className={'module-main-banner'}>
                <div className={'content'}>
                    <h1>React...</h1>
                    <p>React is Web Front Javascript Library</p>
                </div>
            </div>
        )
    }
}