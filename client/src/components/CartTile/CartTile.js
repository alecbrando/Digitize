import React from 'react'

export default function CartTile(props) {
    return (
        <div>
            <div>
                <img height="50px" src={props.url} />
            </div>
            <div>
                <div>
                    {props.title}
                </div>
                <div>
                    {props.price}
                </div>
                <div>
                    Remove from Cart
                </div>
            </div>
        </div>
    )
}
