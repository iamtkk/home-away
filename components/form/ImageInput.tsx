import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ImageInput = () => {
  const name = "image";
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        Image
      </Label>
      <Input
        className="max-w-xs"
        id={name}
        name={name}
        type="file"
        accept="image/*"
        required
      />
    </div>
  );
};
export default ImageInput;
