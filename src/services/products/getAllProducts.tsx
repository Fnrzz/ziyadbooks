import { ApiResponse } from "@/types/ProductTypes";

export const getAllProducts = async (page: number = 1, limit: number = 8) => {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${url}?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    if (!response.ok) throw new Error(response.statusText);

    const result: ApiResponse = await response.json();

    if (!result.status || result.code !== 200) {
      throw new Error(result.message || "Gagal mengambil data dari API");
    }

    const data = result.data;

    return data;
  } catch (error) {
    throw error;
  }
};
