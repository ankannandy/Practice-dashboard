import React from 'react'
import {
    BarChart3, Calendar, CreditCard, FileText, LayoutDashboard, MessagesSquare, Package, Settings, Users, ShoppingBag, Zap,
} from 'lucide-react';

const menuItems = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard className='w-5 h-5'/>,
        active: true,
        badge: "New",
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: <BarChart3 className='w-5 h-5'/>,
        submenu: [
            {
                id: "overview",  
                label: "Overview",
            },
            {
                id: "reports",  
                label: "Reports",
            },
            {
                id: "insights",  
                label: "Insights",
            },
        ]
    },
    {
        id: "users",
        label: "Users",
        icon: <Users className='w-5 h-5'/>,
        count: "2.4k",
        submenu: [
            {
                id: "all-users",  
                label: "All Users",
            },
            {
                id: "roles",  
                label: "Roles & Permissions",
            },
            {
                id: "activity",  
                label: "User Activity",
            },
        ]
    },
    {
        id: "e-commerce",
        label: "E-Commerce",
        icon: <ShoppingBag className='w-5 h-5'/>,
    },
    {
        id: "inventory",
        label: "Inventory",
        icon: <Package className='w-5 h-5'/>,
    },
    {
        id: "transactions",
        label: "Transactions",
        icon: <CreditCard className='w-5 h-5'/>,
    },
    {
        id: "massages",
        label: "Massages",
        icon: <MessagesSquare className='w-5 h-5'/>,
    },
    {
        id: "calendar",
        label: "Calendar",
        icon: <Calendar className='w-5 h-5'/>,
        active: true,
        badge: "New",
    },
    {
        id: "reports",
        label: "Reports",
        icon: <FileText className='w-5 h-5'/>,
    },
    {
        id: "settings",
        label: "Settings",
        icon: <FileText className='w-5 h-5'/>,
    },
]


function Sidebar() {
  return (
    <div className=" w-72 transition-duration-300 ease-in-out bg-white/80dark:bg-slate-900/80backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
        {/* Logo */}
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg ">
                    <Zap className='w-6 h-6 text-white'/>
                </div>
                {/* Conditional Rendering */}
                <div>
                    <h1 className='text-xl font-bold text-slate-800 dark:text-white'>Nexus</h1>
                    <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>
                </div>
            </div>
        </div>
        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            
        </nav>

        {/* User Profile */} 
        <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
            <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
                <img src="" alt="user" className='w-10 h-10 rounded-full ring-2 ring-blue-500' />
                <div className='flex-1 min-w-0'>
                    <div className='flex-1 min-w-0'>
                        <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>John Doe</p>
                        <p className='text-xs text-slate-800 dark:text-white truncate'>Administrator</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
