import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import WishList from './wishlist';
import Cart from './cart';
import Home from './Home';
import { ModelProvider } from '../../contex/modal';

const Tab = createBottomTabNavigator();

export default function DefaultHome(){
    return(
        <ModelProvider>
            <Tab.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ({focused, color}) => <FontAwesome name='home' size={25}/>,
                    // tabBarLabel: null
                }}/>
                <Tab.Screen name="Wishlist" component={WishList} 
                options={{
                    tabBarIcon: ({focused, color}) => <FontAwesome name='heart-o' size={25}/>
                }}/>
                <Tab.Screen name="Cart" component={Cart} 
                options={{
                    tabBarIcon: ({focused, color}) => <FontAwesome name='shopping-cart' size={25}/>
                }}/>
                <Tab.Screen name="Profile" component={WishList} 
                options={{
                    tabBarIcon: ({focused, color}) => <FontAwesome name='user-o' size={25}/>
                }}/>
            </Tab.Navigator>
        </ModelProvider>
    )
}