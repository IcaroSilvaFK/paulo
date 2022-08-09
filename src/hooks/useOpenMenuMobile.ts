import { useCallback, useState } from 'react';

export function useOpenMenuMobile() {
  const [isOpenMenuMobile, handleIsOpenMenuMobile] = useState(false);

  const handleOpenMenuMobile = useCallback(() => {
    handleIsOpenMenuMobile(true);
  }, [isOpenMenuMobile]);

  const handleCloseMenuMobile = useCallback(() => {
    handleIsOpenMenuMobile(false);
  }, [isOpenMenuMobile]);

  return {
    isOpenMenuMobile,
    handleOpenMenuMobile,
    handleCloseMenuMobile,
  };
}
