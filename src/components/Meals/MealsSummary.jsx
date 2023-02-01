import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Food you love,
      Food we serve</h1>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal enjoy a delicious lunch or dinner at home.
      </p>
      <p>
      Order food from favourite restaurants near you.
      </p>
    </section>
  );
};
export default MealsSummary;
