import React, {useState} from 'react';

const Slider = ({fotos}) => {
    
    const [imageNumber, setImageNumber] = useState(0);

    const nextImg = () => {
        if(imageNumber - 1 === 2 - 1) {
            setImageNumber(0);
            console.log(0)
        } else {
            setImageNumber(imageNumber + 1);
        }
        console.log(imageNumber)
    }

    const prevImg = () => {
        if(imageNumber === 0) {
            setImageNumber(2);
            console.log(imageNumber)
        } else {
            setImageNumber(imageNumber - 1);
            console.log(imageNumber)
        }
    }

  return (
    <div className='slider'>
        <div>{fotos.map(foto => {
            return (
                <img 
                    key={foto.id}
                    src={foto}
                    // alt={property.direccion}
                    alt="nombre"
                />
            );
            // console.log(foto)
        })}
        </div>
        <div>
            <button onClick={prevImg}>-</button>
            <p>{imageNumber}</p>
            <button onClick={nextImg}>+</button>
        </div>
    </div>
  )
}

export default Slider;