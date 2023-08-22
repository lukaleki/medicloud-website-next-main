import React from "react";
import { ThemeProvider} from "./themeContext";
import Body from "@/components/body";

export default function Home() {

  return (
    <ThemeProvider>
      <Body />
    </ThemeProvider>
  );
}
