import { MobileSidebar } from "./mobile-sidebar";
import { NavbarRoutes } from "./navbar-routes";

export const Navbar = () => {
    return (
        <div className="p-4 border-b h-[80px] flex items-center bg-white shadow-sm">
           <MobileSidebar />
           <NavbarRoutes />
        </div>
    )
}