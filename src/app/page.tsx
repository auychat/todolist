import Content from "./components/Content";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-[#F2F2F2] h-screen p-8">
      <div className="max-w-[720px] mx-auto p-8 bg-white rounded-lg">
        <Header />
        <Content />
      </div>
    </main>
  );
}
