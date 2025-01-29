import { useProgress } from "@react-three/drei";

function Loader({ setIsLoading }) {
  const { progress, active } = useProgress();
  setIsLoading(active);
  return (
    <div className="w-full h-full text-2xl flex items-center justify-center">
      Loading {progress.toFixed(2)}%
    </div>
  );
}
export default Loader;
