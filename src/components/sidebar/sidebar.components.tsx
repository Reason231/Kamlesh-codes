import { Sidebar } from "flowbite-react";
import './sidebar.componets.css'


export const Homesidebar = () => {
  return (
    <>
      <Sidebar
        id="sidebarbg"
        className="relative bottom-[23.8vw] left-[1%] h-[55.7vh] w-[22vw] rounded-full p-[-22%] largelaptops:w-[22vw] largelaptops:h-[55.7vh] midmobile:w-[0vw] midmobile:[0vh]" 
        
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" class="text-xs hover:text-orange-500">Women's Fashion</Sidebar.Item>
            <Sidebar.Item href="#" class="text-xs hover:text-orange-500">Health & Beauty</Sidebar.Item>
            <Sidebar.Item href="#" class="text-xs hover:text-orange-500">Men's Fashion</Sidebar.Item>
            <Sidebar.Item href="#" class="text-xs hover:text-orange-500">Watches & Accessoires</Sidebar.Item>
            <Sidebar.Item href="#" class="text-xs hover:text-orange-500">Electronic Devices</Sidebar.Item>
            <Sidebar.Item href="#" class="text-xs hover:text-orange-500">TV & Home Appliances</Sidebar.Item>
            <Sidebar.Item href="#" class="text-xs hover:text-orange-500">Electronic Accessoires</Sidebar.Item>
            <Sidebar.Item href="#" class="text-xs hover:text-orange-500">Groceries & Pets</Sidebar.Item>
            <Sidebar.Item href="#" class="text-xs hover:text-orange-500">Sports & Outdoor</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};
