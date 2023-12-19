import { AuthProvider } from "./autenticacion"
import { AppRouter } from "./router/AppRouter";

const HeroesApp = () => {
  return (
    <AuthProvider>

         <AppRouter/>

    </AuthProvider>
      
    
  )
}

export default HeroesApp;
