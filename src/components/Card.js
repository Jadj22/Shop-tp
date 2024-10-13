const Card = ({ nom, prix, image }) => {
    return (
        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 m-4 max-w-xs">
          {/* Image en haut avec effet de zoom au survol */}
          <div className="relative">
            <img 
              src={image} 
              className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300" 
              alt={nom} 
            />
          </div>

          {/* Contenu de la carte */}
          <div className="p-6 bg-white">
            {/* Nom du produit */}
            <h2 className="text-xl font-medium mb-2 text-gray-800">{nom}</h2>

            {/* Prix du produit */}
            <div className="text-2xl font-bold text-yellow-500 mb-4">{prix}</div>

            {/* Bouton ajouter au panier */}
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
              Ajouter au panier
            </button>
          </div>
        </div>
    );
};

export default Card;
