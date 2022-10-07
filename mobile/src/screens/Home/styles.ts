import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    form:{
        display: 'flex',
        alignItems: 'center',
        marginTop: -27,
        flexDirection:'row',
        paddingHorizontal: 24,

       
    },
    taskInput:{
        flex: 1,
        height: 52,
        backgroundColor: theme.colors.gray500,
        padding: 16,
        borderRadius: 6,
        color: theme.colors.white,
        fontFamily: theme.fonts.InterRegular,
        fontSize: 16
    },
    taskButton:{
        height: 52,
        width: 52,
        backgroundColor: theme.colors.blue,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4
    },
    taksContainer:{
        paddingHorizontal: 24
    },
    tasksCreated:{
        marginTop: 32,
        flexDirection: 'row',
       
    },
    tasksCreatedLabel:{
        color: theme.colors.blueLight,
        fontSize: 14,
        fontFamily: theme.fonts.InterBold,
        marginRight: 8
        
        
    },
    tasksCounterContainer:{
        backgroundColor: theme.colors.gray500,
        height:19,
        width: 25,
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 12.5
        
    },
    tasksCounter:{
        color: theme.colors.white,
        fontSize: 12,
        fontFamily: theme.fonts.InterBold
    }
    
        
})