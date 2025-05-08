import { View, DimensionValue } from 'react-native';
import { useTheme } from '@react-navigation/native';
type SeparatorProps = {
  height?: DimensionValue;
  width?: DimensionValue;
};
const Separator = ({ height, width }: SeparatorProps) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        height: height ?? 1,
        width: width ?? '100%',
        backgroundColor: colors.border
      }}
    />
  );
};
export default Separator;
