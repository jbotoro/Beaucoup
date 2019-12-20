import React from 'React';


class MastheadShow extends React.Component {
    constructor(props){
        super(props);
    }


    render() {

        return (
            <div className='masthead-details-container'>
                <ul className='masthead-show'>
                    <li>
                        <h2> WATCH THE TIMELESS CLASSIC</h2>
                    </li>
                    <li>
                         <h3>{this.props.show.title}</h3>
                    </li>
                    <li>
                        <h5>1995  ·  Old School</h5>
                    </li>   
                    <li className='masthead-show-description'>
                        <h4>{this.props.show.description}</h4>
                    </li>
                    <li className='masthead-details-buttons'>

                    </li>
                </ul>
            </div>
        )
    }
}

export default MastheadShow