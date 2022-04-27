import { useState } from "react";


export const Img = props => {
    const [title, setTitle] = useState('')
    const [heart, setHeart] = useState(true)
    const [stockLevel, setStockLevel] = useState('stockLevel')

    const overlayStyles = {
        position: 'absolute',
        bottom: '.5rem',
        left: '.5rem',
        fontSize: '2rem'
    }

    const showTitle = () => {
        setTitle(props.image.title)
    }
    const hideTitle = () => {
        setTitle('')
    }

    // const showStockLevel= () => {
    //     setStockLevel(props.stockLevel)
    //     return (
    //         <figcaption style={overlayStyles}>{stockLevel === 0 ? 'Not Available' : ''}
    //         </figcaption>
    //     )
    // }

    return (
        <figure
            style={{ position: 'relative' }}
            onClick={() => setHeart(!heart)}
            onMouseEnter={showTitle}
            onMouseLeave={hideTitle}
        >
            <img src={props.image.imageSrc} alt={props.image.title} />


            <figcaption style={overlayStyles}>{heart ? '❤️' : ''} {title} </figcaption>
        </figure>
    )
}

export default Img;
