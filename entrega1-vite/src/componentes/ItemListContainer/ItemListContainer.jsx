//Inicio de componente
export const saludar = () => console.log('saludo')

const ItemListContainer = (obj) => {
    return (
        <div>
            Métele fútbol Madariaga
            <br />
            <label>{obj.saludo}</label>
        </div>
    )
}

export default ItemListContainer
//Termino de componente