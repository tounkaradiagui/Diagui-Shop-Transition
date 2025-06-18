import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomInput from "@/components/CustomInput";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "@/components/CustomButton";
import GoogleSignIn from "@/components/GoogleSignIn";
import Divider from "@/components/Divider";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// 🔐 Schéma de validation avec Zod
const signInSchema = z.object({
  email: z
    .string({ required_error: "L'email est requis." })
    .email({ message: "Adresse e-mail invalide." }),

  password: z
    .string({ required_error: "Le mot de passe est requis." })
    .min(4, { message: "Le mot de passe doit contenir au moins 4 caractères." })
    .max(20, {
      message: "Le mot de passe ne doit pas dépasser 20 caractères.",
    }),
});


const Login = () => {
  const navigation = useNavigation();

   const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

    console.log("Form Values", JSON.stringify(errors, null, 2));

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //   },
  // });

  const onSubmit = (data) => console.log(data);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Connexion</Text>
      <View style={styles.form}>
        <CustomInput
          control={control}
          name="email"
          placeholder="Adresse email"
          autoFocus
          keyboardType="email-address"
          autoComplete="email"
        />
        <CustomInput
          control={control}
          name="password"
          placeholder="Mot de passe"
          secureTextEntry
        />
        {errors.root && (
          <Text style={{ color: "red", marginTop: 5 }}>
            {errors.root.message}
          </Text>
        )}
      </View>

      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        Mot de passe oublié ?
      </Text>

      <CustomButton title="Connexion" onPress={() => handleSubmit()} />

      <Text>
        <Text style={styles.text}>Vous n'avez pas de compte ? </Text>
        <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
          S'inscrire
        </Text>
      </Text>

      <Divider />

      <GoogleSignIn />

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  form: {
    width: "100%",
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: "gray",
    fontWeight: "500",
    marginBottom: 20,
  },
  link: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "crimson",
    alignSelf: "flex-end",
    fontSize: 14,
    marginTop: 5,
  },
});
