import React from 'react';
import { Icon } from 'react-native-elements'
import { white, lightGrey} from './colors'

export const Home = (props) => {<Icon name = "home" size={22} color={props.focused ? white : lightGrey}/>}