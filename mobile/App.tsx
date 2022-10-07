import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';
import { Loader } from './src/components/Loader';



export default function App() {
  const [fontLoader] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <>
      <StatusBar
        backgroundColor='transparent'
        style='light'
        translucent ={true}                                                             


      />
      {
        
        fontLoader === true
          ? (
              <Home/>
            )
            : (
              <Loader/> 

          )
      }
    </>
  );
}

