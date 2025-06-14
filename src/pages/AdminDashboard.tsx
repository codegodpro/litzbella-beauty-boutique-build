
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { useNavigate } from "react-router-dom";
import { 
  ShoppingBag, 
  DollarSign, 
  Package, 
  Users, 
  TrendingUp, 
  Settings, 
  FileText, 
  CreditCard, 
  Truck, 
  BarChart3,
  PieChart,
  Activity,
  Globe,
  Palette,
  Shield,
  Eye,
  UserCog,
  Home
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart as RechartsPieChart, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer 
} from "recharts";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { 
      title: "Total Orders", 
      value: "1,234", 
      change: "+12%", 
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Revenue", 
      value: "$45,678", 
      change: "+8%", 
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    { 
      title: "Products", 
      value: "567", 
      change: "+5%", 
      icon: <Package className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    { 
      title: "Customers", 
      value: "2,345", 
      change: "+15%", 
      icon: <Users className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const managementSections = [
    {
      title: "Product Management",
      description: "Manage inventory, pricing, and product details",
      items: [
        { title: "All Products", path: "/admin/products", icon: <Package className="w-5 h-5" /> },
        { title: "Categories", path: "/admin/categories", icon: <BarChart3 className="w-5 h-5" /> },
        { title: "Inventory", path: "/admin/inventory", icon: <Activity className="w-5 h-5" /> },
      ]
    },
    {
      title: "Order Management",
      description: "Handle orders, shipping, and customer requests",
      items: [
        { title: "All Orders", path: "/admin/orders", icon: <ShoppingBag className="w-5 h-5" /> },
        { title: "Shipping", path: "/admin/shipping", icon: <Truck className="w-5 h-5" /> },
        { title: "Returns", path: "/admin/returns", icon: <TrendingUp className="w-5 h-5" /> },
      ]
    },
    {
      title: "Customer Management",
      description: "Manage customer accounts and support",
      items: [
        { title: "All Customers", path: "/admin/customers", icon: <Users className="w-5 h-5" /> },
        { title: "User Profiles", path: "/admin/profiles", icon: <UserCog className="w-5 h-5" /> },
        { title: "Support Tickets", path: "/admin/support", icon: <FileText className="w-5 h-5" /> },
      ]
    },
    {
      title: "Payment & Finance",
      description: "Handle payments, refunds, and financial reports",
      items: [
        { title: "Payment Methods", path: "/admin/payment-methods", icon: <CreditCard className="w-5 h-5" /> },
        { title: "Transactions", path: "/admin/transactions", icon: <DollarSign className="w-5 h-5" /> },
        { title: "Financial Reports", path: "/admin/finance", icon: <PieChart className="w-5 h-5" /> },
      ]
    },
    {
      title: "Content Management",
      description: "Manage pages, content, and website settings",
      items: [
        { title: "Pages", path: "/admin/pages", icon: <FileText className="w-5 h-5" /> },
        { title: "Website Settings", path: "/admin/settings", icon: <Globe className="w-5 h-5" /> },
        { title: "Design & Theme", path: "/admin/design", icon: <Palette className="w-5 h-5" /> },
      ]
    },
    {
      title: "System Settings",
      description: "Configure system preferences and security",
      items: [
        { title: "General Settings", path: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
        { title: "Security", path: "/admin/security", icon: <Shield className="w-5 h-5" /> },
        { title: "Analytics", path: "/admin/analytics", icon: <Eye className="w-5 h-5" /> },
      ]
    }
  ];

  // Chart data
  const revenueData = [
    { month: "Jan", revenue: 4000, orders: 240 },
    { month: "Feb", revenue: 3000, orders: 198 },
    { month: "Mar", revenue: 5000, orders: 300 },
    { month: "Apr", revenue: 4500, orders: 278 },
    { month: "May", revenue: 6000, orders: 389 },
    { month: "Jun", revenue: 5500, orders: 349 }
  ];

  const productCategoryData = [
    { name: "Electronics", value: 400, color: "#FFD700" },
    { name: "Clothing", value: 300, color: "#FFA500" },
    { name: "Books", value: 200, color: "#FF8C00" },
    { name: "Home", value: 100, color: "#FF7F50" }
  ];

  const chartConfig = {
    revenue: { label: "Revenue", color: "hsl(var(--primary))" },
    orders: { label: "Orders", color: "hsl(var(--secondary))" }
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
                  <BreadcrumbPage className="font-semibold text-primary">Admin Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>

        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-yellow-600 bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-700 dark:text-gray-300">Manage your Litzbella store with comprehensive tools</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <Card className="bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                <TrendingUp className="w-5 h-5 text-primary" />
                Revenue & Orders Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="orders" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Product Categories Chart */}
          <Card className="bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                <PieChart className="w-5 h-5 text-primary" />
                Product Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <RechartsPieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <RechartsPieChart data={productCategoryData} cx="50%" cy="50%" outerRadius={100}>
                    {productCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsPieChart>
                </RechartsPieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {managementSections.map((section, sectionIndex) => (
            <Card 
              key={sectionIndex} 
              className="group bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${sectionIndex * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {section.title}
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300">{section.description}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <Button
                    key={itemIndex}
                    variant="ghost"
                    className="w-full justify-start h-auto p-4 bg-orange-50/80 dark:bg-gray-700/50 hover:bg-gradient-to-r hover:from-primary/10 hover:to-yellow-500/10 hover:border-primary/20 border border-orange-200/50 dark:border-transparent transition-all duration-300 group/item"
                    onClick={() => navigate(item.path)}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <span className="font-medium text-left text-gray-900 dark:text-white">{item.title}</span>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
