import Guitar from './guitar'

const ListGuitars = ({guitars}) => {
    return (
        <>
            <h2 className="heading">Nuestra Coleeción</h2>
            {guitars?.length && (
                <div className="guitarras-grid">
                    {guitars.map(guitar => (
                        <Guitar
                            key={guitar?.attributes.url}
                            guitar={guitar?.attributes}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default ListGuitars
