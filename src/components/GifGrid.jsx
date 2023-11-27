import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            {
                isLoading && (<p>Cargando...</p>)
            }
            <h3>{ category }</h3>
            <div className='card-grid'>
                {
                    images.map( image => (
                        <GifGridItem 
                            key={ image.id } 
                            { ...image } //* para mandar todos los atributos de image 
                        />
                    ))
                }
            </div>
        </>
    )
}
