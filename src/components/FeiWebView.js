'use strict';

import React, {Component} from 'react'
import {
    View,
    WebView,
    StyleSheet,
    Platform
} from 'react-native';

export default class FeiWebView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            isMargin: this.props.isMargin,
            isShowErrorPage: false,
            isNearBy: this.props.isNearBy,
            isWeather: this.props.isWeather
        };
    }

    _loadError(){
        this.setState({
            isShowErrorPage: true
        });
    }

    render() {
        let url = {uri: this.state.url};
        return (
            <View>
                {
                    this.state.isShowErrorPage?
                        <View style={styles.textView}>
                            <Text style={styles.text}>不好意思,请检查网络连接情况或者报告错误</Text>
                        </View>
                        :
                        <WebView
                            style={{
                                flex: 1,
                                width: global.gScreen.width,
                                height: global.gScreen.height - 20,
                                backgroundColor: '#fff'
                            }}
                            startInLoadingState={true}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            scalesPageToFit={true}
                            source={{uri: this.props.url, method: 'GET'}}
                            onError={this._loadError.bind(this)}
                        />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop:200,
    },
});