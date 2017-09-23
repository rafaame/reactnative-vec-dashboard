import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import Icon from './Icon';

import EStyleSheet from 'react-native-extended-stylesheet';
import baseStyles from '../styles';
import colors from '../colors';

const {
    View,
    Text
} = ReactNative;

class Section extends Component {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h2}>{this.props.title}</Text>
                <View style={styles.content}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create(Object.assign(baseStyles.styles, {
    container: {
        paddingBottom: 40
    },

    content: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',

        //paddingTop: 16,
        //paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,

        backgroundColor: colors.grey.dark + '88',

        shadowColor: 'rgba(255, 255, 255, 0.12)',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 2
        }
    }
}));

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((data) => {
    return {
        
    };
}, mapDispatchToProps)(Section);
