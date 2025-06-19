import { TextInput, StyleSheet, View, Text } from "react-native";
import { Controller } from "react-hook-form";

export default function CustomInput({
  control,
  name,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoFocus,
  autoComplete,
  inputRef,
  onSubmitEditing,
  blurOnSubmit,
  returnKeyType,
  autoCapitalize = "none",
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, error && styles.inputError]}
            onChangeText={onChange}
            onBlur={onBlur}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={blurOnSubmit}
            returnKeyType={returnKeyType}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            autoCapitalize={autoCapitalize}
            placeholderTextColor="#999"
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#000",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
