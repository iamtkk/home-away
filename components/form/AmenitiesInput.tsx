"use client";
import { useState } from "react";
import { amenities, Amenity } from "@/utils/amenities";
import { Checkbox } from "@/components/ui/checkbox";

const AmenitiesInput = ({ defaultValue }: { defaultValue?: Amenity[] }) => {
  const [selectedAmenities, setSelectedAmenities] = useState(
    defaultValue || amenities
  );
  const handleChange = (amenity: Amenity) => {
    setSelectedAmenities((prevAmenities) =>
      prevAmenities.map((item) =>
        item.name === amenity.name
          ? { ...item, selected: !item.selected }
          : item
      )
    );
  };
  return (
    <section>
      <input
        type="hidden"
        name="amenities"
        value={JSON.stringify(selectedAmenities)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((amenity) => {
          return (
            <div className="flex items-center space-x-2" key={amenity.name}>
              <Checkbox
                id={amenity.name}
                checked={amenity.selected}
                onClick={() => handleChange(amenity)}
              />
              <label
                className="text-sm font-medium leading-none capitalize flex gap-x-2 items-center"
                htmlFor={amenity.name}
              >
                {amenity.name} <amenity.icon className="w-5 h-5" />
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default AmenitiesInput;
