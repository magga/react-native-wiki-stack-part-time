import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from './../actions';

class ListItem extends Component {
    titleClicked = (id) => {
        this.props.selectLibrary(id);
    }

    render() {
        console.log(this.props.selectedLibraryIdProps);

        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableOpacity onPress={this.titleClicked.bind(this, id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state) => {
    return {
        selectedLibraryIdProps: state.selectedLibraryId
    };
};

export default connect(mapStateToProps, actions)(ListItem);
