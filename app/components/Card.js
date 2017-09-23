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

class Card extends Component {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.icon && <Icon icon={this.props.icon} type={this.props.iconType} font={this.props.iconFont} active={true} style={styles.icon} />}
                <Text style={styles.title}>{this.props.title}</Text>
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
        
        height: 100,

        marginTop: 16,
        marginBottom: 16,

        alignItems: 'center',

        backgroundColor: colors.grey.dark + '88',

        shadowColor: 'rgba(255, 255, 255, 0.12)',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 2
        },
        //elevation: 10
    },

    icon: {
        width: 88,

        paddingTop: 16,
        paddingBottom: 16,
        marginLeft: 8,
        marginRight: 8,

        borderStyle: 'solid',
        borderRightColor: colors.grey.light,
        borderRightWidth: 1
    },

    title: {
        flex: 0.3,

        paddingLeft: 32,

        color: colors.text.light,
        fontSize: 28,
        fontWeight: '400'
    },

    content: {
        flexDirection: 'row',
        flex: 0.5,
        
        paddingLeft: 32,
        paddingRight: 32
    },

    '@media (max-width: 580)': {
        container: {
            
        },

        icon: {

        },

        title: {
            flex: 0,
            width: 0,
            paddingLeft: 0
        },

        content: {
            flex: 1,
            alignItems: 'center',

            paddingLeft: 32,
            paddingRight: 32
        }
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((data) => {
    return {
        
    };
}, mapDispatchToProps)(Card);
