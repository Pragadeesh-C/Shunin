import { StyleSheet, Text, View,Dimensions, Button, } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker'


const height=Dimensions.get('window').height
const width=Dimensions.get('window').width
const ProjectAdd = () => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',marginTop:40}}>
        <View style={styles.arrow}>
            <AntDesign name='arrowleft' size={25} color={'#006EE9'}></AntDesign>
        </View>
        <Text style={styles.addpro}>Add Project</Text>
      </View>
      <View style={styles.body}>
        <View>
            <View>
                <Text style={styles.txt}>Start</Text>
                <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
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
      </View>
    </View>
  )
}

export default ProjectAdd

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#006EE9',
        height:height,
        width:width

    },
    arrow:{
        height:40,
        width:40,
        borderRadius:10,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        

    },
    addpro:{
        fontFamily: 'Righteous-Regular',
    fontSize: 23,
    color: 'white',
    textAlign: 'center',
    marginLeft:80,
    paddingTop:5
    
    },
    body:{
        height:'85%',
        width:width,
        backgroundColor:'white',
        bottom:0,
        position:'absolute',
        borderRadius:40
    },
    txt:{
        marginLeft:25,
        marginTop:30,
        fontFamily: 'Righteous-Regular',
        fontSize:16
    }
})