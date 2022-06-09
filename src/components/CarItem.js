const CarItem = (props) => {
    // HIER könnte Ihr Vanilla JS stehen!
    console.log(props);// in der Konsole ist jetzt ein Objekt! PROPS übergeben IMMER Objekte! YEAH
    console.log(props.car);

    return (
        <div>
            <h2>{props.car}</h2>
            <h2>{props.carModel}</h2>
            <h2>{props.carYear}</h2>
        </div>
    );
}

export default CarItem;