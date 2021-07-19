import classes from "./MealItem.module.css";

function MealItem(props) {
    return <div className={classes.meal}>{props.children}</div>;
}

export default MealItem;
