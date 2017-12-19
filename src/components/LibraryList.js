import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.data_source = ds.cloneWithRows(
            this.props.libraryListProps
        );
    }

    renderRow(data) {
        return (
            <ListItem 
                library={data}
            />
        );
    }

    render() {
        return (
            <ListView 
                dataSource={this.data_source}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        libraryListProps: state.libraryList
    };
};

export default connect(mapStateToProps)(LibraryList);
