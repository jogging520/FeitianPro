import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    WebView,
    TouchableOpacity,
    Image
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import FeiWebView from '../components/FeiWebView'

const url = "http://192.168.56.1:9000/sbtp_8_doctor/index.html";
export default class TabBarView2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }

    _renderPage(url)
    {
        return (<FeiWebView url={url}/>);
    }

    render() {
        return (
            <TabNavigator tabBarStyle={styles.tab}>

                <TabNavigator.Item
                    style={styles.tabItem}
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={require('../resource/ic_homepage_like.png')} />}
                    renderSelectedIcon={() => <Image source={require('../resource/ic_album_default.png')} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Text>11111</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.tabItem}
                    selected={this.state.selectedTab === 'GSTV'}
                    title="甘肃卫视"
                    renderIcon={() => <Image source={require('../resource/ic_album_default.png')} />}
                    renderSelectedIcon={() => <Image source={require('../resource/ic_album_default.png')} />}
                    onPress={() => this.setState({ selectedTab: 'GSTV' })}>
                    <View style={styles.headerContainer}>
                        <FeiWebView url={url}/>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.tabItem}
                    selected={this.state.selectedTab === 'ar'}
                    title="AR体验"
                    renderIcon={() => <Image source={require('../resource/ic_takephoto_default.png')} />}
                    renderSelectedIcon={() => <Image source={require('../resource/ic_takephoto_selected.png')} />}
                    onPress={() => this.setState({ selectedTab: 'ar' })}>
                    <Text>3333</Text>
                </TabNavigator.Item>
                <TabNavigator.Item
                    style={styles.tabItem}
                    selected={this.state.selectedTab === 'profile'}
                    title="我的"
                    renderIcon={() => <Image source={require('../resource/ic_tab_my.png')} />}
                    renderSelectedIcon={() => <Image source={require('../resource/ic_tab_my_select.png')} />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <Text>4444</Text>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

    _renderView(){
        var view = null;
        switch (this.state.selectedTab){
            case 'gstv':
                view = <Text >1111</Text>;
                break;
            case 'AR':
                view = <Text>222</Text>;
                break;
            case 'my':
                view = <Text>333</Text>
                break;
            default :
                view = <Text>444</Text>;
                break;
        }
        return view;
    }
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 49,
        borderTopColor: '#d9d9d9',
    },

    tab: {
        height:75,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    icon: {
        width: 26,
        height: 26,
        marginBottom: 2
    }
})