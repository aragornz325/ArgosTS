import { useNavigation as useNativeNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/RoutesTypes';
import { StackNavigationProp } from '@react-navigation/stack';

type Navigation = StackNavigationProp<RootStackParamList>;

export const useNavigation = () => useNativeNavigation<Navigation>();