import { ActivityIndicator, View } from "react-native";
import { theme } from "../../styles/theme";
import { styles } from "./styles";

export function Loader (){
    return( 
    <View style={styles.loaderContainer}>
        <ActivityIndicator size={"large"} color={theme.colors.blue}/>
    </View>

    )
}
    