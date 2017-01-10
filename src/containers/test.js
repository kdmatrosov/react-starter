import React, {Component} from 'react';
import {connect} from 'react-redux';
import {testAction} from '../actions/index';

class Test extends Component {
    componentWillMount() {
        this.props.testAction();
    }
    render() {
        console.log(this.props);
        return (
            <div className="title">
                react starter
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        test: state.test.data
    }
}
export default connect(mapStateToProps, {testAction})(Test);
