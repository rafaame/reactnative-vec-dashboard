import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import Icon from '../components/Icon';
import Card from '../components/Card';

import EStyleSheet from 'react-native-extended-stylesheet';
import { getTheme, MKSlider, MKButton, MKSwitch } from 'react-native-material-kit';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import baseStyles from '../styles';
import colors from '../colors';

const theme = getTheme();
const {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    Dimensions
} = ReactNative;

class General extends Component {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Card title='Hazard Lights' icon='icon_danger' iconType={this.props.hazardLights ? 'secondary' : 'text'}>
                    <Text style={styles.defaultIndicator}>{this.props.hazardLights ? 'On' : 'Off'}</Text>
                    <View style={styles.switchControlContainer}>
                        <MKSwitch
                            checked={this.props.hazardLights}
                            trackSize={30}
                            trackLength={52}
                            thumbRadius={15}
                            offColor={colors.grey.dark}
                            onColor={colors.secondary.dark}
                            thumbOnColor={colors.secondary.default}
                            rippleColor={colors.grey.light}
                            onCheckedChange={({checked}) => {this.props.requestHazardLightsChange(checked)}}/>
                    </View>
                </Card>

                <Card title='Door Locks' icon='icon_doors' iconType={this.props.doorLocks ? 'primary' : 'secondary'}>
                    <Text style={styles.defaultIndicator}>{this.props.doorLocks ? 'On' : 'Off'}</Text>
                    <View style={styles.switchControlContainer}>
                        <MKSwitch
                            checked={this.props.doorLocks}
                            trackSize={30}
                            trackLength={52}
                            thumbRadius={15}
                            offColor={colors.secondary.dark}
                            onColor={colors.primary.default}
                            thumbOnColor={colors.grey.light}
                            thumbOffColor={colors.secondary.default}
                            rippleColor={colors.grey.light}
                            onCheckedChange={({checked}) => {this.props.toggleDoorLocks()}}/>
                    </View>
                </Card>

                <Card title='Trunk' icon='icon_trunk' iconType='text'>
                    <View style={styles.trunkControlContainer}>
                        <MKButton
                            onPress={() => {this.props.openTrunk()}}
                            style={styles.trunkButton}>
                            <Text style={styles.defaultColoredButtonText}>OPEN TRUNK</Text>
                        </MKButton>
                    </View>
                </Card>

                <Card
                    title='Air Flow Direction'
                    icon={Dimensions.get('window').width <= 580 ? null : ['icon_air_head', 'icon_air_windshield', 'icon_air_windshield_feet', 'icon_air_feet', 'icon_air_head_feet'][this.props.ventilatorPosition - 1]}
                    iconType='primary'>
                    <View style={styles.ventilatorPositionControlContainer}>
                        <MKButton 
                            fab={true}
                            rippleLocation='center'
                            onPress={() => {this.props.requestVentilatorPositionChange(1)}}
                            style={styles.ventilatorPositionFab}>
                            <Icon icon='icon_air_head' type={this.props.ventilatorPosition === 1 ? 'primary' : 'text'} active={true} />
                        </MKButton>

                        <MKButton 
                            fab={true}
                            rippleLocation='center'
                            onPress={() => {this.props.requestVentilatorPositionChange(2)}}
                            style={styles.ventilatorPositionFab}>
                            <Icon icon='icon_air_windshield' type={this.props.ventilatorPosition === 2 ? 'primary' : 'text'} active={true} />
                        </MKButton>

                        <MKButton 
                            fab={true}
                            rippleLocation='center'
                            onPress={() => {this.props.requestVentilatorPositionChange(3)}}
                            style={styles.ventilatorPositionFab}>
                            <Icon icon='icon_air_windshield_feet' type={this.props.ventilatorPosition === 3 ? 'primary' : 'text'} active={true} />
                        </MKButton>

                        <MKButton 
                            fab={true}
                            rippleLocation='center'
                            onPress={() => {this.props.requestVentilatorPositionChange(4)}}
                            style={styles.ventilatorPositionFab}>
                            <Icon icon='icon_air_feet' type={this.props.ventilatorPosition === 4 ? 'primary' : 'text'} active={true} />
                        </MKButton>

                        <MKButton 
                            fab={true}
                            rippleLocation='center'
                            onPress={() => {this.props.requestVentilatorPositionChange(5)}}
                            style={styles.ventilatorPositionFab}>
                            <Icon icon='icon_air_head_feet' type={this.props.ventilatorPosition === 5 ? 'primary' : 'text'} active={true} />
                        </MKButton>
                    </View>
                </Card>

