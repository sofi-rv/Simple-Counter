import React from "react"

const SecondsCounter = (props) => {
    const oneDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let ultimaPosicion = String(segundos)[longitud - 1]
        return ultimaPosicion;
    }
    const secondDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let ultimaPosicion = String(segundos)[longitud - 2]
        return ultimaPosicion;
    }
    const thirdDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let ultimaPosicion = String(segundos)[longitud - 3]
        return ultimaPosicion;
    }
    const fourthDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let ultimaPosicion = String(segundos)[longitud - 3]
        return ultimaPosicion;
    }
    const fifthDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let ultimaPosicion = String(segundos)[longitud - 3]
        return ultimaPosicion;
    }
    const sixthDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let ultimaPosicion = String(segundos)[longitud - 3]
        return ultimaPosicion;
    }

    return (
        <>
            <div className="container">
                <div className="row bg bg-dark row-counter">
                    <div className="col clock text-light text-center"><i class="far fa-clock fa-flip-horizontal"></i></div>
                    <div className="col six text-light">
                    <h1>{props.secondSix ? sixthDigit(props.secondSix) : "0"}</h1>
                    </div>
                    <div className="col five text-light">
                    <h1>{props.secondFive ? fifthDigit(props.secondFive) : "0"}</h1>
                    </div>
                    <div className="col four text-light">
                    <h1>{props.secondFour ? fourthDigit(props.secondFour) : "0"}</h1>
                    </div>
                    <div className="col three text-light">
                    <h1>{props.secondThree ? thirdDigit(props.secondThree) : "0"}</h1>
                    </div>
                    <div className="col two text-light">
                        <h1>{props.secondTwo ? secondDigit(props.secondTwo) : "0"}</h1>
                    </div>
                    <div className="col one text-light">
                        <h1>{props.secondOne ? oneDigit(props.secondOne) : "0"}</h1>
                    </div>
                </div>
            </div>




        </>

    )
};

export default SecondsCounter;