
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { 
  Settings as SettingsIcon,
  Home,
  Save,
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";

const AdminSettings = () => {
  const navigate = useNavigate();

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
                    <SettingsIcon className="w-4 h-4" />
                    Admin
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-primary">Settings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-yellow-600 bg-clip-text text-transparent mb-2">
            Website Settings
          </h1>
          <p className="text-gray-700 dark:text-gray-300">Configure your website content and information</p>
        </div>

        <div className="grid gap-8">
          {/* General Information */}
          <Card className="bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Globe className="w-5 h-5" />
                General Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="siteName" className="text-gray-700 dark:text-gray-300">Site Name</Label>
                <Input id="siteName" defaultValue="Litzbella" className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors" />
              </div>
              <div>
                <Label htmlFor="tagline" className="text-gray-700 dark:text-gray-300">Tagline</Label>
                <Input id="tagline" defaultValue="Where beauty meets confidence" className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors" />
              </div>
              <div>
                <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">Description</Label>
                <Textarea 
                  id="description" 
                  defaultValue="At Litzbella, beauty isn't just a look—it's a lifestyle. We are a passionate online cosmetics brand dedicated to enhancing your natural glow with high-quality eyelash extensions and makeup essentials."
                  rows={4}
                  className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors"
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Phone className="w-5 h-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input id="email" defaultValue="info@litzbella.com" className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors" />
              </div>
              <div>
                <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Phone className="w-4 h-4" />
                  Phone/WhatsApp
                </Label>
                <Input id="phone" defaultValue="+2347067805145" className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors" />
              </div>
              <div>
                <Label htmlFor="address" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4" />
                  Address
                </Label>
                <Textarea 
                  id="address" 
                  defaultValue="APT gate 1 Imo Extension, Shop no 6: Balogun Trade fair Lagos, Opp badagry Express way Lagos, Nigeria"
                  rows={3}
                  className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors"
                />
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Facebook className="w-5 h-5" />
                Social Media
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="facebook" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </Label>
                <Input id="facebook" defaultValue="https://www.facebook.com/litz.bella.5?mibextid=ZbWKwL" className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors" />
              </div>
              <div>
                <Label htmlFor="instagram" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </Label>
                <Input id="instagram" defaultValue="https://www.instagram.com/litzbella_world?igsh=djR0eHV6N2ZyYXk0" className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors" />
              </div>
              <div>
                <Label htmlFor="youtube" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Youtube className="w-4 h-4" />
                  YouTube
                </Label>
                <Input id="youtube" defaultValue="https://www.youtube.com/channel/UCeZHeQxjvWXYR4qlF9P3aTg" className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors" />
              </div>
            </CardContent>
          </Card>

          {/* Bank Information */}
          <Card className="bg-white/90 dark:bg-gray-800/70 border-orange-200/50 dark:border-gray-700/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Bank Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="bank1" className="text-gray-700 dark:text-gray-300">Fidelity Bank</Label>
                <Input id="bank1" defaultValue="LITZBELLA Cosmetics Nig LTD - 5600663902" className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors" />
              </div>
              <div>
                <Label htmlFor="bank2" className="text-gray-700 dark:text-gray-300">Access Bank (Dollar)</Label>
                <Input id="bank2" defaultValue="Okenwa Chinweuba - 00 97872929" className="bg-white/90 dark:bg-gray-700/50 border-orange-200 dark:border-gray-600 hover:border-primary focus:border-primary transition-colors" />
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="bg-gradient-to-r from-primary to-yellow-600 hover:from-primary/90 hover:to-yellow-600/90 transition-all">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
