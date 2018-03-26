import React, {
    Component,
} from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert,
    Animated,
} from 'react-native'

import SortableSudokuGrid from 'react-native-smart-sortable-sudoku-grid'

import image_cash from '../assets/home_icon_butler.png'
import image_credit from '../assets/home_icon_buyc.png'
import image_transfer from '../assets/home_icon_count.png'
import image_loan from '../assets/home_icon_cs.png'
import image_charge from '../assets/home_icon_cust.png'
import image_payment from '../assets/home_icon_cut.png'
import image_shopping from '../assets/home_icon_earlyw.png'
import image_service from '../assets/home_icon_lable.png'
import image_donate from '../assets/home_icon_mt.png'
import image_myde from '../assets/home_icon_myde.png'
import image_resd from '../assets/home_icon_resd.png'
import image_sch from '../assets/home_icon_sch.png'
import image_shop from '../assets/home_icon_shop.png'
import image_team from '../assets/home_icon_team.png'
import image_tech from '../assets/home_icon_tech.png'

const Dao = require("../Dao/Repo.js");

const dataList = [
    {
        icon: image_cash,
        title: 'cash',
    },
    {
        icon: image_credit,
        title: 'credit',
    },
    {
        icon: image_transfer,
        title: 'transfer',
    },
    {
        icon: image_loan,
        title: 'loan',
    },
    {
        icon: image_charge,
        title: 'charge',
    },
    {
        icon: image_payment,
        title: 'payment',
    },
    {
        icon: image_shopping,
        title: 'shopping',
    },
    {
        icon: image_service,
        title: 'service',
    },
    {
        icon: image_donate,
        title: 'donate',
    },
    {
        icon: image_myde,
        title: 'myde',
    },
    {
        icon: image_resd,
        title: 'resd',
    },
    {
        icon: image_sch,
        title: 'sch',
    },
    {
        icon: image_shop,
        title: 'shop',
    },
    {
        icon: image_team,
        title: 'team',
    },
    {
        icon: image_tech,
        title: 'tech',
    }
];

const columnCount = 3;

export default class SortableSudokuGridComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            dataSource: [...dataList],
            candidates: [],
            sortable: false,
            scrollEnabled: true,
            disabled: false,
            managementButtonText: 'Manage',
            opacity: new Animated.Value(0),
        };
        this._sortableSudokuGrid = null
    }

    async componentDidMount() {
        let ds = await Dao.getGridItemOrder();
        if (ds) {
            let json = JSON.parse(JSON.parse(ds));
            //console.log(json.order);
            this.setState({dataSource: []});
            this.setState({dataSource: json.order});
        }
    }
    render () {
        return (
            <ScrollView
                scrollEnabled={this.state.scrollEnabled}
                style={{marginTop: 1, }}>
                <SortableSudokuGrid
                    ref={ component => this._sortableSudokuGrid = component }
                    rowHeight={100}
                    containerStyle={{ backgroundColor: '#fff',}}
                    columnCount={columnCount}
                    dataSource={this.state.dataSource}
                    renderCell={this._renderGridCell}
                    sortable={this.state.sortable}
                />
                <View
                    style={{backgroundColor:'white', height: 50, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
                    <TouchableOpacity
                        onPress={this._onPressManagementButton}>
                        <View style={{flex: 1, justifyContent: 'center',}}>
                            <Text>{this.state.managementButtonText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    _renderGridCell = (data, component) => {
        return (
            <TouchableOpacity
                disabled={this.state.disabled}
                style={{flex: 1, padding: 1, position: 'relative', }}
                onPress={ this._onPressCell.bind(this, data) }>
                <View style={{ overflow: 'hidden', backgroundColor: '#fff',
                    justifyContent: 'center', alignItems: 'center', flex: 1,
                    borderWidth: StyleSheet.hairlineWidth, borderColor: '#eee', }}>
                    <Image source={data.icon} style={{width: 40, height: 40, marginHorizontal: 5, marginBottom: 5,}}/>
                    <Text>{data.title}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    _onPressCell = (data) => {
        Alert.alert('clicked grid cell -> ' + data.title)
    };

    _onPressManagementButton = () => {
        let scrollEnabled = !this.state.scrollEnabled;
        let disabled = !this.state.disabled;
        let managementButtonText = this.state.managementButtonText === 'Manage' ? 'Complete' : 'Manage';
        let sortable = !this.state.sortable;
        let opacity = sortable ? new Animated.Value(1) : new Animated.Value(0);
        this.setState({
            scrollEnabled,
            managementButtonText,
            disabled,
            sortable,
            opacity,
        });
        if (!sortable) {
            let sortedDataSource = this._sortableSudokuGrid.getSortedDataSource();
            //console.log(sortedDataSource);
            Dao.setGridItemOrder(JSON.stringify({order: sortedDataSource}));
        }
    };

}