import DarkVariantExample from "../Components/Slider.tsx";

export default function Home() {
  return (
    <div>
      <DarkVariantExample />
      <div
        style={{
          display: "flex",
          height: "600px",
        }}
      ></div>
      <p className='text-center fs-1 m-2'>¡Bienvenido a nuestra tienda deportiva!</p>
    </div>
  );
}
