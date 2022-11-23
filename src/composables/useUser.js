import useGlobal from '@/composables/useGlobal';
import { useAuthStore } from "@/stores/auth.store";

export default function useUser() {
  const { loading } = useGlobal();
  const { user } = useAuthStore();
  const isLoggedIn = !!user?.access_token;

  const getUser = () => {
    if (isLoggedIn) {
      console.log('token ok')
      loading.value = false;
      return null;
    } else {
      console.log('token brak')
    }
  };

  return {
    getUser,
  };
}
