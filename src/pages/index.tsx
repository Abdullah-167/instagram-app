import Index from "@/Components/Views/Home/Index";
import RightBar from "@/Components/Views/Home/RightBar";
import Sidebar from "@/Components/Views/Home/Sidebar";

export default function Home() {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Index />
      <RightBar />
    </div>
  )
}
