import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhotographers} from '../../actions/photo/index';

class PhotoIndex extends Component {
    componentWillMount() {
        this.props.fetchPhotographers();
    }
    renderUsers()
    {

        return this.props.photo.map((u) => {
            return (
                <li className="common-list__elem" key={u.id}>
                    <span className="common-list__elem">{u.name}</span>
                </li>
            )
        });
    }
    render() {
        console.log(this.props);
        return (
            <div className="photographers-container">
                <ul className="common-list">
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        photo: state.photo.all
    }
}
export default connect(mapStateToProps, {fetchPhotographers})(PhotoIndex);
