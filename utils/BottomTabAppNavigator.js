
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from '../screens/Home/Home';
import NutritionHome from '../screens/Nutrition/NutritionHome';
import WorkoutHome from '../screens/Workouts/WorkoutHome';

const RouteConfigs = 
{
    Home: { screen: Home },
    Nutrition: { screen: NutritionHome },
    Workouts: { screen: WorkoutHome },
}

const MaterialBottomTabNavigatorConfig = {
    initialRouteName: 'Home',
    activeColor: '#fff',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
}

export default createMaterialBottomTabNavigator(
       RouteConfigs, MaterialBottomTabNavigatorConfig
    )
