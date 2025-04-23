import { CONSTANTS } from "@/constants";
import { apiRequestWithToken } from "@/lib/utils";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useUserInFor = () => {
  const searchParams = useSearchParams();
  const tokenFromUrl = searchParams.get("token");
  return useQuery<User>({
    queryKey: ["authUser"],
    queryFn: async () => {
      const token = tokenFromUrl || localStorage.getItem("access_token");
      if (!token) throw new Error("No access token found");

      const res = await apiRequestWithToken<User>(
        "GET",
        CONSTANTS.api.USER.INFORMATION,
        undefined,
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (!res.success || !res.data) {
        throw new Error(res.message || "Phiên đăng nhập hết hạn");
      }
      localStorage.setItem("access_token", token);
      const fullName = res.data.firstName + " " + res.data.lastName;
      const dataUser: User = { ...res.data, fullName };
      return dataUser;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
