import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import {AntDesign } from "@expo/vector-icons"
import { styles } from "./styles";
import { theme } from "../../styles/theme";
import { Task } from "../../components/Task";
import {useState} from 'react'

interface Task {
    id: string,
    description: string,
}


export function Home(){
    const [tasks, setTasks] = useState<Task[]>([])

    const [description, setDescription] = useState('')

    function createNewTask(){
   

        const newTask  = {
            id: description,
            description: description
        }

        setTasks(state => {
            return [newTask, ...state]
        })

        setDescription('')


    }

    var isDisabled = description === ''

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.form}> 
                <TextInput
                    value={description}
                    onChangeText={event => {setDescription(event)}}
                    placeholder="Adicione uma nova tarefa" 
                    style={styles.taskInput}
                    placeholderTextColor={theme.colors.gray300}
                />
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.taskButton}
                    onPress={createNewTask}
                    disabled={isDisabled}
                    >
                    <AntDesign name="pluscircleo" size={16} color="white"/>
                </TouchableOpacity>
            </View>

            <View style={styles.taksContainer}>

                <View style={styles.tasksCreated}>

                    <Text style={styles.tasksCreatedLabel}>
                        Criadas
                    </Text>
                    <View style={styles.tasksCounterContainer}>
                        <Text style={styles.tasksCounter}>
                            {tasks.length}
                        </Text>
                    </View>
                    
                </View>

                <ScrollView>
                    {
                        tasks.map(task  => {
                            return (
                                <Task
                                    key={task.id}
                                    id={task.id}
                                    description={task.description}
                                />
                            )
                        })
                    } 

                </ScrollView>
                

            </View>
        </View>
    )
}
