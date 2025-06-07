
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Plus, Edit, Trash2, Home, Building } from "lucide-react";

const Address = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "home",
      name: "Home",
      fullName: "John Doe",
      phone: "+234 803 123 4567",
      address: "123 Main Street, Victoria Island",
      city: "Lagos",
      state: "Lagos State",
      zipCode: "101001",
      isDefault: true
    },
    {
      id: 2,
      type: "office",
      name: "Office",
      fullName: "John Doe",
      phone: "+234 803 123 4567",
      address: "456 Business Plaza, Ikeja",
      city: "Lagos",
      state: "Lagos State",
      zipCode: "100001",
      isDefault: false
    }
  ]);

  const [newAddress, setNewAddress] = useState({
    type: "home",
    name: "",
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: ""
  });

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const id = addresses.length + 1;
    setAddresses([...addresses, { ...newAddress, id, isDefault: false }]);
    setNewAddress({
      type: "home",
      name: "",
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: ""
    });
    setShowAddForm(false);
  };

  const handleSetDefault = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const handleDeleteAddress = (id: number) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Addresses</h1>
            <Button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Address
            </Button>
          </div>

          {showAddForm && (
            <Card className="mb-8 border border-yellow-200">
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-gray-900">Add New Address</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleAddAddress} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address Type
                      </label>
                      <select
                        value={newAddress.type}
                        onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                      >
                        <option value="home">Home</option>
                        <option value="office">Office</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address Name
                      </label>
                      <Input
                        value={newAddress.name}
                        onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                        placeholder="e.g., Home, Office"
                        required
                        className="focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        value={newAddress.fullName}
                        onChange={(e) => setNewAddress({...newAddress, fullName: e.target.value})}
                        placeholder="John Doe"
                        required
                        className="focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        value={newAddress.phone}
                        onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                        placeholder="+234 803 123 4567"
                        required
                        className="focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <Input
                      value={newAddress.address}
                      onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                      placeholder="123 Main Street"
                      required
                      className="focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <Input
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                        placeholder="Lagos"
                        required
                        className="focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <Input
                        value={newAddress.state}
                        onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                        placeholder="Lagos State"
                        required
                        className="focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code
                      </label>
                      <Input
                        value={newAddress.zipCode}
                        onChange={(e) => setNewAddress({...newAddress, zipCode: e.target.value})}
                        placeholder="101001"
                        required
                        className="focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      Save Address
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {addresses.map((address) => (
              <Card key={address.id} className={`border-2 ${address.isDefault ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yellow-100 rounded-full">
                        {address.type === 'home' ? (
                          <Home className="w-5 h-5 text-yellow-600" />
                        ) : (
                          <Building className="w-5 h-5 text-yellow-600" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900">{address.name}</CardTitle>
                        {address.isDefault && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                            Default
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="text-gray-600 hover:text-yellow-600">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDeleteAddress(address.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">{address.fullName}</p>
                    <p className="text-gray-600">{address.phone}</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <div className="text-gray-700">
                      <p>{address.address}</p>
                      <p>{address.city}, {address.state} {address.zipCode}</p>
                    </div>
                  </div>
                  
                  {!address.isDefault && (
                    <Button
                      variant="outline"
                      className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black"
                      onClick={() => handleSetDefault(address.id)}
                    >
                      Set as Default
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default Address;
