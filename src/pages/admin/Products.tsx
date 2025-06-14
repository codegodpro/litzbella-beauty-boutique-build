
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Edit, Trash2, Eye, Package, Home, Settings } from "lucide-react";

const initialProducts = [
  { id: 1, name: "Classic Lash Extensions", price: 45, stock: 25, status: "Active" },
  { id: 2, name: "Volume Lash Set", price: 65, stock: 18, status: "Active" },
  { id: 3, name: "Magnetic Lashes", price: 25, stock: 32, status: "Active" },
  { id: 4, name: "Lash Serum", price: 35, stock: 12, status: "Low Stock" },
  { id: 5, name: "Makeup Palette", price: 55, stock: 0, status: "Out of Stock" },
];

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  status: string;
};

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "", status: "Active" });
  const [editProduct, setEditProduct] = useState({ id: 0, name: "", price: "", stock: "", status: "Active" });
  const { toast } = useToast();

  // Status label UI
  function getStatus(stock: number) {
    if (stock === 0) return "Out of Stock";
    if (stock < 15) return "Low Stock";
    return "Active";
  }

  // Add product
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      toast({ title: "All fields are required", description: "Please fill out all fields." });
      return;
    }
    const priceNum = Number(newProduct.price);
    const stockNum = Number(newProduct.stock);

    if (isNaN(priceNum) || isNaN(stockNum)) {
      toast({ title: "Invalid number", description: "Price and stock must be valid numbers." });
      return;
    }

    const status = getStatus(stockNum);

    setProducts([
      ...products,
      {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name: newProduct.name,
        price: priceNum,
        stock: stockNum,
        status
      }
    ]);
    setAddDialogOpen(false);
    setNewProduct({ name: "", price: "", stock: "", status: "Active" });
    toast({ title: "Product Added", description: `${newProduct.name} has been added.` });
  };

  // Edit (update) product
  const handleOpenEdit = (product: Product) => {
    setEditProduct({ ...product, price: String(product.price), stock: String(product.stock) });
    setEditDialogOpen(true);
  };

  const handleUpdateProduct = () => {
    if (!editProduct.name || !editProduct.price || !editProduct.stock) {
      toast({ title: "All fields are required", description: "Please fill out all fields." });
      return;
    }

    const priceNum = Number(editProduct.price);
    const stockNum = Number(editProduct.stock);

    if (isNaN(priceNum) || isNaN(stockNum)) {
      toast({ title: "Invalid number", description: "Price and stock must be valid numbers." });
      return;
    }

    const status = getStatus(stockNum);

    setProducts(products.map(p => p.id === editProduct.id
      ? { ...p, name: editProduct.name, price: priceNum, stock: stockNum, status }
      : p));
    setEditDialogOpen(false);
    toast({ title: "Product Updated", description: `${editProduct.name} has been updated.` });
  };

  // Remove Product
  const handleOpenRemove = (product: Product) => {
    setSelectedProduct(product);
    setRemoveDialogOpen(true);
  };

  const handleRemoveProduct = () => {
    if (!selectedProduct) return;
    setProducts(products.filter(p => p.id !== selectedProduct.id));
    toast({ title: "Product Removed", description: `${selectedProduct.name} has been deleted.` });
    setRemoveDialogOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Card className="mb-8 bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg">
          <CardContent className="p-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="flex items-center gap-2 hover:text-primary transition-colors text-gray-700 dark:text-gray-300">
                    <Home className="w-4 h-4" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin" className="flex items-center gap-2 hover:text-primary transition-colors text-gray-700 dark:text-gray-300">
                    <Settings className="w-4 h-4" />
                    Admin
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-primary">Products</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-yellow-600 bg-clip-text text-transparent mb-2">
              Product Management
            </h1>
            <p className="text-gray-700 dark:text-gray-300">Manage your product catalog and inventory</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-yellow-600" onClick={() => setAddDialogOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        {/* Products Table */}
        <Card className="bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Package className="w-5 h-5" />
              All Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-700 dark:text-gray-300">Product Name</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Price</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Stock</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Status</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} className="hover:bg-orange-100/70 dark:hover:bg-gray-700/50">
                    <TableCell className="font-medium text-gray-900 dark:text-white">{product.name}</TableCell>
                    <TableCell className="text-gray-900 dark:text-white">
                      ${product.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-gray-900 dark:text-white">{product.stock}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {product.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="hover:bg-orange-200/70 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" onClick={() => handleOpenEdit(product)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-orange-200/70 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300" onClick={() => handleOpenRemove(product)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {products.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6 text-gray-600 dark:text-gray-400">
                      No products found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add Product Dialog */}
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Product Name"
                value={newProduct.name}
                onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <Input
                placeholder="Price"
                value={newProduct.price}
                type="number"
                onChange={e => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              <Input
                placeholder="Stock"
                value={newProduct.stock}
                type="number"
                onChange={e => setNewProduct({ ...newProduct, stock: e.target.value })}
              />
            </div>
            <DialogFooter>
              <Button onClick={handleAddProduct}>Add</Button>
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Product Dialog */}
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Product Name"
                value={editProduct.name}
                onChange={e => setEditProduct({ ...editProduct, name: e.target.value })}
              />
              <Input
                placeholder="Price"
                type="number"
                value={editProduct.price}
                onChange={e => setEditProduct({ ...editProduct, price: e.target.value })}
              />
              <Input
                placeholder="Stock"
                type="number"
                value={editProduct.stock}
                onChange={e => setEditProduct({ ...editProduct, stock: e.target.value })}
              />
            </div>
            <DialogFooter>
              <Button onClick={handleUpdateProduct}>Update</Button>
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Remove Product Dialog */}
        <Dialog open={removeDialogOpen} onOpenChange={setRemoveDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Remove Product</DialogTitle>
              <DialogDescription>
                Are you sure you want to remove <span className="font-semibold">{selectedProduct?.name}</span>? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="destructive" onClick={handleRemoveProduct}>Remove</Button>
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default AdminProducts;

