import SideNav from '@/components/SideNav';
 
export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-60">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto ">{children}</div>
    </div>
  );
}