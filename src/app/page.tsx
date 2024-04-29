import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen max-h-screen-auto relative">
      
      <div className="absolute inset-0 flex justify-center items-center bg-bg-color bg-opacity-50">
        <span className="text-black text-3xl">Home Page ni sya</span>
      </div>
    </div>
  );
}
