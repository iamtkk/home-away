"use server";

import { profileSchema } from "./schema";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    return { message: "Profile created successfully" };
  } catch (error) {
    console.log(error);
    return { message: "There was an error" };
  }
};
