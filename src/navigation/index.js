import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ViewCards from '../screens/ViewCards'
import Fruit from '../screens/Fruit'

import AddCards from '../screens/AddCards'

const StackNavigator = createStackNavigator(
    {
      ViewCards: {
        screen: ViewCards
      },
      AddCards: {
        screen: AddCards
      },
      Fruit: {
        screen: Fruit
      }
    },
    {
      initialRouteName: 'ViewCards',
      headerMode: 'none',
      mode: 'modal'
    }
  )
  

export default createAppContainer(StackNavigator)