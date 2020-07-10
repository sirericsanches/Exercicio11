import contactListScreen from '../screen/contactListScreen'
import NewContactScreen from '../screen/NewContactScreen'
import ContactDetailScreen from '../screen/ContactDetailScreen'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const ContatosNavigator = createStackNavigator({
    Contatos: contactListScreen,
    NewContact: NewContactScreen,
    ContactDetail: ContactDetailScreen
});

export default createAppContainer(NavigatorContact);

