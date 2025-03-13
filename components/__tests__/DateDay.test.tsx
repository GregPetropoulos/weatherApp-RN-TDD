import DateDay from "../DateDay";
import { render } from "@testing-library/react-native";


describe('<DateDay/>',()=>{
  test('component testID',()=>{
    const wrapper = render(<DateDay/>)
    wrapper.getByTestId('DateDayComponent')
  })
})