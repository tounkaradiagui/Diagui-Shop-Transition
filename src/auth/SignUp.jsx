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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";

// 🔐 Schéma de validation avec Zod
const signInSchema = z.object({
  name: z.string({ required_error: "Le nom et prénom sont requis." }),

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

const SignUp = () => {
  const navigation = useNavigation();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  console.log("Form Values", JSON.stringify(errors, null, 2));

  const onSubmit = (data) => console.log(data);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Inscription</Text>
      <View style={styles.form}>
        <CustomInput
          control={control}
          autoFocus
          name="name"
          placeholder="Nom et Prénom"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <CustomInput
          control={control}
          name="email"
          placeholder="Adresse email"
          keyboardType="email-address"
          autoComplete="email"
          returnKeyType="next"
          blurOnSubmit={false}
          inputRef={emailRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <CustomInput
          control={control}
          name="password"
          placeholder="Mot de passe"
          secureTextEntry
          inputRef={passwordRef}
          returnKeyType="done"
        />
        {errors.root && (
          <Text style={{ color: "red", marginTop: 5 }}>
            {errors.root.message}
          </Text>
        )}
      </View>

      <CustomButton title="S'inscrire" onPress={handleSubmit(onSubmit)} />

      <Text>
        <Text style={styles.text}>Déjà inscris ? </Text>
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          Se Connecter
        </Text>
      </Text>

      <Text style={styles.agreementText}>
        En vous inscrivant, vous acceptez nos{" "}
        <Text
          style={styles.link}
          onPress={() => {
            /* lien vers Conditions */
          }}
        >
          Conditions d'utilisation
        </Text>{" "}
        et notre{" "}
        <Text
          style={styles.link}
          onPress={() => {
            /* lien vers Politique */
          }}
        >
          Politique de confidentialité
        </Text>
        .
      </Text>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

export default SignUp;

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
  agreementText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    lineHeight: 20,
  },
  link: {
    color: "#007BFF",
    fontWeight: "600",
  },
});
