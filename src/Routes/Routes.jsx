import { Route, Switch } from "react-router";
import { Home } from "../components/Pages/Home";
import { Apartment } from "../components/Pages/Apartment";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/apartment/:id" component={Apartment} />
    </Switch>
  );
};
