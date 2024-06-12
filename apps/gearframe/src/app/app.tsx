import { ChakraProvider } from '@chakra-ui/react';
import Homepage from '../pages/homepage';

export function App() {
  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
