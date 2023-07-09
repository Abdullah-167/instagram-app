import Index from "@/Components/Home/Index";
import RightBar from "@/Components/Home/RightBar";
import Sidebar from "@/Components/Home/Sidebar";

export default function Home() {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Index />
      <RightBar />
    </div>
  )
}
