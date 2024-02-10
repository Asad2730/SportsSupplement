import { StyleSheet, Image, View, TextInput } from "react-native";
import { colors } from "../../utils/colors";
import { useField } from "../../hooks/useField";
import { CustomBtn } from "../../components/CustomBtn";
import { customStyles } from "../../utils/styles";
import { useDispatch,useSelector } from "react-redux";
import { login, signUp } from "../../store/auth/authApiRequest";


export default function Auth({ navigation }) {
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const email = useField("");
  const password = useField("");

  const onSubmit = (title) => {
    return () => { 
      if (email.value !== "" && password.value !== "") {
        let obj = { email: email.value, password: password.value };
        switch (title) {
          case "Login": {
            signIn(obj);
            break;
          }
          case "Create": {
            signup(obj);
            break;
          }
          default:
            break;
        }
      }
    };
  };
  

  const signup = (obj) => {
    dispatch(signUp(obj));
    email.reset();
    password.reset();
    if(error != null){
      console.error('error',error)
    }
  };

  const signIn = (obj) => {
    dispatch(login(obj));
    email.reset();
    password.reset();
    if(error != null){
      console.error('error',error)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
      </View>
      <View style={styles.componenets_container}>
        <TextInput
          style={customStyles.input}
          placeholder="user@gmail.com"
          value={email.value}
          onChangeText={email.onChangeText}
        />
        <TextInput
          style={customStyles.input}
          placeholder="your password"
          secureTextEntry={true}
          value={password.value}
          onChangeText={password.onChangeText}
        />

        <CustomBtn text={'Login'} onClick={onSubmit('Login')} />
        <CustomBtn text={'Create Account'} onClick={onSubmit('Create')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo_container: {
    flex: 0.25,
  },
  componenets_container: {
    flex: 0.75,
    backgroundColor: colors.primary_color,
  },
  image: {
    width: "auto",
    height: "100%",
  },
});
