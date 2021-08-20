import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import "./styles.css";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { BrowserRouter, Route } from "react-router-dom";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Router } from "./router/Router";

const user = {
  name: "seita",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "seitarohahsimoto@icloud.com",
  phone: "080-47783-1553",
  company: {
    name: "cama"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
