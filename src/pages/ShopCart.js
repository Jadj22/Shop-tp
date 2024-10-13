import ShopData from "../dataFiles/ShopData";
import useTitle from "../hooks/useTitle";

const ShopCart = () => {


  useTitle('Cart')

  // const { nom, image, prix } = ShopData; // ignore la propriété id


  useTitle('Cart');
  return (
    <main className="p-6">
      <h1 className="text-center text-xl mb-6">
        Nombre de carte: {ShopData.length}
      </h1>
      <div className="space-y-6">
        {ShopData.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
            <img
              src={item.image}
              alt={item.nom}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1 ml-6">
              <h2 className="text-lg font-semibold">{item.nom}</h2>
              <p className="text-gray-600">${item.prix}</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              supprimer
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ShopCart
