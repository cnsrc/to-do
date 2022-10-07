import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Feather } from '@expo/vector-icons';
import { theme } from "../../styles/theme";

interface TaskProps {
    id: string,
    description: string,
}


export function Task (props:  TaskProps){
    return(
        <View style= {styles.taskContainer}>

            <Text style ={styles.description}>
                {props.description}
            </Text>

            <TouchableOpacity style={styles.deleteButton}>
                <Feather name="trash-2" size={14} color={theme.colors.gray300} />
            </TouchableOpacity>
            
        </View>
    )
}