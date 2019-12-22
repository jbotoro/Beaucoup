import React from "react";
import { withRouter } from "react-router-dom";

class MyStuffButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            detail_button_hover: false
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({
            detail_button_hover: true
        })
    }

    handleMouseLeave() {
        this.setState({
            detail_button_hover: false
        })
    }

   


    render(){
        
        let details_button_container = 'detailsbutton-container'
        let icon_class = 'material-icons details'
        let load_details = 'load-details-container'

        if(this.state.detail_button_hover){
            details_button_container = 'detailsbutton-container-2'
            icon_class = 'material-icons details-2'
            load_details = 'load-details-container-2'
        }
        return(
            <div className={details_button_container}>
                <div className={icon_class} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}> add</div>
                <div className={load_details}>
                    <div className='text-details-container'>
                        <div className='details-text'>
                            ADD TO MYSTUFF
                        </div>
                    </div>
                    {/* <div className='material-icons downarrowcontainer'>
                        <div className='material-icons downarrow'> arrow_drop_down</div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(MyStuffButton)