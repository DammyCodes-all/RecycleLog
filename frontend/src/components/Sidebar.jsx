import { useState, useEffect, memo } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BarChart3,
  CircleQuestionMark,
  MapPin,
  ChevronDown,
  Award,
} from "lucide-react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const Sidebar = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth < 900; // md breakpoint
      setIsCollapsed(isMobile);
    };

    // Check on mount
    checkMobile();

    // Optional: Listen for resize events
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = (menuId) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      href: "/analytics",
    },
    {
      id: "map",
      label: "Map",
      icon: MapPin,
      href: "/map",
    },
    {
      id: "rankings",
      label: "Rankings",
      icon: Award,
      href: "/rankings",
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col bg-forest text-mint border-r z-10000 border-gray-200 shadow-sm transition-all duration-300 ease-in-out absolute md:static",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
      style={{ height: "100vh" }}
    >
      {/* Header */}
      <div className={cn(" p-3 flex items-center justify-between  bg-forest ")}>
        {!isCollapsed && (
          <>
            <Link to="/">
              <div className="flex items-center justify-center gap-2">
                <img src="recycle.png" className="size-7" alt="" />
                <p className="text-lg text-mint font-semibold font-outfit">
                  Recyc<span className="text-secondary">Log</span>
                </p>
              </div>
            </Link>
          </>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8 hover:bg-primary/20 border-1 border-mint/30 rounded-lg"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4 text-mint" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-mint" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        <div className="space-y-1 px-2">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.submenu ? (
                <Collapsible.Root
                  open={openMenus[item.id]}
                  onOpenChange={() => toggleMenu(item.id)}
                >
                  <Collapsible.Trigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-left font-normal text-mint hover:bg-primary/20 hover:text-mint",
                        isCollapsed && "justify-center px-2"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "h-4 w-4 text-mint",
                          !isCollapsed && "mr-3"
                        )}
                      />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1 text-mint">{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 text-mint transition-transform duration-200",
                              openMenus[item.id] && "rotate-180"
                            )}
                          />
                        </>
                      )}
                    </Button>
                  </Collapsible.Trigger>
                  {!isCollapsed && (
                    <Collapsible.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                      <div className="space-y-1 mt-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="flex items-center pl-10 pr-3 py-2 text-sm font-normal text-mint hover:text-mint hover:bg-primary/20 rounded-md transition-colors"
                          >
                            <span className="w-2 h-2 bg-mint rounded-full mr-3"></span>
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </Collapsible.Content>
                  )}
                </Collapsible.Root>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center w-full px-4 py-3 text-mint rounded-md hover:bg-primary/20 hover:text-mint transition-colors",
                    isCollapsed && "justify-center px-2"
                  )}
                >
                  <item.icon
                    className={cn("h-5 w-5 text-mint", !isCollapsed && "mr-3")}
                  />
                  {!isCollapsed && (
                    <span className="text-mint">{item.label}</span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      {
        <div
          className={cn(
            " p-4 bg-forest flex  items-center",
            !isCollapsed && "justify-between"
          )}
        >
          {!isCollapsed && <div></div>}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-primary/20 border-1 border-mint/30 rounded-lg"
          >
            <CircleQuestionMark className="h-4 w-4 text-mint" />
          </Button>
        </div>
      }
    </div>
  );
};

export default memo(Sidebar);
