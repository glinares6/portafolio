import { FC }  from 'react';


const possibleSize = ['XS','S','M','L','XL','XXL'];


interface Props  {
    selectedSize: string;
    onSizeChange: ( size: string ) => void;


}


export  const SizeSelector:FC<Props>  = ({ selectedSize , onSizeChange }) => {
    return  (
        <div style={{ display:'flex'}}>
            {
                possibleSize.map( size =>(
                    <button  
                    key={ size } 
                    className={ selectedSize === size ? 'active': ''  }
                    onClick= { () => onSizeChange( size ) }

                    >
                    { size }
                </button>
                ))
            }
        </div>
    )
 }