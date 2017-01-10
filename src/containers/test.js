import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {testAction} from '../actions/index';

class Test extends Component {
    static contextTypes = { //магия. в этом месте мы в context записывает роутер....
        router: PropTypes.object
    };
    componentWillMount() {
        this.props.testAction();
    }
    handleClick(e){
        this.context.router.push('/photographers');
    }
    render() {
        return (
            <div className="title" onClick={() => this.handleClick()}>
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
