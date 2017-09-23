import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import Icon from '../components/Icon';

import EStyleSheet from 'react-native-extended-stylesheet';
import baseStyles from '../styles';
import colors from '../colors';

const {
    StyleSheet,
    View,
    Text,
    Image
} = ReactNative;

class Stats extends Component {
    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h2}>Power and Torque</Text>
            </View>
        )
    }
}

const styles = EStyleSheet.create(Object.assign(baseStyles.styles, {
    container: {
        flex: 1,
        flexDirection: 'column',

        paddingLeft: baseStyles.variables.containerPadding,
        paddingRight: baseStyles.variables.containerPadding
    }
}));

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((data) => {
    return {
        
    };
}, mapDispatchToProps)(Stats);
