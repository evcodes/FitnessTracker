import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Screens
import Home from '../screens/Home/Home'
import NutritionHome from '../screens/Nutrition/NutritionHome'
import WorkoutHome from '../screens/Workouts/WorkoutHome'
import { white,lightGrey} from '../res/colors'

const RouteConfigs = 
{
    Home: {
            screen: Home,
            navigationOptions: ({navigation}) => 
            ({tabBarIcon: ({ focused }) => (
                <Icon
                  name = "home"
                  size={22}
                  color={focused ? white : lightGrey}
                />
              ),
            })
        },
      Nutrition: {
        screen: NutritionHome,
        navigationOptions: ({navigation}) => 
          ({tabBarIcon: ({ focused }) => (
            <Icon
              name = "emoticon-happy-outline"
              size={22}
              color={focused ? white : lightGrey}
            />
            ),
          })
        },
    Workouts: { 
      screen: WorkoutHome,
      navigationOptions: ({navigation}) =>
      ({tabBarIcon: ({focused}) => (
        <Icon name = "heart"
        size = {22}
        color = {focused ? white : lightGrey}/>
      )
    })
  }
}

const MaterialBottomTabNavigatorConfig = {
    initialRouteName: 'Home',
    activeColor: '#fff',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#00bdff' },
}

export default createMaterialBottomTabNavigator(
       RouteConfigs, MaterialBottomTabNavigatorConfig
    )
