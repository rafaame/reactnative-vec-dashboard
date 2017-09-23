import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import colors from '../colors';
import Icon from './Icon';

import EStyleSheet from 'react-native-extended-stylesheet';

const {
    View,
    Image,
    Text,
    Dimensions
} = ReactNative;

class SubSection extends Component {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.icon && <Icon icon={this.props.icon} type={this.props.iconType} font={this.props.iconFont} active={true} style={styles.icon} />}
                {this.props.title && <Text style={styles.title}>{this.props.title}</Text>}
                <View style={styles.content}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

        marginTop: 16,
        marginBottom: 16
    },

    icon: {
        width: 88,

        paddingTop: 16,
        paddingBottom: 16,
        marginLeft: 8,
        marginRight: 8
    },

    title: {
        paddingLeft: 16,
        paddingRight: 24,

        color: colors.text.light,
        fontSize: 22,
        fontWeight: '400'
    },

    content: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',

        minHeight: 50,
        
        paddingLeft: 32,
        paddingRight: 16,

        borderStyle: 'solid',
        borderLeftColor: colors.grey.light,
        borderLeftWidth: 1
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((data) => {
    return {
        
    };
}, mapDispatchToProps)(SubSection);
