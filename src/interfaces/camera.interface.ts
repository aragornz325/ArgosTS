import { CameraView, FlashMode } from "expo-camera";

export interface CameraProps {
    hasCameraPermission: boolean | null;
    type: "front" | "back";
    setType: React.Dispatch<React.SetStateAction<"front" | "back">>;
    flash: FlashMode;
    setFlash: React.Dispatch<React.SetStateAction<FlashMode>>;
    photo: string | null;
    setPhoto: React.Dispatch<React.SetStateAction<string | null>>;
    cameraRef: React.RefObject<CameraView> | null;
    takePicture: () => void;
    saveImage: () => Promise<void>;
}