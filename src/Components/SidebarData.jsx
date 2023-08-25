import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AirplayIcon from '@mui/icons-material/Airplay';

export const SidebarData = [
    {
        index:1,
        title:"Home",
        submenu: false,
        icon: <HomeIcon />,
        url:"/Home"
    }, 
    {
        index:2,
        title:"About",
        url:"/About",
        icon: <AirplayIcon />,
        submenu: true, 
        sublink: [
            {
             id:201,
             title:"SubMenu1",
             url:"#"
            },
            {
             id:202,
             title:"SubMenu2",
             url:"#"
            },
            {
             id:203,
             title:"SubMenu3",
             url:"#"
            },
        ]
    },
    {
        index:3,
        title:"Contact",
        icon: <AccessTimeIcon />,
        submenu: true, 
        sublink: [
            {
             id:301,
             title:"SubMenu1",
             url:"#"
            },
            {
             id:302,
             title:"SubMenu2",
             url:"#"
            },
            {
             id:303,
             title:"SubMenu3",
             url:"#"
            },
        ]
    },
    {
        index:4,
        title:"Policies",
        icon: < AccessibilityIcon/>,
        submenu: true, 
        sublink: [
            {
             id:401,
             title:"SubMenu1",
             url:"#"
            },
            {
             id:402,
             title:"SubMenu2",
             url:"#"
            },
            {
             id:403,
             title:"SubMenu3",
             url:"#"
            },
        ]
    },
    

]