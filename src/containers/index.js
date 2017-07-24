import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {indexAction} from '../actions/index';

class Index extends Component {
    static contextTypes = { //магия. в этом месте мы в context записывает роутер....
        router: PropTypes.object
    };
    componentWillMount() {
        this.props.indexAction();
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
        test: state.index.data
    }
}
export default connect(mapStateToProps, {indexAction})(Index);
