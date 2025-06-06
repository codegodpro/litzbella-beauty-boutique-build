
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react";

const AdminProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "Hydrating Face Serum", category: "Skincare", price: "₦18,399.50", stock: 45, status: "Active" },
    { id: 2, name: "Matte Lipstick Set", category: "Makeup", price: "₦11,999.50", stock: 23, status: "Active" },
    { id: 3, name: "Anti-Aging Night Cream", category: "Skincare", price: "₦35,999.50", stock: 12, status: "Low Stock" },
    { id: 4, name: "Vitamin C Brightening Mask", category: "Skincare", price: "₦13,999.50", stock: 0, status: "Out of Stock" },
  ];

  return (
    <div className="min-h-screen bg-white doodle-bg">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Management</h1>
          <p className="text-gray-600">Manage your store's product catalog</p>
        </div>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Products</CardTitle>
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Product</th>
                    <th className="text-left py-3 px-4">Category</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Stock</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{product.name}</td>
                      <td className="py-3 px-4">{product.category}</td>
                      <td className="py-3 px-4">{product.price}</td>
                      <td className="py-3 px-4">{product.stock}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          product.status === 'Active' ? 'bg-green-100 text-green-800' :
                          product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminProducts;
