import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Pricing from "@/pages/Pricing";
import TableReservations from "@/pages/features/table-reservations";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Routes() {
  const { i18n } = useTranslation();

  // Handle language based on route
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/fr')) {
      i18n.changeLanguage('fr');
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/fr" component={Home} />
      <Route path="/terms" component={Terms} />
      <Route path="/fr/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/fr/privacy" component={Privacy} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/fr/pricing" component={Pricing} />
      <Route path="/en/features/table-reservations" component={TableReservations} />
      <Route path="/fr/features/table-reservations" component={TableReservations} />
    </Switch>
  );
} 