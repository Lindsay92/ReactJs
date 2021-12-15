//rfc


export default function footer(props) {

    //condition ternaire
    //si le poids en kilos est sup à 1000kg alors j'affiche higher en rouge
    //sinon lower en vert
    return (
        <footer>
            <p>
                The weight is
                    {
                        props.kilos > 1000
                        ? <span className="red">higher</span>
                        : <span className="green">lower</span>
                    }
                than pone tonne !
            </p>
          
        </footer>
    )
}


