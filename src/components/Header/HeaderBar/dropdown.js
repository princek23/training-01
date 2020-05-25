import React, { Component } from 'react'
import {connect} from "react-redux"

class dropdown extends Component {
    render() {
        return (
            <select onChange={(e) => this.props.selectionChanged(e.target.value)}>
            {this.props.fundsList.map(data => <option key={data.id} value={data.id}>{data.name}</option>)}
            </select>
        )
    }
}

const mapStateToProps = state => {
    return {
        fundsList: [...state.fundsList],
        fundName: state.fundName
    };
}

const mapDispatchToProps = dispatch => {
    return {
        selectionChanged: (id) => dispatch({ type: 'Selection-Changed', id: id })
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(dropdown)
