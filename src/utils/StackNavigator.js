import BottomTabNav from './BottomTabAppNavigator';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
    "Fitness Tracker": {
        screen: BottomTabNav,
    },
});

export default createAppContainer(AppNavigator)