                <Card title='Fan Speed' icon='icon_fan' iconType={this.props.ventilatorSpeed > 0 ? 'primary' : 'text'}>
                    <Text style={styles.defaultIndicator}>{this.props.ventilatorSpeed > 0 ? this.props.ventilatorSpeed : 'Off'}</Text>
                    <MKSlider
                        ref="sliderWithValue"
                        min={0}
                        max={4}
                        step={1}
                        value={this.props.ventilatorSpeed}
                        onConfirm={(value) => {this.props.requestVentilatorSpeedChange(parseInt(value));}}
                        thumbPadding={0}
                        thumbRadius={12}
                        trackSize={4}
                        lowerTrackColor={colors.primary.default}
                        upperTrackColor={colors.grey.light}
                        style={styles.ventilatorSpeedSlider} />
                </Card>

                <Card title='Air Conditioning' icon='icon_ac' iconType={this.props.airConditioning ? 'primary' : 'text'}>
                    <Text style={styles.defaultIndicator}>{this.props.airConditioning ? 'On' : 'Off'}</Text>
                    <View style={styles.switchControlContainer}>
                        <MKSwitch
                            checked={this.props.airConditioning}
                            trackSize={30}
                            trackLength={52}
                            thumbRadius={15}
                            offColor={colors.grey.dark}
                            onColor={colors.primary.default}
                            thumbOnColor={colors.grey.light}
                            rippleColor={colors.grey.light}
                            onCheckedChange={({checked}) => {this.props.requestAirConditioningChange(checked)}}/>
                    </View>
                </Card>

                <Card title='Recirculation' icon='icon_air_recirculation' iconType={this.props.airRecirculation ? 'primary' : 'text'}>
                    <Text style={styles.defaultIndicator}>{this.props.airRecirculation ? 'On' : 'Off'}</Text>
                    <View style={styles.switchControlContainer}>
                        <MKSwitch
                            checked={this.props.airRecirculation}
                            trackSize={30}
                            trackLength={52}
                            thumbRadius={15}
                            offColor={colors.grey.dark}
                            onColor={colors.primary.default}
                            thumbOnColor={colors.grey.light}
                            rippleColor={colors.grey.light}
                            onCheckedChange={({checked}) => {this.props.requestAirRecirculationChange(checked)}}/>
                    </View>
                </Card>

                <Card title='Defrost' icon='icon_rear_window_defrost' iconType={this.props.defrost ? 'primary' : 'text'}>
                    <Text style={styles.defaultIndicator}>{this.props.defrost ? 'On' : 'Off'}</Text>
                    <View style={styles.switchControlContainer}>
                        <MKSwitch
                            checked={this.props.defrost}
                            trackSize={30}
                            trackLength={52}
                            thumbRadius={15}
                            offColor={colors.grey.dark}
                            onColor={colors.primary.default}
                            thumbOnColor={colors.grey.light}
                            rippleColor={colors.grey.light}
                            onCheckedChange={({checked}) => {this.props.toggleDefrost()}}/>
                    </View>
                </Card>

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

    defaultIndicator: {
        alignSelf: 'center',

        minWidth: 64,

        color: colors.text.light,
        fontSize: 28,
        fontWeight: '400'  
    },

    defaultButtonText: {
        color: colors.text.light,
        fontSize: 18,
        fontWeight: '400'
    },

    defaultColoredButtonText: {
        color: colors.text.dark,
        fontSize: 18,
        fontWeight: '400'
    },

    trunkControlContainer: {
        flex: 1,
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'center',

        marginLeft: -64
    },

    trunkButton: {
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

    ventilatorPositionControlContainer: {
        flex: 1,
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'center',

        marginLeft: -64
    },

    ventilatorPositionFab: {
        alignItems: 'center',
        justifyContent: 'center',

        width: 64,
        height: 64,

        marginLeft: 5,
        marginRight: 15,

        backgroundColor: colors.grey.dark,

        borderRadius: 24,

        shadowRadius: 1,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.4,
        shadowColor: 'black',
        
        elevation: 4
    },

    ventilatorSpeedSlider: {
        flex: 1,

        marginLeft: 32
    },

    switchControlContainer: {
        flex: 1,
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'center'
    },

    footer: {
        height: 100
    },

    '@media (max-width: 580)': {
        trunkControlContainer: {
            marginLeft: -16
        },

        trunkButton: {
            flex: 1
        },

        ventilatorPositionControlContainer: {
            flex: 0.8,

            marginLeft: 8
        },

        ventilatorPositionFab: {
            marginLeft: 0
        }
    }
}));

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((data) => {
    return {
        ventilatorPosition: data.general.ventilatorPosition,
        ventilatorSpeed: data.general.ventilatorSpeed,
        airConditioning: data.general.airConditioning,
        airRecirculation: data.general.airRecirculation,
        hazardLights: data.general.hazardLights,
        doorLocks: data.general.doorLocks,
        defrost: data.general.defrost
    };
}, mapDispatchToProps)(General);
