import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions';

import EStyleSheet from 'react-native-extended-stylesheet';
import { getTheme, MKSlider, MKButton, MKSwitch } from 'react-native-material-kit';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import baseStyles from '../styles';
import colors from '../colors';

const {
    View,
    Text
} = ReactNative;

class Button extends Component {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        let style = [styles[this.props.type]];
        let textStyle = [styles[this.props.type + 'Text']];
        if (! this.props.enabled) {
            style = [styles.disabled];
            textStyle = [styles.disabledText];
        }

        if (this.props.style) {
            style = style.concat((this.props.style instanceof Array) ? this.props.style : [this.props.style]);
        }

        return (
            <MKButton
                enabled={this.props.enabled}
                onPress={this.props.onPress}
                style={style}>
                <Text style={textStyle}>{this.props.text}</Text>
            </MKButton>
        );
    }
}

const styles = EStyleSheet.create({
    primary: {
        alignItems: 'center',
        justifyContent: 'center',

        width: 200,
        height: 50,

        backgroundColor: colors.primary.default,

        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowColor: 'black',
        
        elevation: 4
    },

    primaryText: {
        color: colors.text.dark,
        fontSize: 18,
        fontWeight: '400'
    },

    disabled: {
        alignItems: 'center',
        justifyContent: 'center',

        width: 200,
        height: 50,

        backgroundColor: colors.grey.light,

        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowColor: 'black',
        
        elevation: 4
    },

    disabledText: {
        color: colors.text.light,
        fontSize: 18,
        fontWeight: '400'
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((data) => {
    return {
        
    };
}, mapDispatchToProps)(Button);
