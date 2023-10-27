import { StyleSheet, Text, View, Dimensions, Button, TextInput, } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker'
import { TouchableOpacity } from 'react-native';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const ProjectAdd = () => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <View style={styles.arrow}>
                    <AntDesign name='arrowleft' size={25} color={'#006EE9'}></AntDesign>
                </View>
                <Text style={styles.addpro}>Add Project</Text>
            </View>
            <View style={styles.body}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{}}>
                        <Text style={styles.txt}> Start</Text>
                        <TouchableOpacity style={styles.date} onPress={() => setOpen(true)}>
                            <Text style={{color:'black'}}>{date.toDateString()}</Text>
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
                            <Text style={{color:'black'}}>{date.toDateString()}</Text>
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
                </View>
                <Text style={styles.txt}>Title</Text>
                <TextInput
                    placeholder="Project Title"
                    placeholderTextColor={'black'}
                    style={styles.txtinp}
                    textAlign="left"

                ></TextInput>
                <Text style={styles.txt}>Description</Text>
                <TextInput
                    
                    placeholderTextColor={'black'}
                    style={styles.txtinpDes}
                    
                    editable
        multiline
        numberOfLines={4}

                ></TextInput>
                <TouchableOpacity onPress={() => { }} style={styles.btn}>
                    <Text style={{fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: 'white'}}>Add Project</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProjectAdd

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
        borderRadius: 40,
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