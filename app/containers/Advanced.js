import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import Section from '../components/Section';
import SubSection from '../components/SubSection';
import Button from '../components/Button';
import Icon from '../components/Icon';

import EStyleSheet from 'react-native-extended-stylesheet';
import { getTheme, MKSlider, MKSwitch } from 'react-native-material-kit';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import baseStyles from '../styles';
import colors from '../colors';

const theme = getTheme();
const {
    StyleSheet,
    View,
    ScrollView,
    ListView,
    Text,
    Image,
    Dimensions
} = ReactNative;

class Advanced extends Component {
    static logDataSource = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});

    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.h2}>Log</Text>
                    <ListView
                        style={styles.log}
                        dataSource={this.props.logs}
                        renderRow={(row) => (
                            <Text style={styles.logEntry}>[{row.date.format('hh:mm:ss')}] {row.message}</Text>
                        )}/>
                </View>

                <Section title='System Update'>
                    <SubSection title='qt-vec-api'>
                        <View style={styles.updateInfo}>
                            <Text style={styles.h4}>Last commit: {this.props.update['qt-vec-api'].lastCommit}</Text>
                        </View>

                        <View style={styles.updateActions}>
                            <Button
                                type='primary'
                                enabled={! this.props.busy}
                                onPress={() => {this.props.checkUpdate('qt-vec-api')}}
                                style={styles.checkUpdateButton}
                                text='CHECK UPDATE'>
                            </Button>
                            <Button
                                type='primary'
                                enabled={! this.props.busy}
                                onPress={() => {this.props.startUpdate('qt-vec-api')}}
                                style={styles.startUpdateButton}
                                text='START UPDATE'>
                            </Button>
                        </View>
                    </SubSection>
                </Section>

                <View style={styles.footer}></View>
            </ScrollView>
        )
    }
}

const styles = EStyleSheet.create(Object.assign(baseStyles.styles, {
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    log: {
        height: 200,

        paddingTop: 16,
        paddingBottom: 16,
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
    },    

    logEntry: {
        color: colors.text.light,
        fontSize: 18
    },

    updateInfo: {
        flexDirection: 'row',
        flex: 0.4
    },

    updateActions: {
        flexDirection: 'row',
        width: 420,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    checkUpdateButton: {
        marginRight: 16
    },

    startUpdateButton: {
        
    },

    footer: {
        height: 100
    },

    '@media (max-width: 580)': {
        
    }
}));

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((data) => {
    console.log(data);
    return {
        busy: data.advanced.busy,
        logs: Advanced.logDataSource.cloneWithRows(data.advanced.log),
        update: data.advanced.update
    };
}, mapDispatchToProps)(Advanced);
