import {Text , TextStyle} from 'react-native';

interface Props extends TextStyle {
  value : String
}

const MyText = ({value,color,fontSize,...a}: Props) => {
  return (
    <Text style={{
      color,
      fontSize,
      fontWeight: a.fontWeight,
      borderWidth: a.borderWidth,
      ...a
    }}>
      {value}
    </Text>
  );
}

export default MyText;