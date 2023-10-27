import { StyleSheet, Text, View, Dimensions, Button, TextInput, } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker'
import { TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const TaskAdd = () => {

    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')


    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const [Enddate, setEndDate] = useState(new Date())
    const [fopen, setfOpen] = useState(false)

    const [dropopen, setdropOpen] = useState(false);
    const [value, setValue] = useState('none');
    const [items, setItems] = useState([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
    ]);

    const [dropopen2, setdropOpen2] = useState(false);
    const [value2, setValue2] = useState('none');
    const [items2, setItems2] = useState([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
    ]);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <View style={styles.arrow}>
                    <AntDesign name='arrowleft' size={25} color={'#006EE9'}></AntDesign>
                </View>
                <Text style={styles.addpro}>Add Task</Text>
            </View>
            <View style={styles.body}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{}}>
                        <Text style={styles.txt}> Start</Text>
                        <TouchableOpacity style={styles.date} onPress={() => setOpen(true)}>
                            <Text style={{ color: 'black' }}>{date.toDateString()}</Text>
                        </TouchableOpacity>

                        <DatePicker
                            modal
                            mode='date'
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />

                    </View>
                    <View style={{}}>
                        <Text style={styles.txt}> Ends</Text>
                        <TouchableOpacity style={styles.date} onPress={() => setOpen(true)}>
                            <Text style={{ color: 'black' }}>{date.toDateString()}</Text>
                        </TouchableOpacity>

                        <DatePicker
                            modal
                            mode='date'
                            open={fopen}
                            date={Enddate}
                            onConfirm={(date) => {
                                setfOpen(false)
                                setEndDate(date)
                            }}
                            onCancel={() => {
                                setfOpen(false)
                            }}
                        />
                    </View>
                </View>
                <Text style={styles.txt}>Title</Text>
                <TextInput
                    placeholder="Project Title"
                    placeholderTextColor={'black'}
                    style={styles.txtinp}
                    textAlign="left"
                    value={name}
                    onChangeText={text => setname(text)}
                ></TextInput>
                <Text style={styles.txt}>Skills Required</Text>
                <TextInput
                    placeholder="Project Title"
                    placeholderTextColor={'black'}
                    style={styles.txtinp}
                    textAlign="left"
                    value={name}
                    onChangeText={text => setname(text)}
                ></TextInput>
                <Text style={styles.txt}>Priority</Text>
                <DropDownPicker
                    open={dropopen}
                    value={value}
                    items={items}
                    setOpen={setdropOpen}
                    setValue={setValue}
                    setItems={setItems}
                    multiple={false}
                    style={{ borderWidth: 0.3, borderRadius: 10, zIndex: 1000 }}
                    stickyHeader={true}
                    placeholder={'Select Priority'}
                />

                <Text style={styles.txt}>Complexity</Text>
                <DropDownPicker
                    open={dropopen2}
                    value={value2}
                    items={items2}
                    setOpen={(value) => {
                        setdropOpen2(dropopen ? false : value);
                    }}
                    setValue={setValue2}
                    setItems={setItems2}
                    multiple={false}
                    style={{ borderWidth: 0.3, borderRadius: 10, zIndex: dropopen ? -1 : 1000 }}
                    disabled={dropopen}
                    placeholder={dropopen ? 'Please close Priority dropdown first' : 'Select Complexity'}
                />
                <TouchableOpacity onPress={() => { }} style={styles.btn}>
                    <Text style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: 16,
                        color: 'white'
                    }}>Add Project</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TaskAdd

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#006EE9',
        height: height,
        width: width

    },
    arrow: {
        height: 40,
        width: 40,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,


    },
    addpro: {
        fontFamily: 'Righteous-Regular',
        fontSize: 23,
        color: 'white',
        textAlign: 'center',
        marginLeft: 80,
        paddingTop: 5

    },
    body: {
        height: '85%',
        width: width,
        backgroundColor: 'white',
        bottom: 0,
        position: 'absolute',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

        paddingHorizontal: 20
        // flexDirection:'row'
    },
    txt: {

        marginTop: 30,
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: '#006EE9'
    },
    date: {
        borderWidth: 0.3,
        borderColor: '#006EE9',
        width: 140,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    txtinp: {
        color: 'black',
        paddingLeft: 20,
        borderWidth: 0.3,
        borderColor: '#006EE9',
        borderRadius: 10,


    },
    txtinpDes: {
        color: 'black',
        paddingLeft: 20,
        borderWidth: 0.3,
        borderColor: '#006EE9',
        borderRadius: 10,


    }
    ,
    btn: {
        height: 50,
        backgroundColor: '#006EE9',
        borderRadius: 10,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})