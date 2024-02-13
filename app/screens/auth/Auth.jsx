import { StyleSheet, Image, View, TextInput } from "react-native";
import { colors } from "../../utils/colors";
import { useField } from "../../hooks/useField";
import { CustomBtn } from "../../components/CustomBtn";
import { customStyles } from "../../utils/styles";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../../store/auth/authApiRequest";

export default function Auth({ navigation }) {
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const email = useField("");
  const password = useField("");

  const isValid = () => {
    email.value = 'asadsajjad777@gmail.com'
    password.value = '123';
    if (email.value !== "" && password.value !== "") {
      let obj = { email: email.value, password: password.value };
      return obj;
    } else {
      return null;
    }
  };

  const create = () => {
    let obj = isValid();
    dispatch(signUp(obj));
    if (obj !== null) {
      email.reset();
      password.reset();
      if (error != null) {
        console.error("error", error);
      }
    }
  };

  const signIn = () => {
    let obj = isValid();
    if (obj !== null) {
      dispatch(login(obj));
      email.reset();
      password.reset();
      if (error != null) {
        console.error("error", error);
      }
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

        <CustomBtn text={"Login"} onClick={signIn} />
        <CustomBtn text={"Create Account"} onClick={create} />
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
