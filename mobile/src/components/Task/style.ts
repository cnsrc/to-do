import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    taskContainer:{
        backgroundColor: theme.colors.gray500,
        borderRadius: 6,
        padding: 12,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 8
    },
    description: {
        fontFamily: theme.fonts.InterRegular,
        fontSize: 14,
        color: theme.colors.white
        
        
    },
    deleteButton:{

    }
})