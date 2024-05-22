import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal as keyof typeof theme.fontWeights,
    paddingBottom: 5,
},
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold as keyof typeof theme.fontWeights,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: 'center',
  }
});

export default function StyledText({
  aling = 'left',
  children,
  color = 'primary',
  fontSize = 'body',
  fontWeight = 'normal',
  style,
  ...restOfProps
}: {
  aling?: string,
  children: React.ReactNode,
  color?: string,
  fontSize?: string,
  fontWeight?: string,
  style?: any,
  restOfProps?: any
}) {
  const textStyles = [
    styles.text,
    aling === 'center' && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontWeight === 'bold' && styles.bold,
    fontSize === 'subheading' && styles.subheading,
    style
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
