import { Img } from './Img';


export const Product = (props) => {
    const {
        name,
        description,
        features,
        price,
        images

    } = props.product

    const addToCart = (product) => {
        console.table(product)
    }


    return (
        <article className="product">
            <h3>{name}</h3>
        
        {/* Sending Data Down to the Img Component to be rendered */}
            <div>
                {images.map((image) => {
                    return <Img key={images.imageId} image={image} />
                })}
            </div>

            
            <p>{description}
            </p>
            <ul>
                {features.map((feature, idx) => {
                    return <li key={idx}>{feature}</li>
                })}
            </ul>
            <p>&pound;{price}</p>
            <div className="promo-blocks__actions">
                <a className="button--anchor">
                    Full Details
                </a>
                <button onClick={addToCart(props.product)}>
                    Add to cart
                </button>
            </div>
        </article>
    )
}

export default Product;