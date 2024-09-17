import React, { useEffect, useState } from "react";
import { fakeDatabase } from "../../FAKEAPI/fakeUser"; // Ensure this path is correct
import { FolderBase } from "../../FAKEAPI/fakeDatabase"; // Ensure this path is correct
import Navbar from "../../Layout/Navbar";
import { GiPadlock } from "react-icons/gi";
import { FaWhatsappSquare } from "react-icons/fa";

const AdminDash = () => {
  const [holdCon, setHoldCon] = useState([]);
  const [selectedProduce, setSelectedProduce] = useState("all");
  const [selectedCost, setSelectedCost] = useState("");
  const [holdName, setHoldName] = useState("");

  useEffect(() => {
    const user = FolderBase[0]; // Or apply logic to choose a specific user
    if (user) {
      setHoldName(user.username);
    }
  }, [FolderBase]);


  const checkForPrice = (e) => {
    e.preventDefault();

    // filter out
    const filterData = fakeDatabase.sellers.filter((user) => {
      const produceItem = user.produce || {};

      return (
        (selectedProduce === "all" || produceItem.name === selectedProduce) &&
        (selectedCost === "" || produceItem.price === selectedCost)
      );
    });

    const res = filterData.map((user) => ({
      name: user.produce.name || 'N/A',
      price: user.produce.price || 'N/A',
      seller: user.name,
      location: user.location,
      whatsapp: user.whatsapp,
      isPremium: user.premiumUser || false,
    }));

    setHoldCon(res);
  };

  return (
    <div className="w-full max-w-screen">
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 bg-blue-600 text-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome {holdName}!</h2>
        <p> What are you shopping Today ?!</p>
      </div>

      <div className="mt-3">
        <form  onSubmit={checkForPrice} className=" xxs:w-[80%] sm:w-[100%]  xxs:mx-auto xxs:flex xxs:flex-col  sm:flex sm:flex-row sm:justify-center sm:space-x-3 sm:mx-auto">
          <label className="mb-2">
            <span>What do you need?</span>
            <select
              value={selectedProduce}
              onChange={(e) => setSelectedProduce(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            >
              <option value="all">All Produce</option>
              {/* Add more options dynamically if needed */}
              <option value="Yam">Yam</option>
              <option value="Groundnuts">Groundnuts</option>
              <option value="Cocoyam">Cocoyam</option>
              <option value="Rice">Rice</option>
              <option value="Palm Oil">Palm Oil</option>
              <option value="Maize">Maize</option>
              <option value="Onions">Onions</option>
              <option value="Tomatoes">Tomatoes</option>
              <option value="Pepper">Pepper</option>
              <option value="Cassava">Cassava</option>
            </select>
          </label>
          <label>
            <span>Estimated Cost</span>
            <select
              value={selectedCost}
              onChange={(e) => setSelectedCost(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            >
              <option value="">Any Price</option>
              <option value="₦50,000 per tonne">₦50,000 per tonne</option>
              <option value="₦60,000 per tonne">₦60,000 per tonne</option>
              <option value="₦70,000 per tonne">₦70,000 per tonne</option>
              <option value="₦75,000 per tonne">₦75,000 per tonne</option>
              <option value="₦90,000 per tonne">₦90,000 per tonne</option>
              <option value="₦95,000 per tonne">₦95,000 per tonne</option>
              <option value="₦100,000 per tonne">₦100,000 per tonne</option>
              <option value="₦110,000 per tonne">₦110,000 per tonne</option>
              <option value="₦40,000 per tonne">₦40,000 per tonne</option>
              <option value="₦150,000 per 100 litres">₦150,000 per 100 litres</option>
              <option value="₦80,000 per tonne">₦80,000 per tonne</option>
              <option value="₦45,000 per 1,000 baskets">₦45,000 per 1,000 baskets</option>
              <option value="₦50,000 per 1,000 baskets">₦50,000 per 1,000 baskets</option>
              <option value="₦60,000 per 1,000 baskets">₦60,000 per 1,000 baskets</option>
            </select>
          </label>
          <button
            type="submit"
            className="mt-4 px-4 xxs:py-2 md:py-0  bg-green-500 text-white rounded hover:bg-green-600"
          >
            Search
          </button>
        </form>
      </div>

      <div className="w-full xxs:max-w-max  sm:max-w-md mx-auto mt-6 ">
        <h3 className="text-center text-xl font-bold">Available Sellers</h3>
        {holdCon.length > 0 ? 
        <div className="mt-2">
            {holdCon.map((user, index) =>{
              return <div className="border border-blue-600 rounded-lg py-2 mb-2 flex justify-evenly" key={index}>
                 <h2>{user.name}</h2>
                 <h2 className="px-1">{user.price}</h2>

                 <h2 className="flex justify-center items-center"><span><FaWhatsappSquare color="green" /></span>{user.whatsapp}</h2>
                 <>{user.isPremium && <GiPadlock size={'20px'} color="red" /> }</>
              </div>
            })}
        </div>
        
      :(<p></p>)}
      </div>
    </div>
  );
};

export default AdminDash;
