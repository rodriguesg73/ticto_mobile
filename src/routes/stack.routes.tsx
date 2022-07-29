import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Transaction } from '../screens/Transaction';


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator initialRouteName='Home'>
      <stackRoutes.Screen 
        name="Home"
        component={Home}  
      />
      <stackRoutes.Screen 
        name="Transaction"
        component={Transaction}  
      />
    </stackRoutes.Navigator>
);

export default AppRoutes;