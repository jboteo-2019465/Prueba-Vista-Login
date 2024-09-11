import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import './App.css'

export default function LoginView() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Iniciar sesión con:", username, password)
  }

  return (
    <div  className="h-screen flex items-center justify-center bg-white p-4">
      <Card className=" max-w-md border-none shadow-2xl justify-center">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7jcejxSMkCQMv2acJfuZ6ovdclu6tr.png"
              alt="Residenciales Amayito Logo"
              width={95}
              height={95}
            />
          </div>
          <CardTitle className="text-2xl font-bold text-black">Residenciales Amayito</CardTitle>
          <p className="text-lg text-black">Bienvenidos</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-black">Usuario</Label>
                <Input 
                  id="username" 
                  type="text" 
                  placeholder="Ingrese su usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required 
                  className="border-orange-300 focus:border-orange-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-black">Contraseña</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className="border-orange-300 focus:border-orange-500"
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-6 bg-black hover:bg-gray-800 text-white">
              Iniciar sesión
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <a variant="link" className="text-gray-600 hover:text-gray-800 hover:underline">
            ¿Olvidó su contraseña?
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}
