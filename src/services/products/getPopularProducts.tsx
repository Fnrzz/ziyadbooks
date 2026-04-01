import { ApiResponse, Product } from "@/types/ProductTypes";

export const getPopularProducts = async (): Promise<Product[]> => {
  try {
    const url = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${url}?page=1&limit=6`, {
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

    const data = result.data.data;

    return data;
  } catch (error) {
    throw error;
  }
};
