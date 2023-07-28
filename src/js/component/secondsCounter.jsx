import React from "react"

const SecondsCounter = (props) => {
    const oneDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let primeraPosicion = String(segundos)[longitud - 1]
        return primeraPosicion;
    }
    const secondDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let segundaPosicion = String(segundos)[longitud - 2]
        return segundaPosicion;
    }
    const thirdDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let terceraPosicion = String(segundos)[longitud - 3]
        return terceraPosicion;
    }
    const fourthDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let cuartaPosicion = String(segundos)[longitud - 4]
        return cuartaPosicion;
    }
    const fifthDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let quintaPosicion = String(segundos)[longitud - 5]
        return quintaPosicion;
    }
    const sixthDigit = (tiempo) => {
        let segundos = tiempo
        let longitud = String(segundos).length
        let sextaPosicion = String(segundos)[longitud - 6]
        return sextaPosicion;
    }

    return (
        <>
            <div className="container">
                <div className="row mt-2 row-counter">
                    <div className=" col text-light text-center border-1 border-start border-secondary border-end clock"><i class="far fa-clock fa-flip-horizontal"></i></div>
                    <div className="col text-light text-center seconds border-1 border-start border-secondary border-end">
                    <h1>{sixthDigit(props.secondSix) > 0 ? sixthDigit(props.secondSix) : "0"}</h1>
                    </div>
                    <div className="col text-light text-center seconds border-1 border-start border-secondary border-end">
                    <h1>{fifthDigit(props.secondFive) > 0 ? fifthDigit(props.secondFive) : "0"}</h1>
                    </div>
                    <div className="col text-light text-center seconds border-1 border-start border-secondary border-end">
                    <h1>{fourthDigit(props.secondFour) > 0 ? fourthDigit(props.secondFour) : "0"}</h1>
                    </div>
                    <div className="col  text-light text-center seconds border-1 border-start border-secondary border-end">
                    <h1>{thirdDigit(props.secondThree) > 0 ? thirdDigit(props.secondThree) : "0"}</h1>
                    </div>
                    <div className="col text-light text-center seconds border-1 border-start border-secondary border-end">
                        <h1>{secondDigit(props.secondTwo) > 0 ? secondDigit(props.secondTwo) : "0"}</h1>
                    </div>
                    <div className="col text-light  text-center seconds border-1 border-start border-secondary border-end">
                        <h1>{oneDigit(props.secondOne) > 0 ? oneDigit(props.secondOne) : "0"}</h1>
                    </div>
                </div>
            </div>

        </>

    )
};

export default SecondsCounter;