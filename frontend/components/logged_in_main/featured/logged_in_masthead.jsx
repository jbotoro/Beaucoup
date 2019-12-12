import React from 'react';


class Masthead extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {


        return (

            <div className="show_image_container">
              <div className='masthead-main'>
                    <ul className='topshow'>
                        <li>
                            <h2>WATCH THE TIMELESS CLASSIC</h2>
                        </li>
                        <li>
                            <h3>{this.props.show.title}</h3>
                        </li>
                        <li>
                            <h5>Neon Genesis Evangelion</h5>
                        </li>
                        <li>
                            <h4>{this.props.show.description}</h4>
                        </li>
                        <li>
                            <ul className="topshow_nav">
                                {/* <li>
                                    <LargePlayButton content={this.props.show} />
                                </li> */}
                                <li>
                                    <div className="startWatch">START WATCHING</div>
                                </li>
                                {/* <li>
                                    <DetailsButton color="white" content={this.props.show} />
                                </li > */}
                                {/* <li>
                                    <MyStuffButton color="white" content={this.props.show} />
                                </li> */}
                            </ul>
                        </li>
                    </ul>


              </div>
                
            </div>
        )
    }
}

export default Masthead;