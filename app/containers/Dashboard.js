import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import LockManager from 'react-native-lock-manager';
import DeviceBrightness from 'react-native-device-brightness';
const Orientation = require('react-native-orientation');

import Tabs from '../components/Tabs';
import Icon from '../components/Icon';
import General from './General';
import Stats from './Stats';
import Advanced from './Advanced';

import EStyleSheet from 'react-native-extended-stylesheet';
import { getTheme, setTheme } from 'react-native-material-kit';
import LinearGradient from 'react-native-linear-gradient';
import baseStyles from '../styles';
import colors from '../colors';

const {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar
} = ReactNative;

/*setTheme({
  primaryColor: colors.info.default,
  accentColor: colors.primary.default
});*/

class Dashboard extends Component {
    static TIMEOUT = 10000;

    constructor(props: any, context: any) {
        super(props, context);
    }

    componentDidMount() {
        setInterval(() => {
            LockManager.unlock();

            /*if (__DEV__) {
              Orientation.lockToLandscapeLeft();
            } else {
              Orientation.lockToLandscapeRight();
            }*/

            this.forceUpdate();
        }, 1000);
    }

    isConnected() {
        return true;
        return this.props.receiveTime && ((new Date()).getTime() - this.props.receiveTime) < Dashboard.TIMEOUT;
    }

    render() {
        //let showDashboard = this.isConnected() && this.props.isDriverPresent;
        let showDashboard = true;
        DeviceBrightness.getBrightnessLevel()
            .then(function (brightness) {
                if (brightness !== (showDashboard ? 1 : 0)) {
                    DeviceBrightness.setBrightnessLevel(showDashboard ? 1 : 0);
                }
            });

        if (! showDashboard) {
            return (
                <View style={styles.sleep}>
                    <StatusBar hidden />
                </View>
            );
        }

        return (
            <LinearGradient colors={[colors.grey.light, colors.grey.dark]} start={{x: 0, y: 0}} end={{x: 1, y: 1}} style={styles.dashboard}>
                <StatusBar hidden />
                <Tabs 
                      items={['General', 'Stats', 'Advanced']}
                      selectedIndex={this.props.selectedTab}
                      onChange={this.props.selectDashboardTab.bind(this)}
                      barColor='transparent'
                      indicatorColor={colors.primary.default}
                    />
                <View style={styles.panel}>
                    {this.props.selectedTab === 0 && <General />}
                    {this.props.selectedTab === 1 && <Stats />}
                    {this.props.selectedTab === 2 && <Advanced />}
                </View>
            </LinearGradient>
        )
    }
}

const styles = EStyleSheet.create({
    dashboard: {
        flex: 1,
        flexDirection: 'column'
    },

    sleep: {
        flex: 1,

        backgroundColor: 'black'
    },

    panel: {
        flexGrow: 1,
        flexDirection: 'row',

        paddingTop: baseStyles.variables.containerPadding,
        paddingLeft: baseStyles.variables.containerPadding,
        paddingRight: baseStyles.variables.containerPadding
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((data) => {
    return {
        selectedTab: data.dashboard.selectedTab
    };
}, mapDispatchToProps)(Dashboard);
