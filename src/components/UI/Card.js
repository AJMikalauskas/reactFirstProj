import './Card.css';

const Card = (props) => {
    // adds the css class from the expense item class
        // so the css classes for the card components is both the card css and the expense item css
            // This is done by adding the const with the props.className
    const cssClasses = 'card ' + props.className;
    return (
        <div className={cssClasses}>{props.children}</div>
    );
}

export default Card;